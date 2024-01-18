$(document).ready(function() {
    // Existing code to remove duplicates...
    // ...

    // Separate search functionality
    $("#searchBar").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#aveTable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
});
