

  function validation(){
    //assigment 
    var mail = document.querySelector(".email");
    var mailValue = mail.value;
    mailValue = mailValue.replace(/\s/g, "");

    var mob = document.querySelector(".mobile");
    var mobValue = mob.value;

    //email validation
    if(mailValue==""){
      alert("Please input Email");
      mail.focus();
      return false
    }
    else if(mailValue.indexOf('@')<=0){
      alert("Please Valid @ input");
      mail.focus();
      return false
    }
    else if((mailValue.charAt(mailValue.length-4)!='.') && 
      (mailValue.charAt(mailValue.length-3)!='.')){
            alert("Please Valid . input");
            mail.focus();
            return false
    }
    //email validation end here


    // mobile falidation start here

    else if(mobValue==""){
      alert("Please input Mobile Number");
      mob.focus();
      return false
    }

    else if(isNaN(mobValue)){
      alert("Please input Number Value");
      mob.focus();
      return false
    }
    else if(mobValue.length <10){
      alert("Please input 10 Digit Number");
      mob.focus();
      return false
    }
    else if(mobValue.length >10){
      alert("Please input 10 Digit Number");
      mob.focus();
      return false
    }
    else if((mobValue.charAt(0) != 9) && 
      (mobValue.charAt(0) != 8) && (mobValue.charAt(0) != 7)){
      alert("Please Start Your Number with 9, 8, 7");
      mob.focus();
      return false
    }

    // after sucess submit message
    else{
      alert("Thank You")
      return true
    }

  }
