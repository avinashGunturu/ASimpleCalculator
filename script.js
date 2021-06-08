// const input1 = document.getElementById('input1')
// const input2 = document.getElementById('input2')
const add = document.getElementById("add");
const sub = document.getElementById("sub");
const mul = document.getElementById("mul");
const division = document.getElementById("division");
const result = document.getElementById("result");
const clear = document.getElementById("clear");

add.addEventListener("click", () => addnum());
sub.addEventListener("click", () => subnum());
mul.addEventListener("click", () => mulnum());
division.addEventListener("click", () => divnum());

clear.addEventListener("click", (e) => {
  document.getElementById("input1").value = "";
  document.getElementById("input2").value = "";
  result.innerHTML = "";
});

function addnum() {
  var input1 = parseFloat(document.getElementById("input1").value);
  var input2 = parseFloat(document.getElementById("input2").value);
  result.innerHTML = `<h2>${input1 + input2}</h2>`;
}
function subnum() {
  var input1 = parseFloat(document.getElementById("input1").value);
  var input2 = parseFloat(document.getElementById("input2").value);
  result.innerHTML = `<h2>${input1 - input2}</h2>`;
}
function mulnum() {
  var input1 = parseFloat(document.getElementById("input1").value);
  var input2 = parseFloat(document.getElementById("input2").value);
  result.innerHTML = `<h2>${input1 * input2}</h2>`;
}
function divnum() {
  var input1 = parseFloat(document.getElementById("input1").value);
  var input2 = parseFloat(document.getElementById("input2").value);
  result.innerHTML = `<h2>${input1 / input2}</h2>`;
}
