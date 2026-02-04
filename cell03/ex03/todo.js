
var ft_list = document.getElementById('ft_list');
var newBtn = document.getElementById('newBtn');


window.onload = function () {
    loadTodo();
};


newBtn.addEventListener('click', function () {

    var todoText = prompt("Please enter your new task:");


    if (todoText && todoText.trim() !== "") {
        addTodo(todoText);
        saveTodo();
    }
});


function addTodo(text) {

    var div = document.createElement('div');


    div.innerHTML = text;


    div.className = 'todo-item';


    div.onclick = function () {

        if (confirm("Do you want to remove this task?")) {
            this.remove();
            saveTodo();
        }
    };


    ft_list.prepend(div);
}




function saveTodo() {

    var todos = [];
    var items = ft_list.children;

    for (var i = 0; i < items.length; i++) {
        todos.push(items[i].innerHTML);
    }


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
                console.log("Cookie error or empty");
            }
            return;
        }
    }
}