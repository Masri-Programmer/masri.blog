#### Prompt 1: For Scrape-to-Cloze (Grammar)

This prompt forces the AI to read a grammar explanation, extract the core rule, and generate testable sentences using Anki's exact syntax.

> Act as an expert German C1 instructor. I am providing text from a German grammar website.
> 
> **Your Task:** Analyze the grammar rules explained in the text. For every distinct rule found, generate 3 to 5 realistic, B2/C1-level example sentences that test this specific rule.
> 
> **Formatting Rules:**
> 
> 1. Format the output strictly as a pipe-separated CSV. Do not include markdown tables or headers.
>     
> 2. Output exactly 4 columns: `Text | Extra | Source | Tags`.
>     
> 3. **Text:** Write the German sentence. Hide the grammatical target (e.g., the preposition, the adjective ending, the conjugated verb) using Anki's cloze syntax: `{{c1::target}}`.
>     
>     - _Example:_ `Wir interessieren uns sehr {{c1::für}} die neue Software.`
>         
> 4. **Extra:** Write a concise, 1-2 sentence explanation in English of _why_ this specific answer is correct based on the rule (e.g., "Interessieren takes the preposition 'für' + Akkusativ").
>     
> 5. **Source:** Populate this column with: [INSERT WEBSITE NAME OR URL HERE].
>     
> 6. **Tags:** Generate space-separated tags (e.g., `grammar::praepositionen b2`).
>     
> 
> Output the raw pipe-separated data inside a single code block. Here is the source text:
> 
> [PASTE GRAMMAR TEXT HERE]

#### Prompt 2: For Scrape-to-Framework (Writing)

This prompt looks for structural writing elements (introductions, transitions, conclusions) and packages them for your Front/Back cards.

> Act as an expert German C1 instructor. I am providing text detailing how to write formal German texts (emails, essays, complaints, etc.).
> 
> **Your Task:** Extract the structural writing phrases (Redemittel for writing) and format them into a strict pipe-separated CSV. Do not include markdown tables or headers.
> 
> **Formatting Rules:** Output exactly 5 columns: `Front | Back | Explanation | Source | Tags`.
> 
> 1. **Front:** Describe the rhetorical purpose or scenario in English (e.g., "Formal Email Opening (Unknown Recipient)").
>     
> 2. **Back:** Provide the exact German phrase (e.g., "Sehr geehrte Damen und Herren,").
>     
> 3. **Explanation:** Briefly explain any punctuation, capitalization, or tone rules associated with this phrase (e.g., "Always followed by a comma. The first word of the next line must be lowercase.").
>     
> 4. **Source:** Populate this column with: [INSERT WEBSITE NAME OR URL HERE].
>     
> 5. **Tags:** Generate space-separated tags (e.g., `writing::formal_email b2`).
>     
> 
> Output the raw pipe-separated data inside a single code block. Here is the source text:
> 
> [PASTE WRITING GUIDE TEXT HERE]