const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);

const p_Elements = $$('p');
const audio = $('#audio');
const video = $('#video')

function play() {
    audio.onclick = () => {
        audio.play();
        video.pause();
        console.log(audio)
    }
    video.onclick = () => {
        audio.pause();
        video.play();
    }
}

function payLoad() {
    Array.from(p_Elements).map((pElement, index) => {
        pElement.contentEditable = 'true';
        pElement.setAttribute('key', `${index}`);
        const text = JSON.parse(localStorage.getItem(`STATE_${index}`));
        if (text) {
            pElement.textContent = text;
        }
    })
}

function editText() {
    document.onclick = (e) => {
        const element = e.target
        const key = element.getAttribute('key');
        if (key) {
            let index = parseInt(key);

            element.onblur = () => {
                const temp = element.textContent;
                // localStorage.clear(`STATE_${index}`);
                const text = JSON.parse(localStorage.getItem(`STATE_${index}`));
                if (temp !== text) {
                    localStorage.setItem(`STATE_${index}`, JSON.stringify(temp));
                }
            }
        }  
    }
    
}

function App() {
    payLoad();
    editText();
    play();
}

App();




