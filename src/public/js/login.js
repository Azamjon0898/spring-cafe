console.log("Login frontend javascript file");

function validateSignupForm() {
  const memberNick = $(".member-nick").val(),
    memberPassword = $(".member-password").val();

  if (memberNick === "" || memberPassword === "") {
    alert("Please insert all required inputs");
    return false;
  }

  if (memberNick.length < 5 || memberNick.length > 20) {
    alert("Username must be between 5 and 20 characters.");
    return false;
  }

  if (input.length < 8 && input.length > 20) {
    alert("Passwords must be 8~20 letters");
  }

  return true;
}
