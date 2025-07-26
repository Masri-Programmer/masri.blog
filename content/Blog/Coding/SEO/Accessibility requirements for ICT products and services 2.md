The **EN 301 549 standard**, titled "Accessibility requirements for ICT products and services," is a European standard for digital accessibility that defines requirements for public sector Information and Communication Technology (ICT). Conformance with its normative clauses provides a presumption of conformity with the essential requirements of Directive 2016/2102 on the accessibility of websites and mobile applications of public sector bodies.

---

## Detailed Regulations

Here is a description of each bullet point outlining the regulations:

### General Requirements (Chapter 5, EN)

- **5.2 Activation of accessibility features**: This requirement ensures that any documented accessibility features within the ICT can be **activated without needing a method that itself creates an accessibility barrier** for the user.
- **5.3 Biometrics**: When ICT uses biological characteristics for user identification or control, it **must not rely on a single characteristic as the _only_ means**, requiring alternative identification or control methods.
- **5.4 Preservation of accessibility information during conversion**: If ICT converts information or communication, it must **preserve all documented non-proprietary accessibility information** to the extent that the destination format can support it.

### Requirements for Technologies with Two-Way Voice Communication (Chapter 6, EN)

- **6.1 Audio bandwidth for speech**: For ICT providing two-way voice communication, it must be able to **encode and decode audio with an upper frequency limit of at least 7,000 Hz**.
- **6.2.1.1 Real-time text communication**: Where ICT offers two-way voice communication, it **shall also provide two-way Real-Time Text (RTT) communication**, unless this would necessitate design changes to add new input or output hardware.
- **6.2.1.2 Concurrent voice and text**: If ICT supports both two-way voice and RTT, it must allow for **simultaneous voice and text communication via a single user connection**.
- **6.2.2.1 Visually distinguishable display of real-time text messages**: ICT with RTT capabilities must display sent text in a way that is **visually differentiated and separated from received text**.
- **6.2.2.2 Programmatically distinguishable display of real-time text messages**: For ICT with RTT send/receive capabilities, the **send/receive direction of text must be programmatically determinable**, unless it's a closed functionality.
- **6.2.2.3 Speaker identification**: If ICT provides speaker identification for voice users, it must also provide **speaker identification for RTT**.
- **6.2.2.4 Real-time display of speech activity**: ICT supporting two-way voice communication and RTT must provide a **real-time visual indicator of audio activity** on the display.
- **6.2.3 Interoperability of real-time communication**: ICT with RTT functionality must support applicable RTT interoperability mechanisms, including standards for direct connections to the Public Switched Telephone Network (PSTN), VOIP with Session Initiation Protocol (SIP), or other relevant common specifications for RTT exchange.
- **6.2.4 Response speed of real-time text communication**: When ICT uses RTT input, that input must be **transmitted to the network or platform within 500 ms** from when the smallest reliably composed unit of text is available for transmission, excluding network or platform performance delays.
- **6.3 Caller identification**: Caller identification and similar telecommunications functions must be available in **text form and be programmatically determinable**, unless the functionality is closed.
- **6.5 Resolution for video telephony**: ICT providing two-way voice communication with real-time video functionality must support at least **QVGA resolution (320 x 240)**, with VGA resolution being preferable.
- **6.5.3 Frame rate for video telephony**: Real-time video functionality in two-way voice communication must support a **frame rate of at least 20 Frames Per Second (FPS)**, with 30 FPS being preferable.

### Requirements for Integrated Video Players (Chapter 7, EN)

- **7.1.1 Subtitle playback**: If ICT displays video with synchronized audio, it must offer a mode to **display available captions (subtitles)**, allowing users to choose to display closed captions.
- **7.1.2 Synchronous subtitles**: The mechanism for displaying captions must **maintain synchronization between the audio and corresponding captions within 100 ms**.
- **7.1.3 Preservation of subtitles**: When ICT transmits, converts, or records video with synchronized audio, it must **preserve caption data** so it can be displayed consistently with the standard's requirements.
- **7.2.1 Audio description playback**: ICT displaying video with synchronized audio must provide a mechanism to **select and play available audio descriptions** to the default audio channel.
- **7.2.2 Synchronous audio description**: If ICT has a mechanism to play audio description, it must **preserve the synchronization** between the audio/visual content and the audio description.
- **7.2.3 Preservation of audio description**: When ICT transmits, converts, or records video with synchronized audio, it must **preserve audio description data** for consistent playback.
- **7.3 User controls for subtitles and audio description**: For ICT primarily displaying video with audio, user controls to **activate subtitling and audio description must be provided at the same level of interaction (number of steps) as the primary media controls**.

### Requirements regarding User-Defined Settings and Authoring Tools (Chapter 11, EN)

- **11.7 User-defined settings**: Software not isolated from its platform, and providing a user interface, must **follow user preferences for platform settings** such as units of measurement, colour, contrast, font type, font size, and focus cursor, unless the user overrides them.
- **11.8.2 Accessible content creation**: Authoring tools must **enable and guide the production of content that conforms to the requirements for web (clause 9) or non-web (clause 10) content**.
- **11.8.3 Preservation of accessibility information during transformation**: If authoring tools perform restructuring or re-coding transformations, **accessibility information must be preserved in the output**, provided equivalent mechanisms exist in the output content technology.
- **11.8.4 Repair assistance**: If an authoring tool's accessibility checking functionality can detect content that doesn't meet the requirements of clauses 9 (Web) or 10 (Non-web documents), the tool must provide **repair suggestion(s)**.
- **11.8.5 Templates**: When an authoring tool provides templates, at least one template that supports the creation of content conforming to web (clause 9) or non-web (clause 10) requirements **must be available and identified** as such.

### Requirements for Documentation and Support (Chapter 12, EN)

- **12.1.1 Documentation of compatibility and accessibility**: Product documentation provided with the ICT (whether separate or integrated) must **list and explain how to use the ICT's accessibility and compatibility features**.
- **12.1.2 Accessible documentation**: Product documentation provided electronically must be made available in an **electronic format that conforms to the requirements of clause 9 (Web) or clause 10 (Non-web documents)**.
- **12.2.2 Technical support**: ICT support services must **provide information on the accessibility and compatibility features** that are mentioned in the product documentation.
- **12.2.3 Effective communication**: ICT support services must **accommodate the communication needs of individuals with disabilities**, either directly or through a referral point.
- **12.2.4 Documentation provided by support**: Documentation provided by support services must be made available in an **electronic format that conforms to the requirements of clause 9 (Web) or clause 10 (Non-web documents)**.

---

The EN 301 549 standard incorporates aspects of the Web Content Accessibility Guidelines (WCAG). Specifically, it states that the **WCAG 2.1 Level A and AA success criteria are mandatory** for conformance. This includes 30 Level A and 20 Level AA success criteria from WCAG 2.1 (June 2018). WCAG 2.1 Level AAA success criteria are also listed in EN 301 549 (clause 9.5) but are considered informative and extended criteria, not required for all content on a web page.