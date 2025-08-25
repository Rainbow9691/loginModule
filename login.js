let form = document.getElementById("form")
console.log(form)

form.addEventListener("submit",(e)=>{
  e.preventDefault();
  //console.log(e);

  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;
// console.log(email,pass)
  if(email === "" || pass === ""){
    alert("enter all the details");
  }
  else{
        let storedEmail = localStorage.getItem("email");
        let storedPassword = localStorage.getItem("password")
         if(email === storedEmail && pass === storedPassword){
             window.open("home.html");
             window.location.reload();
        }
        else{
            alert("invalid credential details")
        }
  }
})