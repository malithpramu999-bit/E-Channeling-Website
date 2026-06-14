document.getElementById("registrationForm").addEventListener("submit", function(e) { 
e.preventDefault();

const fullname = document.getElementById("fullname").value.trim();
const birthday = document.getElementById("birthday").value.trim();
const nicNum = document.getElementById("nicNum").value.trim();
const contactNum = document.getElementById("contactNum").value.trim();
const email = document.getElementById("email").value.trim();
const password = document.getElementById("password").value.trim();
const confirmPassword = document.getElementById("confirmPassword").value.trim();
const message = document.getElementById("message");


if (contactNum.length < 10){
    message.style.color = "red";
    message.textContent = "Number should contain 10 digits";
    return;
}

if (password.length < 6){
    message.style.color = "red";
    message.textContent = "Password must be atleast 8 characters";
    return;
}

if (password !== confirmPassword){
    message.style.color = "red";
    message.textContent = "Passwords do not match";
    return;
}

if (confirm("Are you sure all the details you entered in the form are correct?")){
    message.style.color = "green";
    message.textContent = "Registration successful! ";
    alert(`WELCOME ${fullname}!,\nYOUR ECHANNELING ACCOUNT HAS BEEN CREATED SUCCESSFULLY! `);
}else{
    this.reset();
}

console.log(fullname);
console.log(birthday);
console.log(nicNum);
console.log(contactNum);
console.log(email);
console.log(password);

});


window.addEventListener("scroll", function(){

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.classList.add("scrolled");
    }else{
        navbar.classList.remove("scrolled");
    }

});