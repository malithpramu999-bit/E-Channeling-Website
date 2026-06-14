// Set minimum date to today
window.onload = function () {
    let today = new Date().toISOString().split("T")[0];
    document.getElementById("appoinmentDate").min = today;
};

function submitForm() {
    let isValid = true;

    $('#formAlert').hide();
    
    // Reset validation
    let fields = document.querySelectorAll('.input-field, .form-select');

    fields.forEach(function (field) {
        field.style.borderColor = "#ced4da";

        let feedback = field.parentElement.querySelector('.invalid-feedback');

        if (feedback) {
            feedback.style.display = "none";
        }
    });

    
    let fullname = document.getElementById("fullname");
    let phoneNo = document.getElementById("phoneNo");
    let email = document.getElementById("email");
    let doctor = document.getElementById("selectDoctor");
    let date = document.getElementById("appoinmentDate");
    let time = document.getElementById("selectTime");

    if (fullname.value.trim() === "") {
        // showError(fullname);
        isValid = false;
    }

    // Phone
    let phonePattern = /^(\+94|0)[0-9]{9}$/;
    if (!phonePattern.test(phoneNo.value.trim())) {
        showError(phoneNo);
        isValid = false;
    }

    // Email
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        showError(email);
        isValid = false;
    }

    if (doctor.value === "" || date.value === "" || time.value === "") {
        isValid = false;
    }

    if (!isValid) {
        $('#formAlert').slideDown();
        return false;
    }

    showSummary();

    return false;
}

function showError(element) {
    element.style.borderColor = "#ced4da";
    let feedback = element.parentElement.querySelector('.invalid-feedback');
    if (feedback) {
        feedback.style.display = "block";
    }
}

function showSummary() {
    let doctor = $('#selectDoctor').val();
    let fee = getDoctorFee(doctor);
    let bookingNumber = "ECH-" + Math.floor(Math.random() * 100000);

    $('#sumName').text($('#fullname').val());
    $('#sumDoctor').text(doctor);
    $('#sumDate').text($('#appoinmentDate').val());
    $('#sumTime').text($('#selectTime').val());
    $('#sumFee').text("Rs. " + fee);
    $('#bookingId').text(bookingNumber);

    $('.summary-card').slideDown(500);

    $('#paymentBtn').show();

    $('html, body').animate({
        scrollTop: $('.summary-card').offset().top - 30
    }, 500);
}

function getDoctorFee(doctor) {

    if (doctor.includes("Neurologist")) {
        return 5000;
    }

    if (doctor.includes("Cardiologist")) {
        return 4500;
    }

    if (doctor.includes("Orthopedic")) {
        return 4000;
    }

    if (doctor.includes("Psychiatrist")) {
        return 4000;
    }

    if (doctor.includes("General Surgeon")) {
        return 3500;
    }

    return 2500;
}

// Payment Button
$(document).on("click", "#paymentBtn", function () {
    alert(
        "Payment Successful!\n\n" +
        "Your appointment has been booked successfully."
    );
});



window.addEventListener("scroll", function(){

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.classList.add("scrolled");
    }else{
        navbar.classList.remove("scrolled");
    }

});
