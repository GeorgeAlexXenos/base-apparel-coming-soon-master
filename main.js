function validEmail() {
  let mail = document.querySelector(".mail");
  let email = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
  let errorMessage = document.querySelector("span.error-message");

  var slidingTagLiAfterStyle = document.createElement("style");
  slidingTagLiAfterStyle.innerHTML = `button:before {
  content: url(/images/icon-error.svg);
  position: absolute;
  right: 135px;
  display: "block";
}`;

  if (mail.value.match(email)) {
    alert("Your Email : " + mail.value);
  } else {
    function displayErrorMessage() {
      event.preventDefault();
      document.head.appendChild(slidingTagLiAfterStyle);
      errorMessage.style.display = "block";
    }
    displayErrorMessage();
    setTimeout(() => {
      document.head.removeChild(slidingTagLiAfterStyle);
      errorMessage.style.display = "none";
    }, 2500);
  }
}

// let errorIconMessage = document.querySelector("button"), "::before";
// errorIconMessage.style.display = "block";
// console.log(errorIconMessage);

// let displayBeforeIcon = window
//   .getComputedStyle(document.querySelector("button"), ":before")
//   .setPropertyValue("display");
// displayBeforeIcon.setPropertyValue("display")= "block";

// content: url(/images/icon-error.svg);
//   position: absolute;
//   right: 80px;
//   display: none;
