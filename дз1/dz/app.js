const PassToggle = () => {
    const passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  };
  
  const validateForm = () => {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm_password");
    const passwordRegex = /^(?=.\d)(?=.[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  
    if (!emailInput.value.includes("@")) {
      alert("Введите правильный адрес электронной почты, где есть @.");
      return false;
    }
  
    if (!passwordRegex.test(passwordInput.value)) {
      alert("Пароль должен содержать больше 8 символов.");
      return false;
    }
  
    if (passwordInput.value !== confirmPasswordInput.value) {
      alert("Подтвердите свой пароль.");
      return false;
    }
  
    return true;
  };