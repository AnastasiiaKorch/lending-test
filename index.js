const nextBtn = document.querySelector('.tumbler_btn2');
const prevBtn = document.querySelector('.tumbler_btn1');
const span = document.querySelector('.span_tumbler_btn');
let spanIndex = 0;
const btnToMain= document.querySelector('.toMain')
const mainSection = document.querySelector('.paragraph_main')
let spanElement = document.querySelector('.span_tumbler_btn');

const carouselItems = document.querySelectorAll('.particip_item');

let currentIndex = 0;

let intervalId;

const carouselCard = document.querySelectorAll('.card2');

let currentIndexCard=0;

if(window.innerWidth <= 400){
    spanElement.innerText = '1 / 6';
    nextBtn.addEventListener('click', ()=> {
        currentIndexCard += 1;
        if(currentIndexCard >= carouselCard.length){
            currentIndexCard = 0;
        }
        spanIndex +=1;
        if(spanIndex > 6){
            spanIndex = 6
        }span.innerText=spanIndex + ' / 6'
        updateCarouselCard();
    })
    prevBtn.addEventListener('click', ()=> {
        currentIndexCard -= 1;
        if(currentIndexCard < 0){
            currentIndexCard = 0
        }
        spanIndex -=1;
        if(spanIndex <1){
            spanIndex=1;
        }
        span.innerText=spanIndex + ' / 6'
        updateCarouselCard()
    })
}

function updateCarouselCard(){
    carouselCard.forEach((item, index)=>{
        if(index === currentIndexCard){
            item.style.display='block';
        } else {
            item.style.display='none';
        }
    });
}



function next() {
    currentIndex += 1;
    if (currentIndex >= carouselItems.length) {
        currentIndex = 0;
    }
    updateCarousel();
}

function prev() {
    currentIndex -= 1;
    if (currentIndex < 0) {
        currentIndex = carouselItems.length - 1;
    }
    updateCarousel();
}

function updateCarousel() {
    carouselItems.forEach((item, index) => {
        if (index === currentIndex) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}
function handleWindowResize(){
    if(window.innerWidth <= 400){
        clearInterval(intervalId);
    } else {
        intervalId = setInterval(next, 4000)
    }
}

window.addEventListener('resize', handleWindowResize);
handleWindowResize();



btnToMain.addEventListener('click', () => {
    mainSection.scrollIntoView({ behavior: 'smooth' });
});

const btnToMore= document.querySelector('.toMore')
const section = document.querySelector('.section_header')

btnToMore.addEventListener('click', () => {
    section.scrollIntoView({ behavior: 'smooth' });
});

const stageHidden = document.querySelector('.stage_hidden');
const stageItems = document.querySelectorAll('.stage_item');
const prevStageBtn = document.querySelector('.btn_hide');
const nextStageBtn = document.querySelector('.btn_hide2');
const dots = document.querySelectorAll('.dotBtn');
let currentStageIndex = 0;


function showSlide(index) {
    stageItems.forEach((item, i) => {
        if (i === index) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
function prevSlide() {
    currentStageIndex--;
    if (currentStageIndex < 0) {
        currentStageIndex = 0
            //stageItems.length;
    }
    showSlide(currentStageIndex);
}
function nextSlide() {
    currentStageIndex++;
    if (currentStageIndex >= stageItems.length) {
        currentStageIndex = 0;
    }
    showSlide(currentStageIndex);
}

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        currentStageIndex = i;
        showSlide(currentStageIndex);
    });
});

prevStageBtn.addEventListener('click', prevSlide);
nextStageBtn.addEventListener('click', nextSlide);
