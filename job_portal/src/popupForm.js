document.getElementById("apply-button").addEventListener("click", function () {
  document.getElementById("job-details").classList.add("blur-background");
  document.getElementById("form-popup").style.display = "block";
});

document.getElementById("close-form").addEventListener("click", function () {
  document.getElementById("form-popup").style.display = "none";
  document.getElementById("job-details").classList.remove("blur-background");
});
