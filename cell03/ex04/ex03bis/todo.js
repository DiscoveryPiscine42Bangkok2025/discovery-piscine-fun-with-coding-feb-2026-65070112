
$(document).ready(function() {
    

    loadTodo();


    $('#newBtn').click(function() {
        var todoText = prompt("Please enter your new task:");

        if (todoText && todoText.trim() !== "") {
            addTodo(todoText);
            saveTodo();
        }
    });

 
    function addTodo(text) {

        
        var $div = $('<div></div>')
            .text(text)                
            .addClass('todo-item');    


        $div.click(function() {
            if (confirm("Do you want to remove this task?")) {
                $(this).remove(); 
                saveTodo(); 
            }
        });

  
        $('#ft_list').prepend($div);
    }


    function saveTodo() {
        var todos = [];
        

        $('#ft_list').children().each(function() {

            todos.push($(this).text());
        });

        document.cookie = "ft_list=" + JSON.stringify(todos) + "; path=/; max-age=31536000";
    }

    function loadTodo() {
        var cookies = document.cookie.split(';');
        
        for (var i = 0; i < cookies.length; i++) {
            var c = cookies[i].trim();
            
            if (c.indexOf("ft_list=") == 0) {
                var cookieValue = c.substring("ft_list=".length, c.length);
                
                try {
                    var todos = JSON.parse(cookieValue);
                    
                    for (var j = todos.length - 1; j >= 0; j--) {
                        addTodo(todos[j]);
                    }
                } catch (e) {
                    console.log("Cookie error");
                }
                return;
            }
        }
    }

});