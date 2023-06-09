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
        li_list.forEach(function (li) {
            setTimeout(() => {
                li.classList.add("ameni-show");
            }, i * 250)
            i++;
        })

    }

    // Price card

    const card_body = document.querySelectorAll('.card-body');

    if (window.scrollY >= 2600) {

        let i = 0
        card_body.forEach(function (cb) {
            setTimeout(() => {
                cb.classList.add("card-show");
            }, i * 300)
            i++;
        })

    }


    // floor card

    const floor_card = document.querySelectorAll('.main-floor li');

    if(window.scrollY >= 3100){
        let i = 0
        floor_card.forEach(function (fc) {
            setTimeout(() => {
                fc.classList.add("show-card");
            }, i * 1)
            i++;
        })
    }

    const swip1 = document.querySelector('.swip1');
    const swip2 = document.querySelector('.swip2');

    if (window.scrollY >= 3300) {
        swip1.classList.add('card-swip1')
        swip2.classList.add('card-swip2')
    }


    // console.log(swip1);

})



