let obj = {};
obj.input = document.querySelector("input");
obj.toDisplay = function (item) {
  this.input.value += item;
};
obj.calculate = function () {
  this.input.value = eval(this.input.value);
};
