const panels = document.querySelectorAll(".panel");

function toggleThePanels() {
  this.classList.toggle("open");
}

function toggleActive(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

panels.forEach((panel) => panel.addEventListener("click", toggleThePanels));

panels.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);
