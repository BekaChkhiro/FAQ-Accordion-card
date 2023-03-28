const items = document.querySelectorAll('.accordion-items .accordion-item');

items.forEach(item => {
    const trigger = item.querySelector('.accordion-header');
    const body = item.querySelector('.accordion-description');
    const accImg = item.querySelector('#arrow');
    const title = item.querySelector('.header-title');

    trigger.addEventListener('click', () => {
        items.forEach(item => {
            const trigger = item.querySelector('.accordion-header');
            const body = item.querySelector('.accordion-description');
            const accImg = item.querySelector('#arrow');
            const title = item.querySelector('.header-title');

            item.querySelector('.accordion-header').classList.remove('open');
            title.classList.remove('bold');
            body.classList.remove('active');
            accImg.classList.remove('acc-img');
        })
        item.querySelector('.accordion-header').classList.toggle('open');
        title.classList.toggle('bold');
        body.classList.toggle('active');
        accImg.classList.toggle('acc-img');
    });
    
});