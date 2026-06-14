
alert("Welcome to Healthcare Services! We are dedicated to providing quality healthcare for everyone.");

function bookAppointment(cardElement) {
   
    const serviceName = cardElement.querySelector("h3").textContent;

    let userConfirms = confirm("Would you like to book an appointment with our " + serviceName + " department?");

    if (userConfirms == true) {
        let patientName = prompt("Please enter your name to schedule the appointment:");
        let patientAge = prompt("Please enter your age:");
        patientAge=Number(patientAge);

        if (patientName != "" && patientName != null) {
            alert("Thank you, " + patientName + "! A representative from our " + serviceName + " team will call you shortly.");
            
            if(patientAge<20){
                alert("After you can visit the main Building 2nd floor "+serviceName+" Section");
            }else if(patientAge<45){
                alert("After you can visit the main Building 1st floor "+serviceName+" Section");
            }else{
                alert("After you can visit the main Building ground floor "+serviceName+" Section")
            }  

        } else {
            alert("Appointment request cancelled.Name cannot be blank");
        }
    }else{
        alert("Thank you for visiting our services");
    }
}

function filterServices() {
    const searchbox = document.getElementById("searchbox");
    let searchValue = searchbox.value.toLowerCase();
    const cards = document.querySelectorAll(".service-card");

    cards.forEach((card) => {
        let text = card.textContent.toLowerCase();

        if (text.includes(searchValue)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}


window.addEventListener("scroll", function(){

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.classList.add("scrolled");
    }else{
        navbar.classList.remove("scrolled");
    }

});