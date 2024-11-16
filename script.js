// Fetch the Markdown file and render it in the browser
fetch("javascript.md")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch the Markdown file.");
    }
    return response.text();
  })
  .then((markdownContent) => {
    // Configure Showdown.js and enable table support
    const converter = new showdown.Converter({
      tables: true, // Enable table support
      simplifiedAutoLink: true, // Automatically link URLs
      strikethrough: true, // Enable strikethrough
      ghCodeBlocks: true, // GitHub-style code blocks
    });

    // Convert Markdown to HTML
    const htmlOutput = converter.makeHtml(markdownContent);

    // Append the converted HTML to the output div
    const outputDiv = document.getElementById("markdown-output");
    outputDiv.innerHTML = htmlOutput;

    // Highlight code blocks using Highlight.js
    document.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightElement(block);
    });
  })
  .catch((error) => {
    console.error("Error:", error);
    document.getElementById("markdown-output").textContent =
      "Error loading Markdown content.";
  });
