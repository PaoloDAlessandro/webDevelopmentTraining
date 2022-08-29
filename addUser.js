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

    
    if((input_surname.value.length < 2 || input_surname.value.length > 30) && input_surname_error_counter == 0) {
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


var input_username = document.getElementById("input_username");
var input_container_username = document.getElementById("input_container_username");
var input_username_error_counter = 0;

input_username.addEventListener("input", function() {
    input_username_checker();

});


function input_username_checker() {

    
    if((input_username.value.length < 2 || input_username.value.length > 30) && input_username_error_counter == 0) {
        
        var input_username_error_p = document.createElement("p");
        var input_username_error = document.createTextNode("Username must be between 2 and 24 characters");
        input_username_error_p.setAttribute("id", "input_username_error");
        input_username_error_p.classList.add("message_error");
        input_username_error_p.appendChild(input_username_error);
        input_container_username.appendChild(input_username_error_p);
      
        input_username_error_counter++;
    }
    
    else if(!(input_username.value.length < 2 || input_username.value.length > 30)) {
      
        if (input_username_error_counter > 0) {
      
            input_username_error_counter--;
            document.getElementById("input_username_error").remove();
        }
    }
}


var input_email = document.getElementById("input_email");
var input_container_email = document.getElementById("input_container_email");
var input_email_error_counter = 0;

input_email.addEventListener("input", function() {
    input_email_checker();

});


function input_email_checker() {

    if (input_email.value.search("@") == -1 && input_email_error_counter == 0) {

        var input_email_error_p = document.createElement("p");
        var input_email_error = document.createTextNode("Email must have '@' to be valid");
        input_email_error_p.setAttribute("id", "input_email_error");
        input_email_error_p.classList.add("message_error");
        input_email_error_p.appendChild(input_email_error);
        input_container_email.appendChild(input_email_error_p);
      
        input_email_error_counter++;
    }

    else if(!(input_email.value.search("@") == -1) && !(input_email.value.length < 6 || input_email.value.length > 30)) {
        
        if (input_email_error_counter > 0) {
        
            input_email_error_counter = 0
            document.getElementById("input_email_error").remove();
        }
    }
    
    if((input_email.value.length < 6 || input_email.value.length > 30) && input_email_error_counter == 0) {
     
        var input_email_error_p = document.createElement("p");
        var input_email_error = document.createTextNode("Email must be between 6 and 24 characters");
        input_email_error_p.setAttribute("id", "input_email_error");
        input_email_error_p.classList.add("message_error");
        input_email_error_p.appendChild(input_email_error);
        input_container_email.appendChild(input_email_error_p);
      
        input_email_error_counter++;
    }
    
    else if(!(input_email.value.length < 6 || input_email.value.length > 30) && !(input_email.value.search("@") == -1)) {
      
        if (input_email_error_counter > 0) {
      
            input_email_error_counter = 0;
            document.getElementById("input_email_error").remove();
        }
    }

}


function inputChecker() {

    input_name_checker();
    input_surname_checker();
    input_username_checker();
    input_email_checker();

    if (input_name_error_counter == 0 && input_surname_error_counter == 0 && input_username_error_counter == 0 && input_email_error_counter == 0) {
        
        document.getElementById("userForm").submit();
    }
}

