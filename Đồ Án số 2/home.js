document.addEventListener('DOMContentLoaded', () => { 
    let menu = document.querySelector('#menu-bars');
     let navbar = document.querySelector('header .flex .navbar');
   
     menu.onclick = () =>{
       menu.classList.toggle('fa-times');
       navbar.classList.toggle('active');
     }
   
     let section = document.querySelectorAll('section');
     let navLinks = document.querySelectorAll('header .navbar a');
   
     window.onscroll = () =>{
   
       menu.classList.remove('fa-times');
       navbar.classList.remove('active');
   
       section.forEach(sec =>{
   
         let top = window.scrollY;
         let height = sec.offsetHeight;
         let offset = sec.offsetTop - 150;
         let id = sec.getAttribute('id');
   
         if(top >= offset && top < offset + height){
           navLinks.forEach(links =>{
             links.classList.remove('active');
             document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
           });
         };
   
       });
   
     }
   
    
     var swiper = new Swiper(".home-slider", {
       spaceBetween: 30,
       centeredSlides: true,
       autoplay: {
         delay: 5000,
         disableOnInteraction: false,
       },
       pagination: {
        //  el: ".swiper-pagination",
         clickable: true,
       },
       loop:true,
     });
   
     var swiper = new Swiper(".review-slider", {
       spaceBetween: 20,
       centeredSlides: true,
       autoplay: {
         delay: 4000,
         disableOnInteraction: false,
       },
       pagination: {
         el: ".swiper-pagination",
         clickable: true,
       },
       loop:true,
       breakpoints: {
         0: {
             slidesPerView: 1,
         },
         640: {
           slidesPerView: 2,
         },
         768: {
           slidesPerView: 2,
         },
         1024: {
           slidesPerView: 3,
         },
       },
     });
   
    //  function loader(){
    //    document.querySelector('.loader-container').classList.add('fade-out');
    //  }
   
    //  function fadeOut(){
    //    setInterval(loader, 2000);
    //  }
   
    //  window.onload = fadeOut;
   });
   