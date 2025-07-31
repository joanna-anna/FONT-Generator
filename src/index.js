function displayFont(response) {
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

  let context = `Please treat the user's input as reference context for the result. Return exactly 3 font suggestions in the following structure:

I. Heading: **[Font Name]**, [Font Size]px
II. Body text (paragraph): **[Font Name]**, [Font Size]px
III. Highlighted/emphasized text: **[Font Name]**, [Font Size]px

Add blank line between I, II, III and add bold to font Name.

Explanation:
I. **[Heading Font Name in style from font]** - explain why this font fits the context and usage.
II. **[Body Font Name]** - explain why this font fits the context and usage.
III. **[Highlight Font Name]** - explain why this font fits the context and usage.

Also include recommended line height (line spacing) for each font type and make I,II,III inside bold element.

Fonts must be:
- suitable for digital use,
- highly legible on screens,
- visually compatible,
- preferably available on Google Fonts,
- chosen according to their role (e.g., bold for headings, neutral for body text, distinctive for highlights).

Do NOT include backticks  around font names, use only bold markdown (**) for font names and sizes.

Use markdown formatting for lists and bold text.

Follow user instructions strictly.`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let fontElement = document.querySelector("#font");
  fontElement.classList.remove("hidden");
  fontElement.innerHTML = `<div class="blinking">⏳ Searching for the best font match for you about ${instructionsInput.value}</div>`;

  axios.get(apiUrl).then(displayFont);
}

let FontElement = document.querySelector("#font-generation");
FontElement.addEventListener("submit", generateFont);
