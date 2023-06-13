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


//Location specification

const head1 = document.querySelector('.head1');
const head2 = document.querySelector('.head2');
const head3 = document.querySelector('.head3');

const specs = document.querySelector('.specs');
const specs1 = document.querySelector('.specs1');
const specs2 = document.querySelector('.specs2');

head2.addEventListener('click', () => {
  specs1.classList.remove('hide1');
  specs.classList.add('hide1');
  specs2.classList.add('hide1');
})

head3.addEventListener('click', () => {
specs2.classList.remove('hide1');
specs.classList.add('hide1');
specs1.classList.add('hide1');
})

head1.addEventListener('click', () => {
specs.classList.remove('hide1');  
specs2.classList.add('hide1');
specs1.classList.add('hide1');
})

head1.addEventListener('click', () => {
    head1.classList.add('loc-head');
    head2.classList.remove('loc-head');
    head3.classList.remove('loc-head');
})
head2.addEventListener('click', () => {
    head2.classList.add('loc-head');
    head1.classList.remove('loc-head');
    head3.classList.remove('loc-head');
});
head3.addEventListener('click', () => {
    head3.classList.add('loc-head');
    head2.classList.remove('loc-head');
    head1.classList.remove('loc-head');
});

// Modal Call

const callModal = document.querySelectorAll('.call-modal');
const modalform = document.querySelector('.modal');

const closeModal = document.querySelector('.close-modal');

for (const modalCall of callModal){

   modalCall.addEventListener('click', () => {
    modalform.classList.add('modal-show');
   })
}

closeModal.addEventListener('click', () => {
    modalform.classList.remove('modal-show');
})

// modalform.addEventListener('click', () => {
//     modalform.classList.remove('modal-show');
// })