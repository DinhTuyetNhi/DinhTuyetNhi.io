function validation(){
    if(document.formfill.Username.value==""){
        document.getElementById("result").innerHTML="Enter UserName";
        return false;
    }
    else if(document.formfill.Username.value.length <6){
        document.getElementById("result").innerHTML="Atleast six letter";
        return false;
    }
    else if(document.formfill.Email.value==""){
        document.getElementById("result").innerHTML="Enter Email";
        return false;
    }
    else if(document.formfill.Password.value==""){
        document.getElementById("result").innerHTML="Enter Password";
        return false;
    }
    else if(document.formfill.Password.value.length<6){
        document.getElementById("result").innerHTML="Password must be 6 digits";
        return false;
    }
    else if(document.formfill.CPassword.value==""){
        document.getElementById("result").innerHTML="Enter Confirm Password";
        return false;
    }
    else if(document.formfill.CPassword.value !== document.formfill.Password.value){
        document.getElementById("result").innerHTML="Password doesn't matched";
        return false;
    }
    else if(document.formfill.Password.value == document.formfill.CPassword.value){
        popup.classList.add("open-slide")
        return false;
    }
}
var popup = document.getElementById('popup');
function CloseSlide(){
    popup.classList.remove("open-slide")
}
