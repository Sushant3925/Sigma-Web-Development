

let currentSong = new Audio();
let songs = [];
let currentFolder;


//Get the song and push inside the array
async function getSongs(folder) {
    currentFolder = folder;
    let a = await fetch(`http://127.0.0.1:3000/${folder}/`)
    let response = await a.text()
    let div = document.createElement("div")
    div.innerHTML = response

    let as = div.getElementsByTagName("a")

    songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split(`/${folder}/`)[1])
        }

    }
    //show all the song in laylist library
    let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0]
    songUL.innerHTML = ""
    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML +
            `<li>
        <img class="invert" src="Resources/music.svg" alt="">

        <div class="info">
            <div>${song}
            </div>

            <div>Nayan</div>
        </div>
        <div class="playNow">
            <span>Play Now</span>
            <img class="invert" src="Resources/play.svg" alt="img">
        </div>      
       </li>`

    }

    //Add an event listner to each song
    Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", element => {
            playMusic(e.querySelector(".info").firstElementChild.innerHTML)
        })
    })
    return songs
}


//Function to convert seconds into minutes
function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}

const playMusic = (track, pause = false) => {
    console.log(track);
    currentSong.src = `/${currentFolder}/` + track
    if (!pause) {
        currentSong.play()
        play.src = "Resources/pause.svg"
    }

    document.querySelector(".songInfo").innerHTML = decodeURI(track)
    document.querySelector(".songTime").innerHTML = "00:00 / 00:00"
}

async function displayAlbum() {
    console.log("Displaying albums.")
    let a = await fetch(`http://127.0.0.1:3000/songs/`)
    let response = await a.text()

    let div = document.createElement("div")

    div.innerHTML = response
    cardContainer = document.querySelector(".cardContainer")
    let anchors = div.getElementsByTagName("a")
    let array = Array.from(anchors)
    for (let index = 0; index < array.length; index++) {
        const e = array[index];
        if (e.href.includes("/songs")) {
            let folder = e.href.split("/").slice(-2)[0]

            //Get meta data of the folder
            let a = await fetch(`http://127.0.0.1:3000/songs/${folder}/info.json`)

            let response = await a.json()

            cardContainer.innerHTML = cardContainer.innerHTML + `<div data-folder="${folder}" class="card rounded">

            <div class="play scaleY">
                <img src="Resources/play.svg" alt="img">
            </div>

            <img class="rounded" src="/songs/${folder}/cover.jpg"
                alt="img">
            <h3>${response.title}</h3>
            <p>${response.description}</p>
        </div>`
        }
    }
    //Load the music from the card Use it as a Folder
    Array.from(document.getElementsByClassName("card")).forEach(e => {
        e.addEventListener("click", async item => {

            songs = await getSongs(`songs/${item.currentTarget.dataset.folder}`)
        })
    })


}

async function main() {
    //Get the list of all the song
    await getSongs("songs/music1")
    playMusic(songs[0], true)

    await displayAlbum()

    //Attach a event Listner to play ,next and prev
    play.addEventListener("click", () => {
        if (currentSong.paused) {
            currentSong.play()
            console.log(currentSong)
            play.src = "Resources/pause.svg"
        }
        else {
            currentSong.pause()
            play.src = "Resources/play.svg"
        }
    })

    //Add listner to current song to know the current time of song

    currentSong.addEventListener("timeupdate", () => {
        document.querySelector(".songTime").innerHTML = `${secondsToMinutesSeconds(currentSong.currentTime)}/${secondsToMinutesSeconds(currentSong.duration)}`

        //Move the circle on seek bar
        document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%"

        if(currentSong.currentTime == currentSong.duration)
        {
            let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
            playMusic(songs[index+1]);
        }
    })

    //Add eventListner the seekbar to seek at clicked location
    document.querySelector(".seekbar").addEventListener("click", e => {
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
        document.querySelector(".circle").style.left = percent + "%";

        currentSong.currentTime = ((currentSong.duration) * percent) / 100
    })

    //Add Event listner to the Hamburger
    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".left").style.left = "0";
    })

    //Add Event listner to the close button to close the hamburger
    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-121%"
    })

    // Add EventListner to the previous buttom to play previous song
    previous.addEventListener("click", () => {

        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
        if ((index - 1) >= 0) {
            playMusic(songs[index - 1])
        }
    })

    // Add EventListner to the next buttom to play Next song    
    next.addEventListener("click", () => {
        console.log("next clicked")

        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])

        if ((index + 1) < songs.length) {
            playMusic(songs[index + 1])
        }
        else {
            playMusic(songs[0])
        }



    })
    //Add EventListner to volume button

    document.querySelector(".range").addEventListener("change", (e) => {
        currentSong.volume = e.target.value / 100;

        if (currentSong.volume == 0) {
            muted.src = "Resources/icons8-no-audio-48.png"
        }
        else {
            muted.src = "Resources/volume.svg"

        }
    })



    //Add Event Listner  to the volume button
    document.querySelector(".volume > img").addEventListener("click", (e) => {

        let item = document.querySelector(".range")
        document.querySelector(".range").getElementsByTagName("input")[0]

        if (e.target.src.includes("volume.svg")) {
            e.target.src = e.target.src.replace("volume.svg", "icons8-no-audio-48.png")
            currentSong.volume = 0
            item.value = 0

        }
        else {
            e.target.src = e.target.src.replace("icons8-no-audio-48.png", "volume.svg")

            currentSong.volume = 0.1
            item.value = 10

        }
    })
}

main()
