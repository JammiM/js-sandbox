const inputs = document.querySelectorAll(".controls input");
const imageElem = document.getElementsByClassName("image")[0];

function handleUpdates() {
  let suffix = this.dataset.suffix || "";

  imageElem.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach((input) => {
  input.addEventListener("change", handleUpdates);
});
