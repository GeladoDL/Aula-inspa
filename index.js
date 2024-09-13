function validateLogin() {
    const emailInput = document.querySelector('input[type="text"]');
    const passwordInput = document.querySelector('input[type="password"]');
    const errorMessage = document.getElementById("error-message");
  
    errorMessage.textContent = "";
  
    if (!emailInput.value) {
      errorMessage.textContent = "Por favor, insira seu email.";
      return;
    }
  
    if (!passwordInput.value) {
      errorMessage.textContent = "Por favor, insira sua senha.";
      return;
    }
  
    alert("Login bem-sucedido!");
  }
  
  document.querySelector("button").addEventListener("click", validateLogin);