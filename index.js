const toggleButton = document.getElementsByClassName('fa-bars')[0]
const navbarLinks = document.getElementsByClassName('nav')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
}) 





 

    let arr = ["images/pikachu.gif", "images/Articuno.webp", "images/p1.gif",
    "images/p3.gif", "images/uber.svg"];
   
    let i = 0;
 
  function slides() {
    document.getElementById("image").src = arr[i];

    if (i < arr.length - 1) i++;
    else i = 0;
  }
  setInterval(slides, 500);
