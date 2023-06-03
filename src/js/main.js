// Import our custom CSS
import '../scss/style.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

  // import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

  // import styles bundle
  import 'swiper/css/bundle';


var swiper2 = new Swiper(".mySwiper_2",{
  slidesPerView: 1,
 spaceBetween: 30,
 pagination: {
   el:".swiper-pagination",
   clickable: true,
   type:"fraction"
 },
 navigation: {
   nextEl: ".btn-next-slider",
   prevEl: ".btn-prev-slider",
 },
 breakpoints:{
   320: {
     slidesPerView: 1,
     spaceBetween: 30
   },
   480: {
     slidesPerView: 2,
     spaceBetween: 30
   },
   640: {
     slidesPerView: 3,
     spaceBetween: 30
   },
}
});