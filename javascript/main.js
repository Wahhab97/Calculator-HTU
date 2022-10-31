let clickable = document.querySelectorAll("main section *:not(.equal)");
let equal = document.querySelector(".equal");
let c = document.querySelector(".c");
let display = document.querySelector(".display");
let ans = false;

function checkLastChar() {
  return (last = display.textContent.slice(-1));
}
function clicked(element) {
  let value = element.style.border;
  element.style.border = "2px solid black";
  setTimeout(() => {
    element.style.border = value;
  }, 200);
}

for (let i = 0; i < clickable.length; i++) {
  clickable[i].addEventListener("click", () => {
    let last = checkLastChar();
    let item = clickable[i];
    item.classList.add("clicked");
    clicked(item);
    let itemHTML = item.innerHTML;
    if (isNaN(last) && isNaN(itemHTML)) {
    } else {
      if (!ans) {
        display.textContent += itemHTML;
      } else if (ans && isNaN(itemHTML)) {
        display.textContent += itemHTML;
        ans = false;
      }
    }
  });
}

c.addEventListener("click", () => {
  clicked(c);
  display.textContent = "";
  ans = false;
});

equal.onclick = () => {
  clicked(equal);
  let dummy = eval(display.textContent);
  display.textContent = dummy;
  ans = true;
};
