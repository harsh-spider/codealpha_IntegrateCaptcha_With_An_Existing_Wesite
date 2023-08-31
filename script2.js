function verify(){  
    var name=document.getElementById("user").value;  
    var password=document.myform.password.value;  
      
    if (name===null || name===""){  
      alert("Name can't be blank");  
      return false;  
    } 
    }  