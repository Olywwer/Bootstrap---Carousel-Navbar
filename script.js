const myCarousel = document.querySelector('#carouselTech')

const carousel = new bootstrap.Carousel(myCarousel, {

interval: 3000, // tempo de troca
ride: 'carousel', // inicia automático
pause: false, // não pausa no mouse
wrap: true // volta para o início

})