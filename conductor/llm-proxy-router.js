const express = require('express');

const app = express();
// Allow large context windows for agents
app.use(express.json({ limit: '50mb' }));

// Configuration
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || 'your_api_key_here';
const PORT = process.env.PORT || 8402;

const OLLAMA_ENDPOINT = 'http://localhost:11434/v1/chat/completions';
const GEMINI_COMPATIBLE_ENDPOINT = 'https://generativelanguage.googleapis.com/v1beta/openai/chat/completions';

// Triggers optimized for lower-case fast scanning
const complexKeywords = ['code generation', 'complex analysis', 'strategy', 'market structure shift', 'architectural'];

app.post('/v1/chat/completions', async (req, res) => {
 try {
 const payload = req.body;

 // OPTIMIZATION: Only parse the last 2 messages instead of stringifying a 50MB array
 const messagesToScan = (payload.messages || []).slice(-2);
 const scanningText = messagesToScan.map(m => m.content || '').join(' ').toLowerCase();

 // Rule-Based Check
 const requiresPro = complexKeywords.some(keyword => scanningText.includes(keyword));

 let targetUrl = '';
 let headers = {
 'Content-Type': 'application/json'
 };

 if (requiresPro) {
 console.log("🧠 Complex task detected: Routing to Gemini Pro...");
 targetUrl = GEMINI_COMPATIBLE_ENDPOINT;
 headers['Authorization'] = `Bearer ${GEMINI_API_KEY}`;
 payload.model = 'gemini-1.5-pro'; // or gemini-2.5-pro based on availability
 } else {
 console.log("⚡️ Simple task detected: Routing to local IBM Granite...");
 targetUrl = OLLAMA_ENDPOINT;
 payload.model = 'granite-code:8b';
 }

 // Forward the request using native fetch
 const upstreamResponse = await fetch(targetUrl, {
 method: 'POST',
 headers: headers,
 body: JSON.stringify(payload)
 });

 // Pass back status and standard headers
 res.status(upstreamResponse.status);
 if (upstreamResponse.headers.get('content-type')) {
 res.setHeader('Content-Type', upstreamResponse.headers.get('content-type'));
 }

 // Handle SSE streaming correctly if OpenClaw requested it
 if (payload.stream) {
 res.setHeader('Cache-Control', 'no-cache');
 res.setHeader('Connection', 'keep-alive');

 const reader = upstreamResponse.body.getReader();

 while (true) {
 const { done, value } = await reader.read();
 if (done) break;
 res.write(value);
 }
 res.end();
 } else {
 // Non-streamed response
 const jsonResponse = await upstreamResponse.json();
 res.json(jsonResponse);
 }

 } catch (error) {
 console.error("❌ Router Error:", error);
 if (!res.headersSent) {
 res.status(500).json({ error: { message: "Internal Proxy Error", details: error.message } });
 }
 }
});

app.listen(PORT, () => {
 console.log(`🚀 OpenClaw LLM Router listening on http://localhost:${PORT}`);
 console.log(`Make sure OpenClaw API base URL is set to: http://localhost:${PORT}/v1`);
});