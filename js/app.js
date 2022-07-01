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