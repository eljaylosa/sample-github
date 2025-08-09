document.querySelector(".form").addEventListener("submit", function (e) {
  const name = document.querySelector(".name input").value.trim();
  const business = document.querySelector(".bus-name input").value.trim();
  const phone = document.querySelector(".phone input").value.trim();
  const email = document.querySelector(".email input").value.trim();
  const requirement = document.querySelector(".requirement textarea").value.trim();

  if (!name || !business || !phone || !email || !requirement) {
    e.preventDefault(); // Stop the form from submitting
    alert("Please fill in all fields before proceeding to payment.");
  }
});

document.getElementById("requestForm").addEventListener("submit", function () {
  const requirement = document.querySelector("textarea").value;
  localStorage.setItem("requirementText", requirement);
});