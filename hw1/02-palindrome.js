const elem = document.querySelector("input");

elem.addEventListener("input", handleInput);

function handleInput() {
  const input = document.querySelector("input").value;
  const result = document.getElementById("result");

  let inputReversed = input.split("").reverse().join("");

  if (input.length === 0 || isNaN(Number(input)) ) {
    result.innerHTML = "Please enter numerical input";
    console.log("String is empty");
  } else {
    if (inputReversed === input) {
      result.innerHTML = "Yes, this is a palindrome";
      result.style.color = 'darkGreen'
    } else {
      result.innerHTML = "No.Try again";
      result.style.color = 'darkRed';
    }
  }
  if (input === "") {
    result.innerHTML = "";
  }
}
