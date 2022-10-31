import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';

const galleryRef = document.querySelector('.gallery');

const createCalleryItemMurkup = galleryItems
  .map(
    item =>
      `<a class="gallery__item" href="${item.original}">
            <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
        </a>`
  )
  .join('');

galleryRef.insertAdjacentHTML('afterbegin', createCalleryItemMurkup);

galleryRef.addEventListener('click', handleClick);

function handleClick(event) {
  event.preventDefault();
  const handClick = event.target.nodeName;
  if (handClick !== 'IMG') {
    return;
  }
}

const galleryAllImages = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  animationSpeed: 300,
  fadeSpeed: 350,
});



// const timeKey = "videoplayer-current-time";

// const player = new Player('handstick', {
//     id: 19231868,
//     width: 640
// });

// // player.on('play', function() {
// //     console.log('played the video!');
// // });

// player.on('currentTime', function(data) {
//     timeKey = data;
// });


// // var callback = function() {};

// // player.off('eventName', callback);


// player.setCurrentTime(30.456).then(function(seconds) {
//     // seconds = the actual time that the player seeked to
// }).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
//             // the time was less than 0 or greater than the video’s duration
//             break;

//         default:
//             // some other error occurred
//             break;
//     }
// });
