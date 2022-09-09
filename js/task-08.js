const loginForm = document.querySelector("form.login-form");

const submitForm = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    const alertMessage = "Please fill in all the fields!";
    return alert(alertMessage);
  }

  const messageLogInfo = `{${email.name}: ${email.value}, ${password.name}: ${password.value}}`;
  console.log(messageLogInfo);

  event.currentTarget.reset();
};

loginForm.addEventListener("submit", submitForm);
