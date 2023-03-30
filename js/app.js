const item = document.getElementsByClassName('accordion-item'); 
const trigger = document.getElementsByClassName('accordion-header');
const body = document.getElementsByClassName('accordion-description');
const accImg = document.getElementsByClassName('arrow');
const title = document.getElementsByClassName('header-title');
let questions = [0,0,0,0,0];

for(let i = 0; i < item.length; i++ ) {
    item[i].addEventListener('click', () => {

        for(let i = 0; i < item.length; i++) {
            trigger[i].classList.remove('open');
            title[i].classList.remove('bold');
            body[i].classList.remove('active');
            accImg[i].classList.remove('acc-img');
        }

        if (questions[i] ==  1) {
            trigger[i].classList.remove('open');
            title[i].classList.remove('bold');
            body[i].classList.remove('active');
            accImg[i].classList.remove('acc-img');
            questions[i] = 0;
        } else {
            trigger[i].classList.add('open');
            title[i].classList.add('bold');
            body[i].classList.add('active');
            accImg[i].classList.add('acc-img');
            questions[i] = 1;
        }

    })
};

