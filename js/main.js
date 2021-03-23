const mySwiper = new Swiper('.swiper-container', {
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.slider-button-next',
        prevEl: '.slider-button-prev',
    },
});

// cart

const buttonCart = document.querySelector('.button-cart')
const modalClose = document.querySelector('.modal-close')
const modalCart = document.querySelector('#modal-cart')

const openModal = () => {
    modalCart.classList.add('show')
}

const closeModal = () => {
    modalCart.classList.remove('show')
}

buttonCart.addEventListener('click', openModal)
modalClose.addEventListener('click', closeModal)

// DZ

modalCart.addEventListener('click', (e) => {
    if (!e.target.closest('.modal')) {
        closeModal()
    }
})

// scroll smooth

{
    const scrollLinks = document.querySelectorAll('a.scroll-link')

    for (let i = 0; i < scrollLinks.length; i++) {
        scrollLinks[i].addEventListener('click', (e) => {
            e.preventDefault()
            const id = scrollLinks[i].getAttribute('href')
            document.querySelector(id).scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        })
    }
}