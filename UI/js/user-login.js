//LOGIN REDIRECT FOR USER OR ADMIN

const submitButton = document.getElementById('submit-btn')
submitButton.addEventListener('click', function (e) {

   location.href = "dashboard.html";

  e.preventDefault();
})
