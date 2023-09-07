let value = document.querySelector("#value");
let inc = document.querySelector("#inc");
let dec = document.querySelector("#dec");
let res = document.querySelector("#res");

let count = 0;

value.textContent = count;

inc.addEventListener("click", function() {
  count++;
  value.textContent = count;

  if (count >= 10) {
    value.style.color = "red";
  }
  
  if (count >= 5 && count < 10) {
    value.style.color = "blue";
  }
});

dec.addEventListener("click", function() {
  if (count > 0) {
    count--;
    value.textContent = count;
    value.style.color = "black"
  }

  if (count >= 10) {
    value.style.color = "red";
  }
  
  if (count >= 5 && count < 10) {
    value.style.color = "blue";
  }
  
});

res.addEventListener("click", function() {
  count = 0;
  value.textContent = count;
  value.style.color = "black"; // Restaurar el color original
});