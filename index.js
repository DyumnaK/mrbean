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

    // For login.html
const loginButton = document.getElementById('button3'); // Login button
    loginButton.addEventListener("click", () => {
        open('landing_page.html', "_blank");
    });


// For signup.html
const signUpButton = document.getElementById('button4'); // Sign-up button
    signUpButton.addEventListener("click", () => {
        open('landing_page.html', "_blank");
    });

function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginRight = "250px";
      }
      
      /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
      }

    