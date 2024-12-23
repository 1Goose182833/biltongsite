document.getElementById("button").onclick = function (){
    let username = document.getElementById("name").value;
    let email = document.getElementById("mail").value;
    let password = document.getElementById("pass").value;
    let counter = 0;
    let validemail = '@gmail.com';

    
    if (!username) {
        document.getElementById("name").placeholder = "insert name";
        let style = document.createElement('style');
        style.innerHTML = `
        #name::placeholder {
        color: pink;
        font-weight: 5;
        font-family: arial;}`;
        document.head.appendChild(style);
    }else {counter++;
    }
    if (!password) {
        document.getElementById("pass").placeholder = "insert password"; 
        let style = document.createElement('style');
        style.innerHTML = `
        #pass::placeholder {
        color: pink;
        font-weight: 5;
        font-family: arial;}`;
        document.head.appendChild(style);
    }else {counter++;
    }
    if (!email || !email.includes(validemail)) {
        document.getElementById("mail").value = ""; 
        document.getElementById("mail").placeholder = "invalid email";
        let style = document.createElement('style');
        style.innerHTML = `
        #mail::placeholder {
        color: pink;
        font-weight: 5;
        font-family: arial;}`;
        document.head.appendChild(style);
    }else {counter++;
    }
    if (counter == 3) {
        window.location.href = "index.html";
        counter = 0;
        localStorage.setItem('username', username);
    }
}