const actionArea = document.querySelector("#action-area").closest('section');
const actionHeader = actionArea.querySelector('.subsection-headline');
const paraContent = actionArea.querySelector('.flex-text');
const actionList = actionArea.querySelector('#act-but-list');
const phoneWrapper = actionArea.querySelector('.phone-wrapper');


//(actionHeader)
const aaTl = gsap.timeline({
    scrollTrigger: {
        trigger: actionArea,
        start: 'top top',
        end: '100vh top',
        scrub: true,
        markers: false
    },
    defaults: {
        duration: 3
    }
});
gsap.set(actionList, {
    opacity: 0
})
gsap.set([actionHeader,paraContent],{
    y: '200vh'
});
aaTl.to([actionHeader,paraContent],{
    y: 0
});

aaTl.eventCallback("onComplete",()=>{
    aaTl.kill();
    const actVid = actionArea.querySelector('#action-button-video');
    actVid.play();
    actVid.addEventListener('ended',()=>{
        gsap.to(actionList,{
            opacity: 1
        });
        phoneWrapper.style.display = "block";
    });
});