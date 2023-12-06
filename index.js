var Burger_king = document.querySelector('.burger');
var show2 = document.querySelector('.hide');
var show = document.querySelector('.burger-screen-btn');
Burger_king.addEventListener('click', 
function () {
    
    show.style = "display:block;"
});

show2.addEventListener('click', 
function () {
    show.style = "display:none;"
});