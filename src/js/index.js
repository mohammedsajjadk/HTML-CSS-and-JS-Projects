const checkboxEle = document.querySelector('input[type="checkbox"]')
const navigationEle = document.querySelector('.navigation')
const imageContainerEle = document.querySelectorAll('.image-container img')
const textBoxEle = document.querySelector('.text-box')

function toggleSrc(newColor) {
    localStorage.setItem('theme', newColor)
    const currentColor = newColor === 'light' ? 'dark' : 'light';
    const newNavBgColor = newColor === 'light' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)';
    const newtoggleBgColor = newColor === 'light' ? 'rgba(66, 66, 66, 0.6)' : 'rgba(255, 255, 255, 0.5)';
    
    document.documentElement.setAttribute('data-theme', newColor)
    imageContainerEle.forEach(curr => curr.src = curr.src.replace(currentColor, newColor))
    navigationEle.style.background = newNavBgColor;
    textBoxEle.style['background-color'] = newtoggleBgColor;
}


checkboxEle.addEventListener('change', e => {
    const isChecked = e.target.checked;
    if(isChecked) {
        toggleSrc('dark');
    } else {
        toggleSrc('light');
    }
})

if(localStorage.getItem('theme') === 'dark') {
    toggleSrc('dark');
}