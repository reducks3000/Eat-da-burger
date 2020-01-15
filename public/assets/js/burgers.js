// Make sure we wait to attach our handlers until the DOM is fully loaded.

$(document).ready(function() {
    // if devourIT is clicked, change set "devoured" to true and update.
    $(".devourIt").on("click", function(event) {
      event.preventDefault();
      var id = $(this).data("id");
  
      var updateBurger = {
        id: $(this).data("id"),
        devoured: true
      };
  
      // Send the PUT request.
      console.log("/api/burgers:" + id);
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: updateBurger
      }).then(function() {
        console.log("changed devoured to", updateBurger.devoured);
        // Reload the page to get the updated list
        location.reload();
      });
    });
  
    // if create is clicked, create a new burger.
    $("#createForm").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      console.log("add listener");
  
      var newBurger = {
        burgerName: $("#create")
          .val()
          .trim(),
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
  
    // if delete button is clicked, delete the burger.
    $(".deleteIt").on("click", function(event) {
      //event.preventDefault();
      var id = $(this).data("id");
      console.log(id);
  
      // Send the DELETE request.
      $.ajax({
        url: "/api/burgers/" + id,
        type: "DELETE"
      }).then(function(response) {
        console.log("deleted burger", id);
        // Reload the page to get the updated list
        location.reload();
      });
    });
  });
  