const checkboxEle = document.querySelector('input[type="checkbox"]')
const navigationEle = document.querySelector('.navigation')
const imageContainerEle = document.querySelectorAll('.image-container img')
const textBoxEle = document.querySelector('.text-box')

function switchTheme(newColor) {
    // Setting to local storage
    localStorage.setItem('theme', newColor)
   
     // These are the things we are changing when we change the theme
     const currentColor = newColor === 'light' ? 'dark' : 'light';
     document.documentElement.setAttribute('data-theme', newColor) // setting to HTML
     imageContainerEle.forEach(curr => curr.src = curr.src.replace(currentColor, newColor))
   
    const newNavBgColor = newColor === 'light' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)';
    navigationEle.style.background = newNavBgColor;

    const newtoggleBgColor = newColor === 'light' ? 'rgba(66, 66, 66, 0.6)' : 'rgba(255, 255, 255, 0.5)';
    textBoxEle.style['background-color'] = newtoggleBgColor;
}

checkboxEle.addEventListener('change', e => {
    const isChecked = e.target.checked;
    if (isChecked) {
        switchTheme('dark');
    } else {
        switchTheme('light');
    }
})


/* Checking at the start, from the localstorage, if the theme is dark or not */
if (localStorage.getItem('theme') === 'dark') {
    switchTheme('dark');
}