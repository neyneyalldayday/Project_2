// const useEmail = require("./api-routes");

$(document).ready()(() => {

  $(document).on("click", "#dis", displayUser);

  function displayUser() {
    $("#title").append("<span> test string" + useEmail + "</span>");
  }
});