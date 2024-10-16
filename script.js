document.getElementById("show-more").addEventListener("click", function () {
  var details = document.getElementById("project-details");
  if (details.style.display === "none") {
    details.style.display = "block";
    this.textContent = "Show Less";
  } else {
    details.style.display = "none";
    this.textContent = "Show More";
  }
});
