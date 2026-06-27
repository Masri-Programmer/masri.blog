class FolderBrief {
    /**
     * Renders a card-style overview of the current folder's contents.
     * Requires Dataview and a theme that supports the 'cards' cssclass (like Minimal).
     * @param {object} dv - The Dataview API object.
     */
    render(dv) {
        const currentFolder = dv.current().file.folder;
        // Get all pages in the current folder, excluding the current index/readme file
        const pages = dv.pages(`"${currentFolder}"`)
            .filter(p => p.file.path !== dv.current().file.path)
            .sort(p => p.file.name, 'asc');

        if (pages.length > 0) {
            // Create a table that will be styled as cards by the 'cards' cssclass
            dv.table(["Image", "Note", "Description"], pages.map(p => {
                // Extract banner image if it exists
                let banner = p.banner || "";
                if (banner && banner.includes("![[")) {
                    banner = banner.replace("![[", "").replace("]]", "").split("|")[0];
                }
                
                const img = banner ? `![[${banner}|100]]` : " ";
                const desc = p.description || " ";
                
                return [img, p.file.link, desc];
            }));
        } else {
            dv.paragraph("> [!info] This folder is empty.");
        }
    }
}
