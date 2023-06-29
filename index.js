const toggleButton = document.getElementsByClassName('fa-bars')[0]
const navbarLinks = document.getElementsByClassName('nav')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
}) 






let prev = document.getElementById('previous');
    let next = document.getElementById('next');

    let arr = ["images/img1.jpg", "images/img4.jpg", "images/img5.jpg",
    "images/img6.jpg", "images/img7.jpg"];
   
    let i = 0;

    next.addEventListener('click', function () {
        i++;
        if (i > arr.length - 1) {
            i = 0;
        }
        document.getElementById('image').src = arr[i];
    })
   
    prev.addEventListener('click', function () {
        i--;
        if (i < 0) {
            i = arr.length - 1;
        }
        document.getElementById('image').src = arr[i];
    })

  function slides() {
    document.getElementById("image").src = arr[i];

    if (i < arr.length - 1) i++;
    else i = 0;
  }
  setInterval(slides, 3500);
