const images = document.querySelectorAll('.image')

window.addEventListener('scroll', checkImages)

checkImages()

function checkImages() {
    const triggerBottom = window.innerHeight / 5 * 4

    images.forEach(image => {
        const imageTop = image.getBoundingClientRect().top

        if(imageTop < triggerBottom) {
            image.classList.add('show')
        } else {
            image.classList.remove('show')
        }
    })
}

