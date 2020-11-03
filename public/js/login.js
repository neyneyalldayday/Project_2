// $(document).ready(() =>{

  
//   const emailInput = $("input#email-input");
//   const passwordInput = $("input#password-input");
//   function loginUser(email, password) {
//     $.post("/api/login", {
//       email: email,
//       password: password
//     })
//       .then(() => {
//         window.location.replace("/index");
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
    
    
//   $("#siteLog").on ("submit"), event => {
//     event.preventDefault();
//     const userData = {
//       email: emailInput.val().trim(),
//       password: passwordInput.val().trim()
//     };
    
//     if (!userData.email || !userData.password) {
//       return;
//     }
    
      
//     loginUser(userData.email, userData.password);
//     emailInput.val("");
//     passwordInput.val("");
//   };
    
    
  
// });
    