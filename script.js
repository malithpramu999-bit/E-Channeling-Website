window.addEventListener("scroll", function(){

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.classList.add("scrolled");
    }else{
        navbar.classList.remove("scrolled");
    }

});



function findDoctors() {
    alert("Go to the Doctors page please! (Use navigation Bar)");
}

function lastUpdated() {
    const now = new Date();
    document.getElementById("lastUpdated").innerHTML = now.toLocaleString();

}

function clickServices() {
    alert("Go to the Services page please! (Use navigation Bar)");
}   

lastUpdated();