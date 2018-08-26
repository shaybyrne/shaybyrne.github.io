// Email: Check if the email address is valid, if not, tell user onchange
            function validateEmailForm()
            {
            var x=document.forms["myForm"]["email"].value;
            var atpos=x.indexOf("@");
            var dotpos=x.lastIndexOf(".");
            if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
              {
              alert("Not a valid e-mail address");
              return false;
              }
            }

//Same as Above Button
            function sameInfo(f) {
              if(f.sameInfoBtn.checked == true) {
                f.firstNameTo.value = f.firstNameBuy.value;
                f.lastNameTo.value = f.lastNameBuy.value;
              }
            }

//Credit Card Format: Ensure user types xxxx xxxx xxxx xxxx format only
              function cc_format(value) {
                  var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
                  var matches = v.match(/\d{4,16}/g);
                  var match = matches && matches[0] || ''
                  var parts = []
                  for (i=0, len=match.length; i<len; i+=4) {
                    parts.push(match.substring(i, i+4))
                  }
                  if (parts.length) {
                    return parts.join(' ')
                  } else {
                    return value
                  }
                }

                onload = function() {
                  document.getElementById('cc').oninput = function() {
                    this.value = cc_format(this.value)
                  }
                }

                
//Date Format: check format is DD/MM/YYYY, if not, tell user onchange.
                function validateDate(inputText)  
                  {  
                  var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;  
                  // Match the date format through regular expression  
                  if(inputText.value.match(dateformat))  
                  {  
                  document.form1.text1.focus();  
                  //Test which seperator is used '/' or '-'  
                  var opera1 = inputText.value.split('/');  
                  var opera2 = inputText.value.split('-');  
                  lopera1 = opera1.length;  
                  lopera2 = opera2.length;  
                  // Extract the string into month, date and year  
                  if (lopera1>1)  
                  {  
                  var pdate = inputText.value.split('/');  
                  }  
                  else if (lopera2>1)  
                  {  
                  var pdate = inputText.value.split('-');  
                  }  
                  var dd = parseInt(pdate[0]);  
                  var mm  = parseInt(pdate[1]);  
                  var yy = parseInt(pdate[2]);  
                  // Create list of days of a month [assume there is no leap year by default]  
                  var ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];  
                  if (mm==1 || mm>2)  
                  {  
                  if (dd>ListofDays[mm-1])  
                  {  
                  alert('Invalid date format!');  
                  return false;  
                  }  
                  }  
                  if (mm==2)  
                  {  
                  var lyear = false;  
                  if ( (!(yy % 4) && yy % 100) || !(yy % 400))   
                  {  
                  lyear = true;  
                  }  
                  if ((lyear==false) && (dd>=29))  
                  {  
                  alert('Invalid date format!');  
                  return false;  
                  }  
                  if ((lyear==true) && (dd>29))  
                  {  
                  alert('Invalid date format!');  
                  return false;  
                  }  
                  }  
                  }  
                  else  
                  {  
                  alert("Invalid date format!");  
                  document.form1.text1.focus();  
                  return false;  
                  }  
                  }

//Validation for empty fields

//First Name Buyer: check if empty
                  function valFirstNameBuy() {
                    var inputVal = document.forms["myForm"]["firstNameBuy"].value;
                    if (inputVal == null || inputVal == "") {
                     {  
                    document.getElementById("firstNameBuy").style.background =   'Red';   
                         }  
                        return false;                        
                        }
                    }

//Last Name Buyer: check if empty
                    function valLastNameBuy() {
                    var inputVal = document.forms["myForm"]["lastNameBuy"].value;
                    if (inputVal == null || inputVal == "") {
                        {  
                    document.getElementById("lastNameBuy").style.background =   'Red';   
                         }
                        return false;                        
                        }
                    }   

//Email: check if empty
                   function valEmail() {
                        var inputVal = document.forms["myForm"]["email"].value;
                        if (inputVal == null || inputVal == "") {
                      {  
                    document.getElementById("email").style.background =   'Red';   
                         }
                            return false;                        
                            }
                        }
//Credit Card: check if empty
                   function valCredCard() {
                        var inputVal = document.forms["myForm"]["cc"].value;
                        if (inputVal == null || inputVal == "") {
                     {  
                    document.getElementById("cc").style.background =   'Red';   
                         }
                            return false;                        
                            }
                        }

//Amount: check if empty
                    function valAmount() {
                        var inputVal = document.forms["myForm"]["amount"].value;
                        if (inputVal == null || inputVal == "") {
                          {  
                    document.getElementById("amount").style.background =   'Red';   
                         }
                            return false;                        
                            }
                        }
//Date: check if empty
                function valDate() {
                    var inputVal = document.forms["myForm"]["date"].value;
                    if (inputVal == null || inputVal == "") {
                  {  
                    document.getElementById("date").style.background =   'Red';   
                         }
                        return false;                        
                        }
                    }
//First Name Sender: check if empty
                function valFirstNameTo() {
                    var inputVal = document.forms["myForm"]["firstNameTo"].value;
                    if (inputVal == null || inputVal == "") {
                  {  
                    document.getElementById("firstNameTo").style.background =   'Red';   
                         }
                        return false;                        
                        }
                    }
//Last Name Sender: check if empty
                function valLastNameTo() {
                    var inputVal = document.forms["myForm"]["lastNameTo"].value;
                    if (inputVal == null || inputVal == "") {
                      {  
                    document.getElementById("lastNameTo").style.background =   'Red';   
                         }
                        return false;                        
                        }
                    }
//Radio Button: Check if none are checked
                    function valRadio(){
                        if ((document.getElementById("typeA").checked==false)&&(document.getElementById("typeB").checked==false)&&(document.getElementById("typeC").checked==false))
                            {
                      //          alert("Oops please select a gift!");
                                return false;
                            }
                        }

//Funtion to call all empty fields/radio validation functions on submit
                    function validateMyForm()
                    {
                      var frm = document.forms["myform"];
                      if(false == valFirstNameBuy())
                      {
                        alert('Opps we are missing your First Name!');
                        return false;
                      }
                      else
                      if(false == valLastNameBuy())
                      {
                        alert('Opps we are missing your Last Name!');
                        return false;
                      }
                          else
                          if(false == valEmail())
                      {
                        alert('Opps we are missing your Email Address!');
                        return false;
                      }
                      else
                          if(false == valCredCard())
                      {
                        alert('Opps we are missing your Credit Card Number!');
                        return false;
                      }
                         else
                          if(false == valAmount())
                      {
                        alert('Opps you forgot to enter an amount!');
                        return false;
                      }
                           else
                          if(false == valDate())
                      {
                        alert('Opps you forgot to enter your purchase date!');
                        return false;
                      }
                       else
                      if(false == valFirstNameTo())
                      {
                        alert('Opps we are missing your First Name in sender section!');
                        return false;
                      } 
                            else
                      if(false == valLastNameTo())
                      {
                        alert('Opps we are missing your Last Name in sender section!');
                        return false;
                      } 
                             else
                      if(false == valRadio())
                      {
                        alert('Oops please select a gift!');
                        return false;
                      } 
                        else{
                            alert(("CONGRATULATIONS! Your donation was successful! \n\nPAYMENT DETAILS: \nFirst Name: " +document.forms["myForm"]["firstNameBuy"].value+"\n")+
                            ("Last Name: " +document.forms["myForm"]["lastNameBuy"].value+"\n")+
                            ("Email: " +document.forms["myForm"]["email"].value+"\n")+
                            ("Credit Card: " +document.forms["myForm"]["cc"].value+"\n")+
                            ("Amount: " +document.forms["myForm"]["amount"].value+"\n")+
                            ("Date of Purchase: " +document.forms["myForm"]["date"].value+"\n\n")+
                            ("SENDER DETAILS: \nFirst Name: " +document.forms["myForm"]["firstNameTo"].value+"\n")+
                            ("Last Name: " +document.forms["myForm"]["lastNameTo"].value+"\n")+
                            ("Gift Selected: " +document.getElementsByName("type").innerHTML+"\n")+
                            ("Personalised Message: " +document.forms["myForm"]["persMsg"].value+"\n\n")+
                            ("PLEASE DECORATE OUR CHIRSTMAS TREE!!"));
                    }
                    }

//Cant figure how to connect radcheck to the alert box above

                var radiochecked = document.getElementsByName("type");
                var radcheck;
                if ((document.getElementById("typeA").checked==false)&&(document.getElementById("typeB").checked==false)){
                    radcheck="Clothes";
                }
                else
                if
                    ((document.getElementById("typeA").checked==false)&&(document.getElementById("typeC").checked==false)){
                    radcheck="Food";
                }
                   else
                    {
                    radcheck="Toys";

                }
                document.getElementsByName("type").innerHTML= radcheck;


//Another option but Same as with above section, I couldnt figure how to connect it to the confirmation alert box above
                /*var radio = document.getElementsByName('type');
                var radio_value;
                for(var i = 0; i < radio.length; i++){
                    if(radio[i].checked){
                        radio_value = radio[i].value;
                    }
                }
                document.getElementsByName('type').innerHTML= radio_value;
                */

//I also tried this in the alert message
            /*
            ("Gift Selected: " +document.getElementsByClassName('type').checked.value+"\n")+
            */