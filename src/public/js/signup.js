console.log("Signup frontend javascript file");

$(function () {
  $(".member-phone").on("input", function () {
    let input = $(this).val().replace(/\D/g, "");
    if (input.length > 11) input = input.substring(0, 11);

    let formatted = input;
    if (input.length > 3 && input.length <= 7) {
      formatted = input.slice(0, 3) + "-" + input.slice(3);
    } else if (input.length > 7) {
      formatted =
        input.slice(0, 3) + "-" + input.slice(3, 7) + "-" + input.slice(7);
    }

    $(this).val(formatted);
  });

  const fileTarget = $(".file-box .upload-hidden");

  $(function () {
    const fileTarget = $(".file-box .upload-hidden");

    fileTarget.on("change", function () {
      if (window.FileReader) {
        const uploadFile = $(this)[0].files[0];
        const fileType = uploadFile["type"];
        const validImageType = ["image/jpg", "image/jpeg", "image/png"];

        if (!validImageType.includes(fileType)) {
          alert("Please insert only jpeg, jpg and png!");
        } else if (uploadFile) {
          const filename = uploadFile.name;

          $(".upload-img-frame img")
            .attr("src", URL.createObjectURL(uploadFile))
            .addClass("success");

          $(this).siblings(".upload-name").val(filename);
        }
      }
    });
  });
});

function validateSignupForm() {
  const memberNick = $(".member-nick").val(),
    memberPhone = $(".member-phone").val(),
    memberPassword = $(".member-password").val(),
    confirmPassword = $(".confirm-password").val();

  if (
    memberNick === "" ||
    memberPhone === "" ||
    memberPassword === "" ||
    confirmPassword === ""
  ) {
    alert("Please insert all required inputs");
    return false;
  }

  if (memberNick.length < 5 || memberNick.length > 20) {
    alert("Username must be between 5 and 20 characters.");
    return false;
  }

  const phonePattern = /^\d{3}-\d{4}-\d{4}$/;
  if (!phonePattern.test(memberPhone)) {
    alert("Phone number must be in the format XXX-XXXX-XXXX");
    return false;
  }

  if (memberPassword !== confirmPassword) {
    alert("Passwords do not match");
    return false;
  } else if (input.length < 8 && input.length > 20) {
    alert("Passwords must be 8~20 letters");
  }

  const memberImage = $(".member-image")?.get(0)?.files[0]
    ? $(".member-image").get(0).files[0].name
    : null;
  if (!memberImage) {
    alert("Please upload a Admin image");
    return false;
  }

  return true;
}
