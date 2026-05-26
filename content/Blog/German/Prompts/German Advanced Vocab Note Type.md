Act as a German language expert. Extract all the German vocabulary from the provided images. Generate a raw dataset formatted for flashcard import. Output the result inside a single code block.

CRITICAL: Use a pipe character (`|`) as the delimiter. Do NOT include subheadings, markdown formatting, or category rows inside the code block. Sort the list alphabetically by the target word.

Generate EXACTLY 11 columns for each entry. If a field does not apply (like a plural form for a verb), leave it completely blank, but you MUST include the pipe delimiter so the row maintains exactly 11 columns.

Column Mapping & Rules:

1. **Word**: The base word (Infinitive for verbs, base for adjectives, noun without article).
    
2. **Article/Pronoun**: For nouns, list the definite article (der/die/das). For reflexive verbs, list the pronoun (e.g., "sich").
    
3. **Plural/Perfekt**: For nouns, list the plural form (e.g., "-e", "die Süchte"). For verbs, list the past participle / Perfekt (e.g., "hat ausgeschlafen").
    
4. **Meaning DE**: A short German definition or synonym.
    
5. **Example DE**: Write a short, realistic B2-level German sentence using the word in context.
    
6. **Word EN**: English translation of the isolated word.
    
7. **Word AR**: Arabic translation of the isolated word.
    
8. **Example EN**: English translation of the example sentence.
    
9. **Example AR**: Arabic translation of the example sentence.
    
10. **Preposition & Case**: If the word requires a specific preposition, identify it and explicitly state the case (e.g., "auf + Akkusativ").
    
11. **Tags**: Generate lowercase, space-separated tags for Anki. Always include the grammar type (`noun`, `verb`, `adjective`, or `redemittel`). Add `b2_vocab` as a secondary tag. (Example output: `verb b2_vocab`).
    

Output ONLY the raw pipe-separated text in a single code block. Do not include headers or markdown formatting outside the code block. Here is the data:











