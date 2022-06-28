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
buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        if(button.classList.contains('next')) getNextSlide();
        else if(button.classList.contains("prev")) getPrevSlide();
    })
})
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
    getactiveDot()
    autoLoop()
}
function getPrevSlide(){
    clearTimeout(timeoutId)
    const currentSlide = document.querySelector('.slide.active')
    const [next,prev] = getNextprev();
    slides.forEach((slide)=>{
        slide.classList.remove('top')
    })
    currentSlide.classList.add('top')
    prev.classList.add('top')
    currentSlide.classList.remove('active')
    currentSlide.style.transform = 'translateX(100%)'
    prev.classList.add('active');
    prev.style.transform = 'translate(0)'
    getposition()
    getactiveDot()
    autoLoop()
}
//dots function 
slides.forEach(slide=>{
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dotEl.append(dot)
})
function getactiveDot(){
    const allDot = document.querySelectorAll('.dots .dot')
    const activeSlide = document.querySelector('.slide.active')
    const activeIndex = slides.indexOf(activeSlide);
    allDot.forEach((dot)=>{
        dot.classList.remove('active')
    })
    allDot[activeIndex].classList.add('active')
}
function functionAlldots(){
    const allDot = document.querySelectorAll('.dots .dot');
    allDot.forEach((dot,index)=>{
        dot.addEventListener('click',() =>{
            getDotSlide(index);
        })
    })

}
function getDotSlide(index){
    slides.forEach((slide)=>{
        slide.classList.remove("active");
    })
    slides[index].classList.add('active')
    getposition();
    getactiveDot()
}
function autoLoop(){
    timeoutId = setTimeout(()=>{
        getNextSlide();
    },5000)
}
autoLoop()
functionAlldots()
getactiveDot()