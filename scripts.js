var quizApp = document.querySelector('#quiz-app');
var milalApp = document.querySelector('#milal-app')
var getMeals = document.querySelector('#get-meals')
var trailFinder = document.querySelector('#trail-finder')
var modalBg = document.querySelector('.modal-bg');
var milalBg = document.querySelector('.milal-app-bg');
var getmealsBg = document.querySelector('.get-meals-bg');
var trailfinderBg = document.querySelector('.trail-finder-bg');
var modalClose = document.querySelector('.modal-close');
var getmealsClose = document.querySelector('#getmealsClose');
var trailfinderClose = document.querySelector('#trailfinderClose');
var milalClose = document.querySelector('#milalClose');


quizApp.addEventListener('click', function() {
    modalBg.classList.add('bg-active')
})


milalApp.addEventListener('click', function() {
    milalBg.classList.add('bg-active')
})

getMeals.addEventListener('click', function() {
    getmealsBg.classList.add('bg-active')
})

trailFinder.addEventListener('click', function() {
    trailfinderBg.classList.add('bg-active')
})


modalClose.addEventListener('click', function() {
    modalBg.classList.remove('bg-active')
})

milalClose.addEventListener('click', function() {
    milalBg.classList.remove('bg-active')
})

getmealsClose.addEventListener('click', function() {
    getmealsBg.classList.remove('bg-active')
})

trailfinderClose.addEventListener('click', function() {
    trailfinderBg.classList.remove('bg-active')
})