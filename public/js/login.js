// const useEmail = require();

$(document).ready(() =>{ 
  const emailInput = $("#email-input");
  const passwordInput = $("#password-input");

  function loginUser(email, password) {
    $.post("/api/login", {
      email: email,
      password: password
    })
      .then(() => {
        window.location.replace("/index");
      })
      .fail((err) => {
        console.log(err);
      });
  }
      
  $("#siteLog").on ("submit", event => {
    event.preventDefault();
    const userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };
    // const loginForm = $("form.login");       
    if (!userData.email || !userData.password) {
      return;
    }
    console.log("user email: " + userData.email);
      
    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });
    
  function loginUser(email, password) {
    $.post("/api/login", {
      email: email,
      password: password
    })
      .then(() => {
        window.location.replace("");
      })
      .fail((err) => {
        console.log(err);
      });
  }
});


    