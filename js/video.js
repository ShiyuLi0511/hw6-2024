// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

var video;

window.addEventListener("load", function() {
    console.log("Good job opening the window");

    video = document.getElementById("player1");
    video.autoplay = false;
    video.loop = false;
    video.volume = 1;

    document.getElementById("volume").innerHTML = video.volume * 100 + "%";

    document.getElementById("play").addEventListener("click", function() {
        video.play();
        document.getElementById("volume").innerHTML = video.volume * 100 + "%";
        console.log("Play Video");
    });

    document.getElementById("pause").addEventListener("click", function() {
        video.pause();
        console.log("Pause Video");
    });

    document.getElementById("slower").addEventListener("click", function() {
        video.playbackRate *= 0.9;
        console.log("New speed is " + video.playbackRate);
    });

    document.getElementById("faster").addEventListener("click", function() {
        video.playbackRate /= 0.9;
        console.log("New speed is " + video.playbackRate);
    });

    document.getElementById("skip").addEventListener("click", function() {
        if (video.currentTime + 10 > video.duration) {
            video.currentTime = 0;
        } else {
            video.currentTime += 10;
        }
        console.log("Current time is " + video.currentTime);
    });

    document.getElementById("mute").addEventListener("click", function() {
        if (video.muted) {
            video.muted = false;
            this.innerHTML = "Mute";
        } else {
            video.muted = true;
            this.innerHTML = "Unmute";
        }
        console.log("Muted: " + video.muted);
    });

    document.getElementById("slider").addEventListener("input", function() {
        video.volume = this.value / 100;
        document.getElementById("volume").innerHTML = video.volume * 100 + "%";
        console.log("Volume is " + video.volume);
    });

    document.getElementById("vintage").addEventListener("click", function() {
        video.classList.add("oldSchool");
    });

    document.getElementById("orig").addEventListener("click", function() {
        video.classList.remove("oldSchool");
    });
});

