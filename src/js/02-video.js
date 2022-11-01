import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const myIframeEl = document.querySelector('#vimeo-player')

const myVideoPlayer = new Player(myIframeEl);

const keyLocalStorage = "videoplayer-current-time";

myVideoPlayer.on('timeupdate', throttle(timeCount, 1000 ));

function timeCount(event) {
    localStorage.setItem(keyLocalStorage, `${event.seconds}`)
}

const savedTimeVideoLocalStorage = localStorage.getItem(keyLocalStorage) || 0;

myVideoPlayer.setCurrentTime(savedTimeVideoLocalStorage);