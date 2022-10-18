function myFunction() {
    // Validation for tour name
    let nameValue = document.getElementById("tourName").value;
    let text;
    if (nameValue.length == 0 || !(nameValue.match(/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z])*$/)) || nameValue.length < 8) {
        text = "Name is not valid";
    }
    else {
        text = "Name is valid";
    }
    document.getElementById("nameError").innerHTML = text;

    // phoneNumber validation
    let pnumval = document.getElementById("phoneNumber").value;
    let text2;
    if (pnumval.length > 11 || pnumval.length == 0 || (pnumval.match(/^[A-Za-z]+$/))) {
        text = "Invalid Phone number";
    }
    else {
        text = "Phone number is Valid";
    }
    document.getElementById("pnumError").innerHTML = text;

    // email validation
    let e = document.getElementById("email").value;
    let textemail;
    if (e.length == 0 || !(e.match(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/))) {
        textemail = "Invalid email";
    }
    else {
        textemail = "email is Valid";
    }
    document.getElementById("emailError").innerHTML = textemail;

    // Description validation
    let DescValue = document.getElementById("description").value;
    let text3;
    if (DescValue.length == 0 || !(DescValue.match(/^[A-Za-z]+$/)) || DescValue.length < 20) {
        text3 = "Description is not valid";
    }
    else {
        text3 = "Description is valid";
    }
    document.getElementById("descError").innerHTML = text3;

}