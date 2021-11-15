function valid() {
    try{
       if( verify_Null())
       {
       if( validation_Name())
       {
        if(EmailValidation())
       {
       if( PhoneValidation())
       {
       if(validation_Pass())
       {
       }
       }
       }
       }
       }   
      
       
    }
    catch (error) 
    {
        document.getElementById('console').innerHTML = 
        "<h3 style='color:red'> Warning: </h3>" + error.message + "<a href='reg.php'>Go and correct</a>";
        
     
    }

}
//<------------------Blank Validation----------------->//

function verify_Null(){
    if(!document.getElementById('fn').value.trim().length){
         throw new Error("Please fill the firstname!!!");
        
    }
 else if(!document.getElementById('ln').value.trim().length){
        throw new Error("Please fill the Lastname!!!");
   }
else if(!document.getElementById('em').value.trim().length){
    throw new Error("Please fill the Email!!!");
}
else if(!document.getElementById('add').value.trim().length){
    throw new Error("Please fill the ADDress!!!");
}
else if(!document.getElementById('mn').value.trim().length){
    throw new Error("Please fill the phonenumber!!!");
}
else if(!document.getElementById('pwd').value.trim().length){
        throw new Error("Please fill the password!!!");
    }
    
    return true;

}


function validation_Name()
{
    var user = document.getElementById('fn').value.trim();
    var user = document.getElementById('ln').value.trim();

    var illegalChars = /\W/; // allow letters, numbers, and underscores

    if ((user.length < 5) || (user.length > 15)) {

        throw new Error("The username is the wrong length.\n");

    } else if (illegalChars.test(user)){
        throw new Error("!illegalChars not allowed");

    }
    return true;
}


function EmailValidation(){
    var email =document.getElementById("em");
    

   var mail_format = /^([a-zA-Z0-9])(([a-zA-Z0-9])*([\._\+-])*([a-zA-Z0-9]))*@(([a-zA-Z0-9\-])+(\.))+([a-zA-Z]{2,4})+$/

if(!email.value.match(mail_format)){
    throw new Error("please fill the correct email");
}
return true;

}

function  PhoneValidation()
{    
      var phone_formate=/^[7-9][0-9]{9}$/;
    var phone =document.getElementById("mn");
    if(!phone.value.match(phone_formate)){
    
        throw new Error("please fill the correct Phone number");
    }
    return true;


}

//    <-------------PASSWORD VALIDATION---------------------->


function validation_Pass(){
    var pass = document.getElementById("pwd").value.trim();

     if ((pass.length < 5) || (pass.length > 25)) {
        throw new Error("The password is the wrong length.\n");

    }

    else if (!/[A-Z]/.test(pass)) {
        throw new Error( "password must contain one capital letter\n");

    }

    else if (!/[a-z]/.test(pass)) {
        throw new Error( "password must contain one small letter\n");

    }

    else if (!/[0-9]/.test(pass)) {
        throw new Error("password must contain one numeric\n");

    }

    else if (!/\W/.test(pass)) {
        throw new Error("password must contain one special character\n");

    }
   
    return true;

}

