const submit = document.getElementById("submit");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone"); // Corrected from "address"
const address = document.getElementById("address"); // Corrected from "phone"

// Add the event listener to the submit button
submit.addEventListener("click", my_function);

function my_function() {
    // Check name field
    if (name.value === '') {
        name.style.backgroundColor = "red";
    } else {
        name.style.backgroundColor = 'white';
    }

    // Check address field
    if (address.value === '') {
        address.style.backgroundColor = "red";
    } else {
        address.style.backgroundColor = 'white';
    }

    // Check phone field
    if (phone.value === '') {
        phone.style.backgroundColor = "red";
    } else {
        phone.style.backgroundColor = 'white';
    }

    // Check email field
    if (email.value === '') {
        email.style.backgroundColor = "red";
    } else {
        email.style.backgroundColor = 'white';
    }
}