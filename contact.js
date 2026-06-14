//navigation bar scroll effect

window.addEventListener("scroll", function(){

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.classList.add("scrolled");
    }else{
        navbar.classList.remove("scrolled");
    }

});


document.getElementById("contactForm")
.addEventListener("submit", function(e){

let fname =
document.getElementById("fname").value;

let lname =
document.getElementById("lname").value;

let email =
document.getElementById("email").value;

let message =
document.getElementById("message").value;

if(fname=="" ||
lname=="" ||
email=="" ||
message=="")
{

alert("Please fill all fields");

e.preventDefault();

}

});

$(document).ready(function(){

    $(".question").click(function(){

        $(this).next(".answer").slideToggle();

        let arrow = $(this).find(".arrow");

        if(arrow.text() == "▼"){
            arrow.text("►");
        }
        else{
            arrow.text("▼");
        }

    });

});

window.onload = function () {
    alert("Welcome to MediConnect! Feel free to contact us.");
};

