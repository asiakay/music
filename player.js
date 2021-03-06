


const background = document.querySelector('#background'); // background derived from album cover below
const thumbnail = document.querySelector('#thumbnail'); // album cover 
const song = document.querySelector('#song'); // audio object

const songArtist = document.querySelector('.song-artist'); // element where track artist appears
const songTitle = document.querySelector('.song-title'); // element where track title appears
const progressBar = document.querySelector('#progress-bar'); // element where progress bar appears
let pPause = document.querySelector('#play-pause'); // element where play and pause image appears


// function where songIndex is incremented, song/thumbnail image/background image/song artist/song title changes to next index value, and playPause() runs to play next track

songIndex = 0;
songs = [
  './assets/music/asialakay_we_are_tomorrow_inst.mp3', './assets/music/asialakay_dragonfly.mp3', './assets/music/123trackMNMLRGNL.mp3',
'./assets/music/BLUEBERRYFUNK.mp3', './assets/music/Orphine.mp3', './assets/music/street%20beat%20mix%20down%20air%20cymb.mp3','./assets/music/fareast12615.mp3', './assets/music/El7_7v2.mp3', './assets/music/hologramv3.mp3', './assets/music/stone_roses.mp3']; // object storing paths for audio objects
thumbnails = ['./assets/images/mountainasia_1293349407.jpeg','./assets/images/mountainasia_1293349407.jpeg', './assets/images/mountainasia_1293349407.jpeg', './assets/images/mountainasia_1293349407.jpeg', './assets/images/mountainasia_1293349407.jpeg', './assets/images/mountainasia_1293349407.jpeg', './assets/images/mountainasia_1293349407.jpeg', './assets/images/mountainasia_1293349407.jpeg', './assets/images/mountainasia_1293349407.jpeg', './assets/images/mountainasia_1293349407.jpeg' ]; // object storing paths for album covers and backgrounds
songArtists = ['ASIA LAKAY', 'ASIA LAKAY', 'ASIA LAKAY', 'ASIA LAKAY', 'ASIA LAKAY', 'ASIA LAKAY', 'ASIA LAKAY', 'ASIA LAKAY', 'ASIA LAKAY', 'ASIA LAKAY']; // object storing track artists
songTitles = ["We Are Tomorrow", "Dragonfly X", "MNMLRGNL X Jay-Z", "BLUEBERRY FUNK", "Orphine", "Street Beat", "Far East", "El7", "Hologram", "Stone Roses"]; // object storing track titles


// function where pp (play-pause) element changes based on playing boolean value - if play button clicked, change pp.src to pause button and call song.play() and vice versa.
let playing = true;

function playPause() {
    if (playing) {
const song = document.querySelector('#song'),
thumbnail = document.querySelector('#thumbnail');

pPause.src = "./assets/icons/pause.png"; // changes play to pause
      
thumbnail.style.transform = "scale(1.15)"; //this will slightly zoom in the album cover for a cool effect
        
song.play(); // this will play the audio track
playing = false;
    } else {
        pPause.src = "./assets/icons/play.png"
        thumbnail.style.transform = "scale(1)" //this will slightly zoom in the album cover for a cool effect
        
        song.pause();
        playing = true;
    }
}

// automatically play the next song at the end of the audio object's duration
song.addEventListener('ended', function(){
    nextSong();
});

function nextSong() {
    songIndex++;
    if (songIndex > 9) {
        songIndex = 0;
    };
    song.src = songs[songIndex];
    thumbnail.src = thumbnails[songIndex];
    background.src = thumbnails[songIndex];

    songArtist.innerHTML = songArtists[songIndex];
    songTitle.innerHTML = songTitles[songIndex];

    playing = true;
    playPause();
}

// function where songIndex is decremented, song/thumbnail image/background image/song artist/song title changes to previous index value, and playPause() runs to play previous track 
function previousSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = 9;
    };
  
    song.src = songs[songIndex];
    thumbnail.src = thumbnails[songIndex];
    background.src = thumbnails[songIndex];

    songArtist.innerHTML = songArtists[songIndex];
    songTitle.innerHTML = songTitles[songIndex];

    playing = true;
    playPause();
}

// update progressBar.max to song object's duration, same for progressBar.value, update currentTime/duration DOM
function updateProgressValue() {
    progressBar.max = song.duration;
    progressBar.value = song.currentTime;
    document.querySelector('.currentTime').innerHTML = (formatTime(Math.floor(song.currentTime)));
    if (document.querySelector('.durationTime').innerHTML === "NaN:NaN") {
        document.querySelector('.durationTime').innerHTML = "0:00";
    } else {
        document.querySelector('.durationTime').innerHTML = (formatTime(Math.floor(song.duration)));
    }
};

// convert song.currentTime and song.duration into MM:SS format
function formatTime(seconds) {
    let min = Math.floor((seconds / 60));
    let sec = Math.floor(seconds - (min * 60));
    if (sec < 10){ 
        sec  = `0${sec}`;
    };
    return `${min}:${sec}`;
};

// run updateProgressValue function every 1/2 second to show change in progressBar and song.currentTime on the DOM
setInterval(updateProgressValue, 500);

// function where progressBar.value is changed when slider thumb is dragged without auto-playing audio
function changeProgressBar() {
    song.currentTime = progressBar.value;
};




















/* 
songIndex = 0;
songs = ['./assets/music/123trackMNMLRGNL.mp3', './assets/music/hologramv3.mp3', './assets/music/Orphine.mp3', './assets/music/fareast12615.mp3', './assets/music/dragonflyx.mp3', './assets/music/BLUEBERRYFUNK.mp3', './assets/music/TIPPEETOWMYSOUL.mp3','./assets/music/stone_roses.mp3', './assets/music/hallodali.mp3']; // object storing paths for audio objects
thumbnails = ['./assets/images/asialakay_glitch.jpeg', './assets/images/asialakay_glitch.jpeg', './assets/images/asialakay_glitch.jpeg' ]; // object storing paths for album covers and backgrounds
songArtists = ['MNMLRGNL', 'Asia Lakay', 'Asia Lakay', 'Asia Lakay']; // object storing track artists
songTitles = [ "MNMLRGNL", "hologram", "Orphine",  "fareast",  "dragonflyx",  "BLUEBERRYFUNK", "Stone Roses", "Hallo Dali"]; // object storing track titles
 */