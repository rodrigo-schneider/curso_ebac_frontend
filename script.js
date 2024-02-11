$(document).ready(function () {
    $('form').on('submit', function (e) {
        e.preventDefault();

        const taskName = $('#input-task').val();
        if(taskName.trim() !== ''){
            $('#task-list').append('<li><img src="./img/checked.png" class="finish-task"/><span class="task-name">' + taskName + '</span><img src="./img/delete.png" class="delete-task"/></li>');
            $('#input-task').val('');
        }
    });

    $(document).on('click', '.finish-task', function(){
        $(this).closest('li').find('.task-name').toggleClass('completed');
    });

    $(document).on('click', '.delete-task', function(){
        $(this).closest('li').remove();
    });
});
