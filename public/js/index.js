
$(document).ready(() => {

  $(document).on("click", "#buy", deleteItem);

  // Image upload function
  $("#submitUpload").on("click", (event) => {
    event.preventDefault();
    console.log("front test");
    // target the form
    const form = $("#uploadForm")[0];
    // collect all data from the form (text fields AND file inputs)
    const data = new FormData(form);

    $.ajax({
      type: "POST",
      enctype: "multipart/form-data", // IMPORTANT!!!
      url: "/upload",
      data: data,
      processData: false,
      contentType: false,
      cache: false,
      timeout: 600000,
      success: function (response) {

        alert("Success!!!");

        // the back-end sends an object containing the AWS url for the newly-uploaded 
        // file and any additional data sent from the front-end via our AJAX post
        console.log(response);
        windowClose();
        // clear out the form fields for next upload
        $("#uploadForm")[0].reset();
      },
      error: function (err) {
        console.log("error test");
        console.log(err);
      }
    });
  });

  function deleteItem() {
    console.log("deleteItem");
    const id = $(this).data("id");
    $.ajax({
      method: "DELETE",
      url: "/api/items/" + id
    }).then(() => {
      location.reload();
    });
  }
});