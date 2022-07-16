// navbar functionality
const navMenu = document.getElementById('bar-menu')
const nav = document.querySelector('.nav-container ul')
navMenu.addEventListener('click',openNav)
function openNav(){
  if(nav.classList.contains('active')){
    nav.classList.remove('active')
  }else{
    nav.classList.add("active")
  }
}

const slides = Array.from(document.querySelectorAll('.slide'));
const slider = document.querySelector('.slider');
const buttons = document.querySelectorAll('.button div');
const dotEl = document.querySelector('.dots');
let timeoutId;
function getNextprev(){
    const activeSlide = document.querySelector('.slide.active')
    const activeIndex = slides.indexOf(activeSlide)
    let next,prev;
    if(activeIndex === slides.length - 1){
        next = slides[0]
    }else{
        next = slides[activeIndex + 1];
    }
    if(activeIndex === 0){
        prev=slides[slides.length-1]
    }else{
         prev = slides[activeIndex - 1]
    }
    return [next,prev]
}
getNextprev()
function getposition(){
    const activeSlide = document.querySelector('.slide.active')
    const activeIndex = slides.indexOf(activeSlide)
   const [next,prev] = getNextprev();

   slides.forEach((slide,index)=>{
       if(index === activeIndex){
           slide.style.transform = 'translateX(0)';
       }else if(slide === prev){
           slide.style.transform = 'translateX(-100%)'
       }
       else if(slide === next){
         slide.style.transform = 'translateX(100%)'
       }else{
           slide.style.transform = 'translate(100%)'
       }
   })

}
getposition()
function getNextSlide(){
    clearTimeout(timeoutId)
    const currentSlide = document.querySelector('.slide.active')
    const [next,prev] = getNextprev();
    slides.forEach((slide)=>{
        slide.classList.remove('top')
        return;
    })
    currentSlide.classList.add('top')
    next.classList.add('top')
    currentSlide.classList.remove('active')
    currentSlide.style.transform = 'translate(-100%)'
    next.classList.add('active');
    next.style.transform = 'translate(0)'
    getposition()
    autoLoop()
}
function autoLoop(){
    timeoutId = setTimeout(()=>{
        getNextSlide();
    },5000)
}
autoLoop()


// skill slider slider
const leftArrow = document.querySelector('.left')
leftArrow.addEventListener('click',skillPrevSlide)
const rightArrow = document.querySelector('.right')
rightArrow.addEventListener('click',skillNextSlide)
function getskillNextPrevSlide (){
    const skillslides = Array.from(document.querySelectorAll('.s-slide'))
    const skillActiveSlide = document.querySelector('.s-slide.active')
    const skillActiveIndex = skillslides.indexOf(skillActiveSlide)
    
    let next , prev;
    if(skillActiveIndex===skillslides.length -1){
        next = skillslides[0]
    }else{
         next = skillslides[skillActiveIndex + 1]
    }
    if(skillActiveIndex === 0){
        prev = skillslides[skillslides.length -1 ]
    }else{
        prev = skillslides[skillActiveIndex - 1]
    }
    return [next,prev]
}
getskillNextPrevSlide()

function skillgetposition(){
    const [next,prev] = getskillNextPrevSlide()
    const skillslides = Array.from(document.querySelectorAll('.s-slide'))
    const skillActiveSlide = document.querySelector('.s-slide.active')
    const skillActiveIndex = skillslides.indexOf(skillActiveSlide)
    skillslides.forEach((slide,index)=>{
        if(index === skillActiveIndex){
            slide.style.transform = "translateX(0)";
        }else if(slide === prev){
            slide.style.transform = "translateX(-100%)";
        }else if(slide === next){
            slide.style.transform = "translateX(100%)";
        }else{
            slide.style.transform = "translateX(100%)";
        }
    })
}
function skillNextSlide(){
    clearTimeout(skilltimeoutId)
    const [next,prev] = getskillNextPrevSlide()
    const skillslides = Array.from(document.querySelectorAll('.s-slide'))
    const CurrentSlide = document.querySelector('.s-slide.active')

    skillslides.forEach((slide)=>{
        slide.classList.remove('top')
        return;
    })
    if (CurrentSlide.classList.contains("top")) {
        return;
      }
    CurrentSlide.classList.add("top");
    next.classList.add("top");
    CurrentSlide.classList.remove('active')
    CurrentSlide.style.transform = "translate(-100%)";
    next.style.transform = "translateX(0)";
    next.classList.add('active')
    skillgetposition()
    skillautoLoop()
}
function skillPrevSlide(){
    clearTimeout(skilltimeoutId)
    const [next,prev] = getskillNextPrevSlide()
    const skillslides = Array.from(document.querySelectorAll('.s-slide'))
    const CurrentSlide = document.querySelector('.s-slide.active')
    skillslides.forEach((slide)=>{
        slide.classList.remove('top')
        return;
    })
    if (CurrentSlide.classList.contains("top")) {
        return;
      }
    CurrentSlide.classList.add("top");
    prev.classList.add("top");

    CurrentSlide.style.transform = "translate(100%)";
    CurrentSlide.classList.remove('active')
    prev.style.transform = "translateX(0)";
    prev.classList.add('active')
    skillgetposition()
    skillautoLoop()
}
let skilltimeoutId 
function skillautoLoop(){
    skilltimeoutId = setTimeout(()=>{
        skillNextSlide();
    },5000)
}
skillautoLoop()

// portfolio functionality added
const portfolioOpen = document.getElementById('filter-open')
const filterItem = document.querySelector('.filter .filter-item')
portfolioOpen.addEventListener('click',(e)=>{
    e.preventDefault();
    if(filterItem.classList.contains('active')){
        filterItem.classList.remove('active')
    }else{
        filterItem.classList.add('active')
    }
})