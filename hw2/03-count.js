// Add your code here
const wordInput = document.getElementById("wordInput");
const paragraph = document.getElementById("paragraph");

wordInput.addEventListener("keydown", (event) => {
  const originText = paragraph.textContent;
  if (event.key === "Enter") {
    const wordToHighlight = event.target.value.trim();

    if (wordToHighlight.length > 0) {
      //Using flag "gi" to capture all matched pattern text within a string instead of just the first matched.
      const regex = new RegExp(wordToHighlight, "gi");

      //Using $& to inserts the matched substring that was defined from RegExp()
      const matchedText = paragraph.innerHTML.replace(regex, "<mark>$&</mark>");

      paragraph.innerHTML = matchedText;
    } else paragraph.innerHTML = originText;

    event.target.value = "";
  }
});




