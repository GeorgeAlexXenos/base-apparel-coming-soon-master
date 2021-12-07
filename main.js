function validEmail() {
  let mail = document.querySelector(".mail");
  let email = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
  let errorMessage = document.querySelector("span.error-message");
  let errorIcon = document.querySelector(".error-icon");

  if (mail.value.match(email)) {
    alert("Your Email : " + mail.value);
  } else {
    function displayErrorMessage() {
      event.preventDefault();
      errorMessage.style.display = "block";
      errorIcon.style.display = "block";
    }
    displayErrorMessage();
    setTimeout(() => {
      errorMessage.style.display = "none";
      errorIcon.style.display = "none";
    }, 2500);
  }
}
