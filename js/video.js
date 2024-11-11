// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

var video;

window.addEventListener("load", function() {
    console.log("Good job opening the window");

    // Initialize the video element
    video = document.getElementById("player1");
    video.autoplay = false;
    video.loop = false;

    // Display initial volume
    document.getElementById("volume").innerHTML = video.volume * 100 + "%";

    // Play Button
    document.getElementById("play").addEventListener("click", function() {
        video.play();
        document.getElementById("volume").innerHTML = video.volume * 100 + "%";
        console.log("Play Video");
    });

    // Pause Button
    document.getElementById("pause").addEventListener("click", function() {
        video.pause();
        console.log("Pause Video");
    });

    // Slow Down Button
    document.getElementById("slower").addEventListener("click", function() {
        video.playbackRate *= 0.9;
        console.log("New speed is " + video.playbackRate);
    });

    // Speed Up Button
    document.getElementById("faster").addEventListener("click", function() {
        video.playbackRate /= 0.9;
        console.log("New speed is " + video.playbackRate);
    });

    // Skip Ahead Button
    document.getElementById("skip").addEventListener("click", function() {
        if (video.currentTime + 10 > video.duration) {
            video.currentTime = 0;
        } else {
            video.currentTime += 10;
        }
        console.log("Current time is " + video.currentTime);
    });

    // Mute/Unmute Button
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

    // Volume Slider
    document.getElementById("slider").addEventListener("input", function() {
        video.volume = this.value / 100;
        document.getElementById("volume").innerHTML = video.volume * 100 + "%";
        console.log("Volume is " + video.volume);
    });

    // Old School Style Button
    document.getElementById("vintage").addEventListener("click", function() {
        video.classList.add("oldSchool");
    });

    // Original Style Button
    document.getElementById("orig").addEventListener("click", function() {
        video.classList.remove("oldSchool");
    });
});

