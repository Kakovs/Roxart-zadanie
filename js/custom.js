let scrollToTopBtn = document.querySelector("header");

function handleScroll() {

    const scrooled = window.scrollY;
    console.log(scrooled);

    if( scrooled > 40){
        scrollToTopBtn.classList.add("smallHeader");
    }else{
        scrollToTopBtn.classList.remove("smallHeader");
    }
}


document.addEventListener("scroll", handleScroll);