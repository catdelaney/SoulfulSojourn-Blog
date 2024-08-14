async function login(event){
event.preventDefault()
const email = document.getElementById("email-login").value;
const password = document.getElementById("pw-login").value;
if (email&&password) {
    const response = await fetch('/api/users/login', {
        method: "POST",
        body: JSON.stringify({email,password}),
        headers: { 'Content-Type': 'application/json' }
    })
    if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
}
    console.log("login")
}

async function signUp(event){
event.preventDefault()
const name = document.getElementById("username").value;
const email = document.getElementById("email-signup").value;
const password = document.getElementById("pw-signup").value;
if (name&&email&&password) {
    const response = await fetch('/api/users/', {
        method: "POST",
        body: JSON.stringify({name,email,password}),
        headers: { 'Content-Type': 'application/json' }
    })
    if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
}
    console.log("signup")
} 
document.querySelector(".loginform").addEventListener("submit",login);
document.querySelector(".signupform").addEventListener("submit",signUp);