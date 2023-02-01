function addClass(id, classe) {
  let elemento = document.getElementById(id);
  let classes = elemento.className.split(" ");
  let getIndex = classes.indexOf(classe);

  if (getIndex === -1) {
    classes.push(classe);
    elemento.className = classes.join(" ");
  }
}

function delClass(id, classe) {
  let elemento = document.getElementById(id);
  let classes = elemento.className.split(" ");
  let getIndex = classes.indexOf(classe);

  if (getIndex > -1) {
    classes.splice(getIndex, 1);
  }
  elemento.className = classes.join(" ");
}

window.addEventListener("scroll", () => {
  let header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 150);
});

function Geeks(id) {
  let elemWidth = document.getElementById(id).offsetWidth;
  alert(elemWidth);

  let elemHeight = document.getElementById(id).offsetHeight;
  alert(elemHeight);
}
