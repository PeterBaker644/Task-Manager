// Make sure we wait to attach our handlers until the DOM is fully loaded.

$(document).ready(function () {
    $(".complete").on("click", function (event) {
        let id = $(this).data("id");

        // Send the PUT request.
        $.ajax("/api/tasks/" + id, {
            type: "PUT"
        }).then(
            function () {
                console.log("Task completed");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $("#submit").on("click", function (event) {
        event.preventDefault();

        let newTask = {
            body: $("#task-body").val().trim(),
        };

        if (!$("#task-body").val()) {
            $("#task-body").addClass("is-invalid")
            return console.log("No data input");
        } else {
            $("#task-body").removeClass("is-invalid")
            // Send the POST request.
            $.ajax("/api/tasks", {
                type: "POST",
                data: newTask
            }).then(
                function () {
                    console.log("Created new Task");
                    // Reload the page to get the updated list
                    location.reload();
                }
            );
        }
    });

    $(".delete").on("click", function (event) {
        let id = $(this).data("id");

        $.ajax("/api/tasks/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("Task deleted!");
                location.reload();
            }
        )
    })
});
