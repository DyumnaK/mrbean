// TODO - To link each of the buttons to their seperate pages

const login = document.getElementById('login');
const signUp = document.getElementById('signUp');
login.addEventListener("click", ()=>
{
    open('login.html', "_blank");
});

signUp.addEventListener("click", ()=>
    {
        open('signup.html', "_blank");
    });

