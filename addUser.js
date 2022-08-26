var input_name = document.getElementById("input_name");
var input_container_name = document.getElementById("input_container_name");
var input_name_error_counter = 0;

input_name.addEventListener("input", function() {
    
    input_name_checker();

});


function input_name_checker() {
    
    if((input_name.value.length < 2 || input_name.value.length > 30) && input_name_error_counter == 0) {
      
        var input_name_error_p = document.createElement("p");
        var input_name_error = document.createTextNode("Name must be between 2 and 30 characters");
        input_name_error_p.setAttribute("id", "input_name_error");
        input_name_error_p.classList.add("message_error");
        input_name_error_p.appendChild(input_name_error);
        input_container_name.appendChild(input_name_error_p);
      
        input_name_error_counter++;
    }
    
    else if(!(input_name.value.length < 2 || input_name.value.length > 30)) {
      
        if (input_name_error_counter > 0) {
      
            input_name_error_counter--;
            document.getElementById("input_name_error").remove();
        }
    }
}


var input_surname = document.getElementById("input_surname");
var input_container_surname = document.getElementById("input_container_surname");
var input_surname_error_counter = 0;

input_surname.addEventListener("input", function() {
    input_surname_checker();

});


function input_surname_checker() {

    console.log("entra");
    
    if((input_surname.value.length < 2 || input_surname.value.length > 30) && input_surname_error_counter == 0) {
        console.log("wee");
        var input_surname_error_p = document.createElement("p");
        var input_surname_error = document.createTextNode("Surname must be between 2 and 30 characters");
        input_surname_error_p.setAttribute("id", "input_surname_error");
        input_surname_error_p.classList.add("message_error");
        input_surname_error_p.appendChild(input_surname_error);
        input_container_surname.appendChild(input_surname_error_p);
      
        input_surname_error_counter++;
    }
    
    else if(!(input_surname.value.length < 2 || input_surname.value.length > 30)) {
      
        if (input_surname_error_counter > 0) {
      
            input_surname_error_counter--;
            document.getElementById("input_surname_error").remove();
        }
    }
}

