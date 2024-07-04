$(document).ready(function () {
  // Login Form Submit
  $("#loginForm").submit(function (event) {
    event.preventDefault();
    var username = $("#username").val();
    var password = $("#password").val();
    $.ajax({
      type: "POST",
      url: "/login",
      data: JSON.stringify({ username: username, password: password }),
      contentType: "application/json",
      success: function (data) {
        // Store token in localStorage
        localStorage.setItem("accessToken", data.accessToken);
        // Redirect to product management page
        window.location.href = "/product_management.html";
      },
      error: function (xhr, textStatus, errorThrown) {
        console.log(xhr.responseText);
        var errorMessage = "An error occurred";
        if (xhr.responseJSON && xhr.responseJSON.message) {
          errorMessage = xhr.responseJSON.message;
        }
        alert("Login failed: " + errorMessage);
      },
    });
  });
});
