// start with links shwo btn 
let navBtn=document.querySelector(".nav-menu-btn");
let navLinks=document.querySelector(".nav-links");

navBtn.addEventListener("click",()=>{
navLinks.classList.toggle("open");
let boolean=navLinks.classList.contains("open");
let i=navBtn.querySelector("i");
// change the icon 
boolean ? i.classList="fa-solid fa-x" : i.classList="fa-solid fa-bars"
});

let nvLis=navLinks.querySelectorAll("li");
nvLis.forEach(li=>{
    li.addEventListener("click",(e)=>{
        e.preventDefault();
            navLinks.classList.remove("open");
            navBtn.querySelector("i").classList="fa solid fa-bars";
        })
})

let search=document.querySelector(".nav-search");
let icon=search.querySelector("span");
icon.addEventListener("click",()=>{
    search.querySelector("input").classList.toggle("open");
})

// using scroll reveal 
let scrollRevealObject={
    distance:"50px",
    origin:"bottom",
    duration:"1000"
}

ScrollReveal().reveal(".header-img img", {
    ...scrollRevealObject,
    origin: "right"
  });
  
ScrollReveal().reveal(".header-text div", {
    duration:"1000",
    delay:"500"
  });
  
ScrollReveal().reveal(".header-text h1", {
  ...scrollRevealObject,
    delay:"1000",
  });
ScrollReveal().reveal(".header-text p", {
  ...scrollRevealObject,
    delay:"1400"
  });
  
  // end scroll reveal 
  // start deals 
  let dealCards=document.querySelectorAll(" .deals-card");
  dealCards.forEach((card,i)=>{
    ScrollReveal().reveal(card,{
      distance:"70px",
      origin:"right",
      duration:(i+2)*500

    })
  }
  )