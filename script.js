const keysList = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'W', 'E', 'T', 'Y', 'U']

document.addEventListener('keydown', function (e) {
    if (keysList.includes(e.key.toUpperCase())) {
        let audio = new Audio(`src/audios/${e.key.toUpperCase()}.mp3`)
        audio.play()
    } else {
        console.warn('Piano key not found!')
        
    }
})