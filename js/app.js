// set progress
function setBarProgress(selector, min, max) {
    selector.animate([
        {width: min},
        {width: max}
    ], {
        duration: 500,
        delay: 250,
        fill: 'forwards'
    });
}

// quiz form fade in
function formTransition(selector) {
    selector.animate([
        {opacity: 1}, 
    ], {
        duration: 200,
        fill: 'forwards'
    });
}

let mainPage = document.querySelector('.main-page');
if (mainPage) {
    let startBtn = document.querySelector('.hero__button');
    startBtn.addEventListener('click', function() {
    document.location = './quiz.html';
});
}

let quizPage = document.querySelector('.quiz-page');
if (quizPage) {

    let flkty = new Flickity('.carousel');
    let nextButton = document.querySelector('.slider__buttons-next');
    let previousButton = document.querySelector('.slider__buttons-previous');
    nextButton.addEventListener('click', function() {
        flkty.next(true);
    });
    previousButton.addEventListener('click', function() {
        flkty.previous(true);
    });

    let infoBtn = document.querySelector('.quiz__information-block-button');
    let infoBlock = document.querySelector('.quiz__information');
    let typeBlock = document.querySelector('.quiz__type');
    let typePb = document.querySelector('.quiz__type-bar-progress');
    
    infoBtn.addEventListener('click', function() {
        infoBlock.style.display = 'none';
        formTransition(typeBlock);
        typeBlock.style.display = 'block';
        setBarProgress(typePb, '25%', '50%');
    });

    let selectFilmBtn = document.querySelector('#select-film');
    let formBlock = document.querySelector('.quiz__form');
    let formPb = document.querySelector('.quiz__form-bar-progress');

    selectFilmBtn.addEventListener('click', function() {
        typeBlock.style.display = 'none';
        formTransition(formBlock);
        formBlock.style.display = 'block';
        setBarProgress(formPb, '50%', '75%');
    });

    let selectTvBtn = document.querySelector('#select-tv');

    selectTvBtn.addEventListener('click', function () {
        typeBlock.style.display = 'none';
        formTransition(formBlock);
        formBlock.style.display = 'block';
        setBarProgress(formPb, '50%', '75%');
    });

    let selectGenreBtn = document.querySelector('.quiz__form-button');
    let slider = document.querySelector('.slider');
    let resultsBlock = document.querySelector('.quiz__results');
    let resPb = document.querySelector('.quiz__results-bar-progress');
    let carousel = document.querySelector('.carousel');
    let carouselFlkty = new Flickity(carousel);

    selectGenreBtn.addEventListener('click', function () {
        formBlock.style.display = 'none';
        formTransition(formBlock);
        resultsBlock.style.display = 'block';
        formTransition(resultsBlock);
        slider.style.display = 'block';
        formTransition(slider);
        carousel.style.display = 'block';
        carouselFlkty.resize();
        setBarProgress(resPb, '75%', '100%');
    });

    // first (info) quiz page pb animation
    let infoPb = document.querySelector('.quiz__information-bar-progress');
    setBarProgress(infoPb, '0%', '25%');

    let finishBtn = document.querySelector('.slider__buttons-select-finish');
    finishBtn.addEventListener('click', function () {
        location.replace('./index.html');
    });


    let restartBtn = document.querySelector('.slider__buttons-select-again');
    restartBtn.addEventListener('click', function () {
        location.replace('./quiz.html');
    });
}