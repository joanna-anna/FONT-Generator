function displayFont(response) {
   // Zamieniamy podwójne nowej linii (\n\n) na akapity HTML (<br /><br />)
  let formattedAnswer = response.data.answer
    .replace(/\n/g, "<br />")
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  
  new Typewriter("#font", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateFont(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "d0fo1c2387c00a7200tda8b3e35c0794";

  let prompt = `User instructions: I am searching for ${instructionsInput.value}`;

  let context = `Please treat the user's input as reference context for the result. Provide a clear, formatted result with empty lines between points:

I. **[Heading Font Name]**, [Font Size]px
[Explanation why this heading font fits]

II. **[Body Font Name]**, [Font Size]px
[Explanation why this body font fits]

III. **[Highlight Font Name]**, [Font Size]px
[Explanation why this highlight font fits]


Requirements:
- Make sure to place each point (I, II, III) on its own separate block with a line break before the next point.
- Keep the font names and sizes strictly in bold using Markdown (**Font Name**).
- Include recommended line height (line spacing) for each font type.
- Fonts must be suitable for digital use, highly legible, visually compatible, and preferably available on Google Fonts.
- Follow user instructions strictly.`;

Follow user instructions strictly.`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let fontElement = document.querySelector("#font");
  fontElement.classList.remove("hidden");
  fontElement.innerHTML = `<div class="blinking">⏳ Searching for the best font  ${instructionsInput.value}</div>`;

  axios.get(apiUrl).then(displayFont);
}

let FontElement = document.querySelector("#font-generation");
FontElement.addEventListener("submit", generateFont);
