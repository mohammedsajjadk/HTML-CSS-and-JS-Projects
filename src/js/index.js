// const video = document.getElementById('video');
// const pipButton = document.getElementById('button');

// // if ('pictureInPictureEnabled' in document) {
// //   pipButton.classList.remove('hidden')
// //   pipButton.disabled = false;
  
// //   pipButton.addEventListener('click', () => {
// //     if (document.pictureInPictureElement) {
// //       document
// //         .exitPictureInPicture()
// //         .catch(error => {
// //           // Error handling
// //         })
// //     } else {
// //      await video
// //       .requestPictureInPicture()
// //       .catch(error => {
// //         // Error handling
// //       });
// //     }
// //   });
// // }

// // video.addEventListener('enterpictureinpicture', () => {
// //     pipButton.textContent = 'Exit';
// // });

// // video.addEventListener('leavepictureinpicture', () => {
// //     pipButton.textContent = 'Enter';
// // });


// // Prompt to select media stream, pass to video element, then play
// async function selectMediaStream() {
//     try {
//       const mediaStream = await navigator.mediaDevices.getDisplayMedia();
//       video.srcObject = mediaStream;
//       video.onloadedmetadata = () => {
//         video.play();
//       };
//     } catch (error) {
//       // Catch Error Here
//     }
//   }

//   // On Load
// selectMediaStream();

// button.addEventListener('click', async () => {
//     // Disable Button
//     button.disabled = true;
//     // Start Picture in Picture
//     await video.requestPictureInPicture();
//     // Reset Button
//     button.disabled = false;
//   });


const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    // we are waiting till user has selected which screen or window they want to share
    const mediaStream = await navigator.mediaDevices.getDisplayMedia(); 
    // then we are passing that to video object as its source object
    videoElement.srcObject = mediaStream;
    // onloadedmetadata is something which is true when it is finished loading
    // and once it is finished loading, it is going to play
    videoElement.onloadedmetadata = () => { 
      videoElement.play();
    };
  } catch (error) {
    // Catch Error Here
  }
}

button.addEventListener('click', async () => {
  // Disable Button
  button.disabled = true;
  // Start Picture in Picture
  await videoElement.requestPictureInPicture(); // we are waiting for video element to request picture in picture
  // Reset Button
  button.disabled = false;
});

// On Load
selectMediaStream();
