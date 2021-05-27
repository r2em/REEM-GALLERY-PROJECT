function Validate() {

    var contact_name = document.forms['contactform']['contact_name'].value;
    if (contact_name == "" || contact_name == null) {
        alert("Name field can't be Empty");
        return false;
    }

    var contact_email = document.forms['contactform']['contact_email'].value;
    if (contact_email == "" || contact_email == null) {
        alert("Email field can't be Empty");
        return false;
    }

    var contact_message = document.forms['contactform']['contact_message'].value;
    if (contact_message == "" || contact_message == null) {
        alert("Message field can't be Empty");
        return false;
    }


}