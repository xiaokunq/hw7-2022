var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay = false;
	video.loop = false;

});

document.querySelector("#play").addEventListener("click", function() {
console.log("Play Video");
document.querySelector("#volume").innerHTML=video.volume*100+"%"
video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
	});


document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	video.playbackRate = 0.9 * video.playbackRate
	console.log(video.playbackRate);
	});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	video.playbackRate= video.playbackRate/0.9
	console.log(video.playbackRate);
	});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Video");
	video.currentTime = 10 + video.currentTime
	if (video.currentTime==video.duration){
		video.loop=true;
	}
	console.log(video.currentTime);
	});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute the Video");
		if (video.muted==false){
		video.muted=true;
		document.querySelector("#mute").innerHTML="Unmute";
		}
		else{
		video.muted=false;
		document.querySelector("#mute").innerHTML="Mute";
		}
		
	});


// Utilize the existing oldSchool class on the video element
// Original
// Remove the oldSchool class from the video.
document.querySelector("#slider").addEventListener("click", function() {
	video.volume=this.value/100;
	console.log("The volume is"+video.volume);
	document.querySelector("#volume").innerHTML=this.value + "%"
	});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Change to oldSchool'");
	video.classList.add("oldSchool");
	});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Change to original");
	video.classList.remove("oldSchool");
	});
	