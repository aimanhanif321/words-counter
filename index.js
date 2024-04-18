

let textArea = document.getElementById("textArea");
let characters = document.getElementById("characters");
let words = document.getElementById("words");
let sentences = document.getElementById("sentences");
let paragraph = document.getElementById("paragraph");

textArea.addEventListener("input", () => {
    characters.textContent = textArea.value.length;
    let text = textArea.value.trim();

    words.textContent = text.split(/\s+/).filter((items) => items).length;

    sentences.textContent = text.split(/[.|!|?]+/g).length-1;

    paragraph.textContent = text.replace(/\n\$/gm , ' ').split(/\n/).length;

} );