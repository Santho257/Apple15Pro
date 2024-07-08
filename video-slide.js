const videoArray = ['video1', 'video2', 'video3', 'video4'];
const captionArray = ['Enter A17 Pro.<br>Game‑changing chip. Groundbreaking performance.', 'Titanium.<br>So strong. So light. So Pro.', 'iPhone&nbsp;15&nbsp;Pro&nbsp;Max has the longest optical zoom in iPhone&nbsp;ever. Far out.', 'All-new Action button.<br>What will yours do?'];

const videoContainer = document.querySelector('#media-gallery-item-1');
const video = videoContainer.querySelector('.media');
const para = videoContainer.querySelector('.video-caption');
const dotNav = document.querySelector('.dotnav-items');
const listItem = dotNav.querySelectorAll('li');
const buttonState = document.querySelector('#button-state');

let currentIndex = 0;
document.querySelector('#ppr-button').addEventListener('click', () => {
    if (buttonState.classList.contains('playing')) {
        buttonState.classList.remove('playing');
        buttonState.classList.add('paused');
        video.pause();
    }
    else if (buttonState.classList.contains('paused')) {
        buttonState.classList.remove('paused');
        buttonState.classList.add('playing');
        video.play();
    }
    else if (buttonState.classList.contains('ended')) {
        buttonState.classList.remove('ended');
        buttonState.classList.add('playing');
        
        listItem[currentIndex - 1].classList.remove('current');
        listItem[currentIndex - 1].querySelector('a').classList.remove('current');

        currentIndex = 0;
        video.src = `/assets/${videoArray[currentIndex]}.mp4`;
        para.innerHTML = captionArray[currentIndex];

        listItem[currentIndex].classList.add('current');
        listItem[currentIndex].querySelector('a').classList.add('current');
    }
})
const endAnimation = () => {
    buttonState.classList.remove('playing');
    buttonState.classList.add('ended');
}

const nextVideo = (index) => {
    if(index == currentIndex)   return;
    if (index == null)
        currentIndex++;
    else
        currentIndex = index;
    if (currentIndex >= videoArray.length) {
        endAnimation();
        return;
    }
    for (li of listItem) {
        li.classList.remove('current');
        li.querySelector('a').classList.remove('current');
    }
    listItem[currentIndex].classList.add('current');
    listItem[currentIndex].querySelector('a').classList.add('current');

    buttonState.classList.remove('ended');
    buttonState.classList.remove('paused');
    buttonState.classList.add('playing');

    video.src = `/assets/${videoArray[currentIndex]}.mp4`;
    para.innerHTML = captionArray[currentIndex];
    gsap.from(videoContainer, {
        x: "100%",
    })
}

listItem.forEach((ele, index) => {
    ele.addEventListener('click', () => {
        nextVideo(index);
    })
})

video.addEventListener('ended', () => {
    nextVideo();
})
//console.log(listItem);