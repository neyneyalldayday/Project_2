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
      .catch((err) => {
        console.log(err);
      });
  }
    
    
  $("#siteLog").on ("submit"), event => {
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

    console.log("user email: " + userData.email);
  };
    
    
  function loginUser(email, password) {
    $.post("/api/login", {
      email: email,
      password: password
    })
      .then(() => {
        res.redirect("/sell");
      })
      .catch((err) => {
        console.log(err);
      });
  }
});


    