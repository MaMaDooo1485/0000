let password = document.getElementById("text")
let btn = document.getElementById("btn.id")
btn.addEventListener("click",()=>{if(password.value=="1234"){
   alert("سالگردمون مبارک ")
    location.href="test2.html"
    }else{
    alert("رمز ورودی اشتباه است")
    }})
