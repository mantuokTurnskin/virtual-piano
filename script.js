const COLLECTION = document.querySelectorAll('.piano-key');
const PIANO = document.querySelector('.piano')
const FULLSCREEN = document.querySelector('.fullscreen');
const BTN_NOTES = document.querySelector('.btn.btn-notes');
const BTN_LETTERS = document.querySelector('.btn.btn-letters');
const PK_NAMES = document.querySelectorAll('.piano-key');

// обработка нажатия на клавиши и получение нужного звука
const playAudio = (src) => {
    const audio = new Audio();
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
}
window.addEventListener('keydown', (event) => {
    if(event.key === 'D' || event.key === 'd' || event.key === 'В' || event.key === 'в') {
      const key = document.querySelector()  
      playAudio('assets/audio/c.mp3');
    }
  });

const startSound = (e) => {
    let key = e.target;
    key.classList.add('piano-key-active');
    let note = document.getElementById(key.dataset.note);
    note.currentTime = 0;
    note.play();
    note.addEventListener('ended', () => key.classList.remove('piano-key-active'));
}
const stopSound = (e) => {
    let key = e.target;
    key.classList.remove('piano-key-active');
}

PIANO.addEventListener('mousedown', startSound, false);
PIANO.addEventListener('mouseup', stopSound);

FULLSCREEN.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
});

BTN_NOTES.addEventListener('click', () => {
    BTN_LETTERS.classList.remove('btn-active');
    BTN_NOTES.classList.add('btn-active');
    PK_NAMES.forEach(el => {
        el.classList.remove('btn-letters-active');
        el.classList.add('btn-notes-active');
    })



})

BTN_LETTERS.addEventListener('click', () => {
    BTN_LETTERS.classList.add('btn-active');
    BTN_NOTES.classList.remove('btn-active');
    PK_NAMES.forEach(el => {
        el.classList.remove('btn-notes-active');
        el.classList.add('btn-letters-active');
    })

})
