import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


// const playerVimeoContent = new Vimeo.Player(iFrameEl);

    // playerVimeoContent.on('play', function() {
    //     console.log('played the video!');
    // });


const player = new Player('vimeo-player', {
    id: 19231868,
    width: 640
});

player.on('play', function() {
    console.log('played the video!');
});

