function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function processTextToSymbols(text) {
  const output = document.getElementById("output-symbols");
  output.innerHTML = "";

  const punctuationMap = {
    '.': 'Period',
    '!': 'ExclamationMark',
    '?': 'Questionmark',
    ',': 'Comma',
    '\'': 'Apostrophe',
    ';': 'Semicolon',
  };

  // Trim trailing spaces and get the last character
  const trimmedText = text.trimEnd();
  const lastChar = trimmedText[trimmedText.length - 1];

  for (let i = 0; i < trimmedText.length; i++) {
    const char = trimmedText[i];
    if (char === ' ') continue;

    let imgSrc = '';

    if (/[a-zA-Z]/.test(char)) {
      imgSrc = `Assets/Letters/${char.toUpperCase()}.png`;
    } else if (char === '.' && i === trimmedText.length - 1) {
      // Special case: final period
      imgSrc = `Assets/Punctuation/EndOfScript.png`;
    } else if (punctuationMap[char]) {
      imgSrc = `Assets/Punctuation/${punctuationMap[char]}.png`;
    } else {
      continue;
    }

    const img = document.createElement("img");
    img.src = imgSrc;
    img.alt = char;
    output.appendChild(img);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("process-btn").addEventListener("click", () => {
    const input = document.getElementById("user-input").value;
    processTextToSymbols(input);
  });
});
