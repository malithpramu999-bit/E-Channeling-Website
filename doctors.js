window.addEventListener("scroll", function(){

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.classList.add("scrolled");
    }else{
        navbar.classList.remove("scrolled");
    }

});




const searchInput = document.getElementById("searchDoc");

searchInput.addEventListener("keyup", function(){

    const value = this.value.toLowerCase();

    const doc = document.querySelectorAll(".doctor-card");

    doc.forEach(doc => {

        const text = doc.textContent.toLowerCase();

        if(text.includes(value)){
            doc.style.display = "block";
        }
        else{
            doc.style.display = "none";
        }

    });

});

const buttons = document.querySelectorAll(".doctor-btn");

buttons.forEach(button => {

    button.addEventListener("click", function(event){
        event.stopPropagation();
        const card = this.closest(".doctor-card");
        const docName = card.querySelector("h3").innerText;

        alert("Viewing profile of " + docName);

    }); 

});