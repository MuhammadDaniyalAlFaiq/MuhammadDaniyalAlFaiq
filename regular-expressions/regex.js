const regex = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    username: /^[a-zA-Z0-9_]{3,10}$/,
    tanggal: /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
    ipv4: /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  };
  
  function validateInput(inputId, regexType, messageId) {
    const input = document.getElementById(inputId);
    const message = document.getElementById(messageId);
    input.addEventListener('input', function() {
      if (regexType.test(input.value)) {
        message.textContent = getMessage(true, inputId);
        message.style.color = "green";
      } else {
        message.textContent = getMessage(false, inputId);
        message.style.color = "red";
      }
    });
  }
  
  function getMessage(valid, inputId) {
    const messageMap = {
      emailInput: valid ? "Format Email Sudah Valid" : "Format Email harus menggunakan '@gmail.com'",
      usernameInput: valid ? "Format Username Sudah Valid" : "Format Username hanya menggunakan huruf dan angka, minimal 3 dan maksimal 10 karakter",
      tanggalInput: valid ? "Format Tanggal Sudah Valid" : "Format Tanggal Tidak Valid",
      ipv4Input: valid ? "Format IPv4 Sudah Valid" : "Format IPv4 Contoh : '192.127.1.1', '255.255.255.0",
      passwordInput: valid ? "Format Password Sudah Valid" : "Format Password Minimal 8 Karakter, 1 Huruf Kapital, 1 Huruf Kecil, 1 Angka, dan 1 Karakter Khusus"
    };
  
    return messageMap[inputId];
  }
  
  // Memanggil fungsi validateInput untuk setiap input
  validateInput('emailInput', regex.email, 'emailValidationMessage');
  validateInput('usernameInput', regex.username, 'usernameValidationMessage');
  validateInput('tanggalInput', regex.tanggal, 'tanggalValidationMessage');
  validateInput('ipv4Input', regex.ipv4, 'ipv4ValidationMessage');
  validateInput('passwordInput', regex.password, 'passwordValidationMessage');
  