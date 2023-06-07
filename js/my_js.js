const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');
toggle.addEventListener('click', () => {
    menu.classList.add('show');
});
menu.addEventListener('click', () => {
    menu.classList.remove('show');
})


// Gallery scroll 

const gal_body = document.querySelector('.gallery-body'),
firstImg = gal_body.querySelectorAll("img")[0],
arrowIcon = document.querySelectorAll('.gallery-wrapper span');

let isDragStart = false , prePageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth;

arrowIcon.forEach(icon =>{
    icon.addEventListener("click", () => {
        gal_body.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    })
})

gal_body.addEventListener("mousemove", (e) => {

    if(!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prePageX;
    gal_body.scrollLeft = prevScrollLeft - positionDiff;

})

gal_body.addEventListener("mousedown", (e) => {

    isDragStart = true;   
    prePageX = e.pageX;
    prevScrollLeft = gal_body.scrollLeft;

})

gal_body.addEventListener("mouseup", () => {

    isDragStart= false
})

// gallery scroll end 