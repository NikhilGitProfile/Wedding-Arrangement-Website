let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu');

menuBtn.onclick = () =>{
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menuBtn.classList.remove('fa-times')
    navbar.classList.remove('active')
}





let themeBtn = document.querySelector('#theme-btn');

themeBtn.onclick = () =>{
    themeBtn.classList.toggle('fa-sun');

    if(themeBtn.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }
    else{
        document.body.classList.remove('active');
    }
}



const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");

inputs.forEach(inp => {
    inp.addEventListener("focus", () => {
        inp.classList.add("active");
    });
    inp.addEventListener("blur", () => {
        if(inp.value != "") return;
        inp.classList.remove("active");
    });
});

toggle_btn.forEach((btn) => {
    btn.addEventListener("click", () => { 
        main.classList.toggle("sign-up-mode");
    });
});

function moveSlider() {
    let index = this.dataset.value;

    let currentImage = document.querySelector(`.img-${index}`);
    images.forEach((img) => img.classList.remove("show"));
    currentImage.classList.add("show");

    const textSlider = document.querySelector(".text-group");
    textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;


    bullets.forEach(bull => bull.classList.remove("active"));
    this.classList.add("active");
}


bullets.forEach((bullets) => {
    bullets.addEventListener("click", moveSlider);
});

AOS.init({
    delay: 400,
    duration: 800,
});


var swiper = new Swiper(".gallery-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    loop: true,
    autoplay:{
        delay: 50000,
        disableOnInteration:false
    },
  });

  var swiper = new Swiper(".review-slider", {
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    spaceBetween:20,
    autoplay:{
        delay: 50000,
        disableOnInteration:false
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });



  var fullImgBox = document.getElementById("fullImgBox");
  var fullImg =document.getElementById("fullImg");

  function openFullImg(pic){
    fullImgBox.style.display ="flex";
    fullImg.src = pic;
  }

  function closeFullImg(){
    fullImgBox.style.display = "none";
  }


  
        // Dummy data for venues (replace with actual data from your database)
        const venues = [
            { name: 'Elegant Gardens', location: 'City A', capacity: 150, price: '$5000', image: 'img/elent.avif' },
            { name: 'Grand Ballroom', location: 'City B', capacity: 300, price: '$8000', image: 'img/grand.jpg' },
            { name: 'Rustic Barn', location: 'City C', capacity: 200, price: '$6000', image: 'img/rustic.jpg' },
            { name: 'Oceanfront Paradise', location: 'City D', capacity: 250, price: '$7000', image: 'img/balla.jpg' },
            { name: 'Historic Mansion', location: 'City E', capacity: 180, price: '$6500', image: 'img/historic.jpg' },
            { name: 'Mountain Retreat', location: 'City F', capacity: 120, price: '$4500', image: 'img/eco.jpg' },
            { name: 'Luxury Rooftop', location: 'City G', capacity: 200, price: '$7500', image: 'img/lux.jpg' },
            { name: 'Beachside Villa', location: 'City H', capacity: 180, price: '$6800', image: 'img/lopp.webp' },
            { name: 'Garden Oasis', location: 'City I', capacity: 120, price: '$5500', image: 'img/picop.jpg' },
            { name: 'City Skyline View', location: 'City J', capacity: 250, price: '$7200', image: 'img/cop.jpg' },
            { name: 'cruise ship', location: 'City J', capacity: 250, price: '$7200', image: 'img/pop.jpg' },
            { name: 'the Rocky Mountains', location: 'City J', capacity: 250, price: '$7200', image: 'img/city.jpg' },
            // Add more venues as needed
        ];

        // Function to display venues on the page
        function displayVenues() {
            const venueList = document.getElementById('venueList');

            venues.forEach(venue => {
                const card = document.createElement('div');
                card.className = 'venueCard';
                card.innerHTML = `
                    <img class="venueImage" src="${venue.image}" alt="${venue.name}">
                    <h3>${venue.name}</h3>
                    <p><strong>Location:</strong> ${venue.location}</p>
                    <p><strong>Capacity:</strong> ${venue.capacity}</p>
                    <p><strong>Price:</strong> ${venue.price}</p>
                    <button onclick="selectVenue('${venue.name}')" class="buttonpo">Select Venue</button>
                `;
                venueList.appendChild(card);
            });
        }

        // Function to handle venue selection (replace with your actual logic)
        function selectVenue(venueName) {
            alert(`Venue "${venueName}" selected!`);
            // Add your logic to handle the selection, e.g., redirect to another page, etc.
        }

        // Display venues when the page loads
        window.onload = displayVenues;