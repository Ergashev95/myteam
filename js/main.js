const bar = document.querySelector('.header-bars');
const nav = document.querySelector('.nav');
const closeIcon = document.querySelector('.close-icon');

bar.addEventListener('click',function () {
    nav.style.right = 0;
})

closeIcon.addEventListener('click',function() {
    nav.style.right = "-255px";
})