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


let hamburger = document.querySelector(".hamburger");

const activateMenu = () =>{

    if (hamburger.classList.contains("active")) {
        hamburger.classList.remove("active")
    } else {
        hamburger.classList.add("active")
    }
}

hamburger.addEventListener("click", activateMenu);



