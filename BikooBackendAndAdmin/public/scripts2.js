$(document).ready(function () {
  // Function to fetch products and display them
  function fetchProducts() {
    $.ajax({
      type: "GET",
      url: "/products",
      success: function (products) {
        // Display products on the page
        var productListHtml = "";
        products.forEach(function (product) {
          productListHtml += '<div class="card mb-3">';
          productListHtml +=
            '<img src="' +
            product.image +
            '" class="card-img-top" alt="Product Image">';
          productListHtml += '<div class="card-body">';
          productListHtml += '<h5 class="card-title">' + product.name + "</h5>";
          productListHtml +=
            '<p class="card-text">' + product.description + "</p>";
          productListHtml +=
            '<p class="card-text">Price: $' + product.price + "</p>";
          // Add icons for update and delete
          productListHtml +=
            '<button class="btn btn-primary update-product" data-id="' +
            product._id +
            '">Update</button>';
          productListHtml +=
            '<button class="btn btn-danger delete-product" data-id="' +
            product._id +
            '">Delete</button>';
          productListHtml += "</div></div>";
        });
        $("#productList").html(productListHtml);
      },
      error: function (xhr, textStatus, errorThrown) {
        console.log(xhr.responseText);
        var errorMessage = "Failed to retrieve products";
        if (xhr.responseJSON && xhr.responseJSON.message) {
          errorMessage = xhr.responseJSON.message;
        }
        alert(errorMessage);
      },
    });
  }

  // Call fetchProducts function after successful login
  if (localStorage.getItem("accessToken")) {
    fetchProducts();
  }

  // Add product form submission
  $("#addProductForm").submit(function (event) {
    event.preventDefault();
    var name = $("#addName").val();
    var price = $("#addPrice").val();
    var description = $("#addDescription").val();
    var image = $("#addImage").val();
    $.ajax({
      type: "POST",
      url: "/products",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
      data: JSON.stringify({
        name: name,
        price: price,
        description: description,
        image: image,
      }),
      contentType: "application/json",
      success: function (data) {
        alert("Product added successfully.");
        // Reset the form fields
        $("#addProductForm")[0].reset();
        // Close the modal
        $("#addProductModal").modal("hide");
        fetchProducts();
      },
      error: function (xhr, textStatus, errorThrown) {
        console.log(xhr.responseText);
        var errorMessage = "An error occurred";
        if (xhr.responseJSON && xhr.responseJSON.message) {
          errorMessage = xhr.responseJSON.message;
        }
        alert("Failed to add product: " + errorMessage);
      },
    });
  });

  // Delete product
  $(document).on("click", ".delete-product", function () {
    var productId = $(this).data("id");
    if (confirm("Are you sure you want to delete this product?")) {
      $.ajax({
        type: "DELETE",
        url: "/products/" + productId,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
        success: function () {
          fetchProducts();
        },
        error: function (xhr, textStatus, errorThrown) {
          console.log(xhr.responseText);
          var errorMessage = "Failed to delete product";
          if (xhr.responseJSON && xhr.responseJSON.message) {
            errorMessage = xhr.responseJSON.message;
          }
          alert(errorMessage);
        },
      });
    }
  });

  // Show update modal
  $(document).on("click", ".update-product", function () {
    var productId = $(this).data("id");
    $.ajax({
      type: "GET",
      url: "/products/" + productId,
      success: function (product) {
        $("#productId").val(product._id);
        $("#updateName").val(product.name);
        $("#updatePrice").val(product.price);
        $("#updateDescription").val(product.description);
        $("#updateImage").val(product.image);
        $("#updateImagePreview").attr("src", product.image).show();
        $("#updateProductModal").modal("show");
      },
      error: function (xhr, textStatus, errorThrown) {
        console.log(xhr.responseText);
        var errorMessage = "Failed to retrieve product data";
        if (xhr.responseJSON && xhr.responseJSON.message) {
          errorMessage = xhr.responseJSON.message;
        }
        alert(errorMessage);
      },
    });
  });

  // Update product
  $("#updateProductForm").submit(function (event) {
    event.preventDefault();
    var productId = $("#productId").val();
    var name = $("#updateName").val();
    var price = $("#updatePrice").val();
    var description = $("#updateDescription").val();
    var image = $("#updateImage").val();
    $.ajax({
      type: "PATCH",
      url: "/products/" + productId,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
      data: JSON.stringify({
        name: name,
        price: price,
        description: description,
        image: image,
      }),
      contentType: "application/json",
      success: function () {
        $("#updateProductModal").modal("hide");
        fetchProducts();
      },
      error: function (xhr, textStatus, errorThrown) {
        console.log(xhr.responseText);
        var errorMessage = "Failed to update product";
        if (xhr.responseJSON && xhr.responseJSON.message) {
          errorMessage = xhr.responseJSON.message;
        }
        alert(errorMessage);
      },
    });
  });

  // Show image preview when selecting a file
  $("#addImage").change(function () {
    readURL(this, $("#addImagePreview"));
  });

  $("#updateImage").change(function () {
    readURL(this, $("#updateImagePreview"));
  });

  function readURL(input, imgElement) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        imgElement.attr("src", e.target.result);
        imgElement.show();
      };

      reader.readAsDataURL(input.files[0]);
    }
  }
});
