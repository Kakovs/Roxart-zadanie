// Scrool header

let scrollHeader = document.querySelector("header");

const handleScroll = () => {


    const scrooled = window.scrollY;
    if( scrooled > 40){
        scrollHeader.classList.add("smallHeader");
    }else{
        scrollHeader.classList.remove("smallHeader");
    }
}

document.addEventListener("scroll", handleScroll);

// Hamburger, turn on/off mobile menu

let hamburger = document.querySelector(".hamburger");

const activateMenu = () =>{

    if (hamburger.classList.contains("active")) {
        hamburger.classList.remove("active")
    } else {
        hamburger.classList.add("active")
    }
}

hamburger.addEventListener("click", activateMenu);



// slider

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        disableOnHover: true,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    on: {
        init() {
          this.el.addEventListener('mouseenter', () => {
            this.autoplay.stop();
          });
    
          this.el.addEventListener('mouseleave', () => {
            this.autoplay.start();
          });
        }
      },

  });