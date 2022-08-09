// Scrool header

const scrollHeader = document.querySelector("header");

const handleScroll = () => {


    const scrooled = window.scrollY;
    if( scrooled > 40){
        scrollHeader.classList.add("smallHeader");
        return;
    }
        scrollHeader.classList.remove("smallHeader");

}

document.addEventListener("scroll", handleScroll);

// Hamburger, turn on/off mobile menu

const hamburger = document.querySelector(".hamburger");

const activateMenu = () =>{

    if (hamburger.classList.contains("active")) {
        hamburger.classList.remove("active");
        return;
    }

    hamburger.classList.add("active")
}


hamburger.addEventListener("click", activateMenu);



// slider

const swiper = new Swiper('.homePageSlider', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        disableOnHover: true,
    },
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


// tabs

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})


// gallery carousel

const swiperCarousel = new Swiper(".galleryCarousel", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    disableOnHover: true,
  },
  pagination: {
    el: ".swiper-pagination",
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
  breakpoints: {
    480: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    }
  }
});