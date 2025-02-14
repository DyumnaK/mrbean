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
function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginRigh = "250px";
      }
      
      /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
      }
