//IMPORTS
import "./JSON/users.json";

//First: We get all the necesary elements
const username = document.getElementById('username-input');
const password = document.getElementById('password-input');
const submit = document.getElementById('submit-btn');

//Second: We call the AddEventListener() when submiting the button
submit.addEventListener('click', () => {
    //Third: We check that none of the inputs are EMPTY
    if(username.value || password.value == "") {
       alert("The Username/Password is empty"); 
    }
    //Fourth: We check if password is in jsonfile
    if(username.value === JSON.parse())
});