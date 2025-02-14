// TODO - To link each of the buttons to their seperate pages

const login = document.getElementById('button1');
const signUp = document.getElementById('button2');
login.addEventListener("click", ()=>
{
    open('login.html', "_blank");
});

signUp.addEventListener("click", ()=>
    {
        open('signup.html', "_blank");
    });

