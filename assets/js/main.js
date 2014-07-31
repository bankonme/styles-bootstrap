$(function() {
    /* Enable dataTables */
    /* adding the class of dataTable to a table makes it a data table and also re-enables all select2 stuff. */
    $('table.dataTable').dataTable({
        fnDrawCallback: function() {
            $('.dataTables_filter input').addClass("form-control input-small"); // modify table search input
        }
    });
});