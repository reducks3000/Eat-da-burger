// Make sure we wait to attach our handlers until the DOM is fully loaded.

$(document).ready(function() {
    $(".devour").on("click", function(event) {
      event.preventDefault();
      let id = $(this).data("id");  
      let updateBurger = {
        id: $(this).data("id"),
        devoured: true
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers:" + id, {
        type: "PUT",
        data: updateBurger
      }).then(function() {
          console.log("changed devoured to", updateBurger.devoured);
          // Reload the page to get the updated list
          location.reload();
        });
    });
  
    // when clicked create new burger
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burgerName: $("#create:").val().trim(),
        devoured: false
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        });
    });
  
    // deletes burger if clicked

    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax({
        url: "/api/burger/" + id, 
        type: "DELETE"
      }).then(function(response) {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        });
    });
  });
  