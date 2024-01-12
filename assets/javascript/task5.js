
const submit = document.getElementById("submit");
const name = document.getElementById("fullName");
const address = document.getElementById("address");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
// Add the event listener to the submit button
submit.addEventListener("click", my_function);
function my_function(){
    // Check name field
    if(fullName.value === ''){
        fullName.style.backgroundColor = "red";
    }else{
        fullName.style.backgroundColor = 'white';
    }

    // Check Experience Field
    if(address.value === ''){
        address.style.backgroundColor = "red";
    }else{
        address.style.backgroundColor = 'white';
    }


