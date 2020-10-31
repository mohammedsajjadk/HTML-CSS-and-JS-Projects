const loader = document.getElementById("loader");
const imgContainerEle = document.querySelector(".image-container");

// Initially setting the count to 5 because we want the images to load fast
let isInitialLoad = true;
let initialCount = 5;

let ready = false; // this will be true only when all images are loaded
let imagesLoaded = 0;
let totalImages = 0;

let photosArray = [];
const apiKey1 = "oDHV8TR0kheFQcHwoAhQRAPmig0hMcB-W2tMmV3faDc";
const apiKey2 = "qCqkAIj0hmlBopR1SF8GabFnaY8ptUAiH8aU5WfaQoI";
let apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey1}&count=${initialCount}`;

// Check if all images were loaded
function allImageLoaded() {
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    ready = true;
    loader.hidden = true; // this will be hidden once we load the images for first time, then it will stay hidden (meaning, we won't make this false)
  }
}

// Changing the APIUrl count
function updateAPIURLWithNewCount(picCount) {
  apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey1}&count=${picCount}`;
}

// Get photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
    /* 
      Once the photos are loaded, I am changing the count to 20 and changing the API URL as well
      So, next time when getPhotos() is called, we will get 20 images.
    */
    if (isInitialLoad) {
      updateAPIURLWithNewCount(20);
      isInitialLoad = false;
    }
  } catch (error) {
    alert("Error Fetching API. May be the limit has exceeded!!!!");
  }
}

function displayPhotos() {
  imagesLoaded = 0;
  totalImages = photosArray.length;
  photosArray.forEach((curr) => {
    const html = markUp(
      curr.links.html,
      curr.urls.regular,
      curr.alt_description
    );
    imgContainerEle.insertAdjacentHTML("beforeend", html);
    /* We want to check if images are loaded. So, we are using "load" event. NOTE: Load event is a part of WebAPI, so it will be executed last. 
      And we are iterating forEach (see above) we are adding the html before the end (using beforeend). 
      Therefore, the <a> tag will be added at the end & since we need to check if the image is loaded or not, we are using "a:last-child" and 
      then getting the img. And adding an event listener to that element.
    */
    const eleNew = imgContainerEle.querySelector(`a:last-child img`);
    eleNew.addEventListener("load", allImageLoaded);
  });
}

const markUp = (href, url, description) =>
  `
  <a href="${href}" target="_blank">
    <img
      src="${url}"
      alt="${description}"
      title="${description}"
    />
  </a>
`;

window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY > document.body.offsetHeight - 1000 &&
    ready
  ) {
    ready = false;
    getPhotos();
  }
});

getPhotos();

// count = 20;
// apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey1}&count=${count}`;
