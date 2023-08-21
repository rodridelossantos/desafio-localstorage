document.addEventListener("DOMContentLoaded", () => {
  const span = document.getElementById("data");

  span.innerHTML += localStorage.getItem("dato");
});
