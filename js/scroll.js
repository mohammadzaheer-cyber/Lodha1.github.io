window.addEventListener('scroll', () => {

    const overview_content = document.querySelector('.cont1');
    const overview_img = document.querySelector('.cont2');

    // console.log(overview_content);

    if (window.scrollY > 400) {

        overview_content.classList.add('top-left');
        overview_img.classList.add('top-left');

    }


    // Highlight section 

    const cont3 = document.querySelector('.cont3');
    const cont4 = document.querySelector('.cont4');
    const cont5 = document.querySelector('.cont5');
    const cont6 = document.querySelector('.cont6');

    if (window.scrollY <= 950) {
        cont3.classList.add('right-left');
    }
    else if (window.scrollY <= 1075) {
        cont4.classList.add('right-left');
    }
    else if (window.scrollY <= 1175) {
        cont5.classList.add('right-left');
    }
    else if (window.scrollY <= 1275) {
        cont6.classList.add('right-left');
    }

    // Amenities 

    const li_list = document.querySelectorAll('.main-amenities li');



    if (window.scrollY > 1960) {

        let i = 0
        li_list.forEach(async function (li) {
            setTimeout(() => {
                li.classList.add("ameni-show");
            }, i * 250)
            i++;
        })
        
    }

})



