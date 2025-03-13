let obj = {};
obj.first = "";
obj.second = "";
obj.opration = "";
obj.input = document.querySelector("input");
obj.toDisplay = function (item) {
  this.input.value += item;
};
obj.clear = function () {
  this.input.value = "";
};
obj.toOparation = function (item) {
  obj.first = this.input.value;
  obj.input.value = "";
  if (item === "+") {
    obj.opration = item;
  }
  if (item === "-") {
    obj.opration = item;
  }
  if (item === "*") {
    obj.opration = item;
  }
  if (item === "/") {
    obj.opration = item;
  }
};
obj.calculate = function () {
  obj.second = this.input.value;
  if (obj.opration === "+") {
    this.input.value = Number(obj.first) + Number(obj.second);
  }
  if (obj.opration === "-") {
    this.input.value = Number(obj.first) - Number(obj.second);
  }
  if (obj.opration === "*") {
    this.input.value = Number(obj.first) * Number(obj.second);
  }
  if (obj.opration === "/") {
    this.input.value = Number(obj.first) / Number(obj.second);
  }
};
