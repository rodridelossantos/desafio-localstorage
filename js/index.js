document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("inputText");
  const btn = document.getElementById("buttonText");

  btn.addEventListener("click", () => {
    localStorage.setItem("dato", input.value);
  });
});
