// // Stage Elements
// const stage1 = document.getElementById("stage1");
// const stage2 = document.getElementById("stage2");
// const stage3 = document.getElementById("stage3");
// const stage4 = document.getElementById("stage4");

// // Elements for interactions
// const door = document.getElementById("door");
// const envelope = document.getElementById("envelope");
// const yesBtn = document.getElementById("yes-btn");
// const noBtn = document.getElementById("no-btn");
// const letterText = document.getElementById("letter-text");

// // Sound elements
// const doorSound = document.getElementById("door-sound");
// const envelopeSound = document.getElementById("envelope-sound");
// const clickSound = document.getElementById("click-sound");
// const heartPop = document.getElementById("heart-pop");
// const bgMusic = document.getElementById("bg-music");

// // Start Background Music
// document.addEventListener("click", () => {
//     bgMusic.play();
// }, { once: true });

// // Click the door to enter the room
// door.addEventListener("click", function () {
//     door.style.animation = "openDoor 1s ease-in-out forwards";
//     doorSound.play();
//     setTimeout(() => {
//         stage1.classList.add("hidden");
//         stage2.classList.remove("hidden");
//     }, 1000);
// });

// // Click the envelope to reveal the letter
// envelope.addEventListener("click", function () {
//     envelope.style.animation = "flipEnvelope 1s ease-in-out forwards";
//     envelopeSound.play();
//     setTimeout(() => {
//         stage2.classList.add("hidden");
//         stage3.classList.remove("hidden");
//         letterText.classList.remove("hidden");
//     }, 1000);
// });

// // "Yes" button moves to the thank you screen
// yesBtn.addEventListener("click", function () {
//     clickSound.play();
//     stage3.classList.add("hidden");
//     stage4.classList.remove("hidden");
//     createFloatingHearts();
// });

// // "No" button moves randomly
// noBtn.addEventListener("mouseover", function () {
//     const x = Math.random() * 200 - 100;
//     const y = Math.random() * 200 - 100;
//     noBtn.style.transform = `translate(${x}px, ${y}px)`;
// });

// // Floating Hearts Effect
// function createFloatingHearts() {
//     for (let i = 0; i < 20; i++) {
//         setTimeout(() => {
//             const heart = document.createElement("div");
//             heart.classList.add("heart");
//             document.body.appendChild(heart);
//             heart.style.left = `${Math.random() * 100}vw`;
//             heart.style.animationDuration = `${Math.random() * 3 + 3}s`;
//             heartPop.play();
//             setTimeout(() => heart.remove(), 4000);
//         }, i * 200);
//     }
// }
// // function openEnvelope() {
// //     // Hide the button and show the video
// //     document.getElementById('open-envelope-btn').style.display = 'none';
// //     let video = document.getElementById('envelope');
// //     video.style.display = 'block'; // Show the video
// //     video.play(); // Play the video

// //     // Set the playback speed to 0.25 (25% speed)
// //     video.playbackRate = 0.25;
// // }
// function openEnvelope() {
//     // Hide the "Open the Envelope" button and show the video
//     document.getElementById('open-envelope-btn').style.display = 'none';
//     let video = document.getElementById('envelope');
//     video.style.display = 'block'; // Show the video
//     video.play(); // Play the video

//     // Play the envelope sound
//     document.getElementById('envelope-sound').play();

//     // Set the playback speed to 0.25 (25% speed)
//     video.playbackRate = 0.25;

//     // Show the "Reveal" button after the video starts playing
//     document.getElementById('reveal-btn').style.display = 'inline-block'; // Show the reveal button
// }

// function revealStage3() {
//     // Hide Stage 2 and show Stage 3
//     document.getElementById('stage2').style.display = 'none';
//     document.getElementById('stage3').style.display = 'block';
    
//     // Play the click sound to indicate transition
//     document.getElementById('click-sound').play();
// }


// Stage Elements
const stage1 = document.getElementById("stage1");
const stage2 = document.getElementById("stage2");
const stage3 = document.getElementById("stage3");
const stage4 = document.getElementById("stage4");

// Elements for interactions
const door = document.getElementById("door");
const envelope = document.getElementById("envelope");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const letterText = document.getElementById("letter-text");

// Sound elements
const doorSound = document.getElementById("door-sound");
const envelopeSound = document.getElementById("envelope-sound");
const clickSound = document.getElementById("click-sound");
const heartPop = document.getElementById("heart-pop");
const bgMusic = document.getElementById("bg-music");

// Start Background Music
document.addEventListener("click", () => {
    bgMusic.play();
}, { once: true });

// Click the door to enter the room
door.addEventListener("click", function () {
    door.style.animation = "openDoor 1s ease-in-out forwards";
    doorSound.play();
    setTimeout(() => {
        stage1.classList.add("hidden");
        stage2.classList.remove("hidden");
    }, 1000);
});

// Click the envelope to reveal the letter
envelope.addEventListener("click", function () {
    envelope.style.animation = "flipEnvelope 1s ease-in-out forwards";
    envelopeSound.play();
    setTimeout(() => {
        stage2.classList.add("hidden");
        stage3.classList.remove("hidden");
        // Ensure the letter text is visible when transitioning to Stage 3
        letterText.classList.remove("hidden"); // Make sure letter text becomes visible
    }, 1000);
});

// "Yes" button moves to the thank you screen
yesBtn.addEventListener("click", function () {
    clickSound.play();
    // Hide the letter text after clicking "Yes"
    letterText.classList.add("hidden");
    stage3.classList.add("hidden");
    stage4.classList.remove("hidden");
    createFloatingHearts();
});

// "No" button moves randomly
noBtn.addEventListener("mouseover", function () {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// Floating Hearts Effect
function createFloatingHearts() {
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement("div");
            heart.classList.add("heart");
            document.body.appendChild(heart);
            heart.style.left = `${Math.random() * 100}vw`;
            heart.style.animationDuration = `${Math.random() * 3 + 3}s`;
            heartPop.play();
            setTimeout(() => heart.remove(), 4000);
        }, i * 200);
    }
}

// Function to open the envelope and show the video
function openEnvelope() {
    // Hide the "Open the Envelope" button and show the video
    document.getElementById('open-envelope-btn').style.display = 'none';
    let video = document.getElementById('envelope');
    video.style.display = 'block'; // Show the video
    video.play(); // Play the video

    // Play the envelope sound
    document.getElementById('envelope-sound').play();

    // Set the playback speed to 0.25 (25% speed)
    video.playbackRate = 0.25;

    // Show the "Reveal" button after the video starts playing
    document.getElementById('reveal-btn').style.display = 'inline-block'; // Show the reveal button
}

// Reveal Stage 3 after video finishes
function revealStage3() {
    // Hide Stage 2 and show Stage 3
    document.getElementById('stage2').style.display = 'none';
    document.getElementById('stage3').style.display = 'block';
    
    // Ensure the letter text is shown when Stage 3 appears
    document.getElementById('letter-text').classList.remove('hidden');
    
    // Play the click sound to indicate transition
    document.getElementById('click-sound').play();
}

