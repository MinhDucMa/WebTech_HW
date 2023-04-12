const elem = document.querySelector("input");

elem.addEventListener("input", handleInput);

function handleInput() {
  const input = document.querySelector("input").value;
  const result = document.getElementById("result");

  let inputReversed = input.split("").reverse().join("");
  if (inputReversed === input) {
    document.getElementById("result").innerHTML = "Yes, this is a palindrome";
    result.classList.add("text-success");
    result.classList.remove("text-danger");
  } else {
    document.getElementById("result").innerHTML = "No.Try again";
    result.classList.add("text-danger");
    result.classList.remove("text-success");
  }
}