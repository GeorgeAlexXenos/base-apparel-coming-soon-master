function validEmail() {
  let mail = document.querySelector(".mail");
  let email = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
  let errorMessage = document.querySelector("span.error-message");
  if (mail.value.match(email)) {
    alert("Your Email : " + mail.value);
  } else {
    function displayErrorMessage() {
      errorMessage.style.display = "block";
      event.preventDefault();
    }
    displayErrorMessage();
    setTimeout(() => {
      return (errorMessage.style.display = "none");
    }, 2500);
  }
}
