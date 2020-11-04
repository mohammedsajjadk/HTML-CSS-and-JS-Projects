import voiceRSS from './voiceRSS'

const button = document.getElementById('button');
const audioElement = document.getElementById('audio');

// Disable/Enable button
function toggleButton() {
    button.disabled = !button.disabled
}

async function getJokes() {
    let joke = ''
    try {
        const resp = await fetch('https://sv443.net/jokeapi/v2/joke/Any')
        const data = await resp.json()
         // Assign One or Two Part Joke
       if(data.type === 'single') {
            joke =  data.joke
        } else if(data.type === 'twopart') {
            joke = `${data.setup} ... ${data.delivery}`
        }
        // Passing Joke to VoiceRSS API
        tellMe(joke)
        // Once joke is finished, enabling the button again.
        toggleButton()
    } catch(e) {
        console.log('whoops', e)
    }
}
// VoiceRSS Speech Function
function tellMe(joke) {
    const jokeString = joke.trim().replace(/ /g, '%20');
    // VoiceRSS Speech Parameters
    voiceRSS.speech({
        key: '8dfeab626789429eaf65476816b448e4',
        src: jokeString,
        hl: 'en-us',
        v: 'Linda',
        r: 0, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}

button.addEventListener('click', getJokes)
audioElement.addEventListener('ended', toggleButton)