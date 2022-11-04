const music = document.querySelector('audio')
const play = document.querySelector('#play')
const img = document.querySelector('img')
const artist = document.querySelector('#artist')
const title = document.querySelector('#title')
const prev = document.querySelector('#prev')
const next = document.querySelector('#next')


const MusicData = [
    { music: 'song (1)', title: 'tum hi Aana', artist: 'Jubin Nautiyal', img: 'music', },
    { music: 'song (2)', title: 'Tere Bare', artist: 'Karan Randhawa', img: 'music', },
    { music: 'song (3)', title: 'Hislerim', artist: 'Serhat Durmus', img: 'music', },
    { music: 'song (4)', title: 'Pal', artist: 'Arijit Singh', img: 'music', },
    { music: 'song (5)', title: "She Don't Know", artist: 'Milind Gaba', img: 'music', },
    { music: 'song (6)', title: 'Tum hi ho', artist: 'Arijit Singh', img: 'music', }

]



isPlaying = false;
// music play function

const playMusic = () => {
    isPlaying = true;
    music.play()
    play.classList.replace('fa-play', 'fa-pause')
    img.classList.add('anim')
}

// music pause function
const pauseMusic = () => {
    isPlaying = false
    music.pause()
    play.classList.replace('fa-pause', 'fa-play',)
    img.classList.remove('anim')
}


play.addEventListener('click', () => {
    // if (isPlaying) {
    //     pauseMusic()
    // } else {
    //     playMusic()
    // }
    isPlaying ? pauseMusic() : playMusic();
})

// changing the music 
const loadSong = (MusicData) => {
    music.src = "songs/" + MusicData.music + ".mp3"
    img.src = "Images/" + MusicData.img + ".png"
    title.textContent = MusicData.title;
    artist.textContent = MusicData.artist;
}
// loadSong(MusicData[2]);
musicIndex = 0;

next.addEventListener('click', () => {
    musicIndex = (musicIndex + 1) % MusicData.length;
    loadSong(MusicData[musicIndex]);
    playMusic();
})

prev.addEventListener('click', () => {
    musicIndex--;
    loadSong(MusicData[musicIndex])
    playMusic();
})


