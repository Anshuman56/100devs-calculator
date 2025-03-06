let input = document.querySelector("input");

function toDisplay(item) {
  input.value += item;
}
function calculate() {
  input.value = eval(input.value);
}
