gsap.utils.toArray('.all-access-pass.aap-highlights').forEach(ele => {
    const aapTL = gsap.timeline({
        scrollTrigger: {
            trigger: ele.closest('.section'),
            start: 'top+=90vh top',
            end: 'bottom center',
            scrub: false,
            toggleActions: 'play reverse play reverse',
            markers: false
        },
        default: {
            duration: "500ms"
        }
    });
    const dupTL = gsap.timeline({
        scrollTrigger: {
            trigger: ele.closest('.section'),
            start: 'top+=90vh top',
            end: 'bottom center',
            scrub: false,
            toggleActions: 'play reverse play reverse',
            markers: false
        },
        default: {
            duration: "500ms"
        }
    });

    gsap.set(ele, {
        opacity: 0,
        transform: "matrix(1,0,0,1,0,0)"
    });
    gsap.set(ele.querySelector('.all-access-pass__background.links'), {
        opacity: 0,
        transform: "matrix(0.01,0,0,0.01,0,0)",
        height: "auto",
        width: 56
    });
    gsap.set(ele.querySelector('.all-access-pass__background.play-pause-button-wrapper'), {
        opacity: 0,
        transform: "matrix(0.01,0,0,0.01,0,0)",
        height: "auto",
        width: 56,
        position: "absolute"
    });

    aapTL.to(ele, {
        opacity: 1,
        transform: "matrix(1,0,0,1,0,0)",
        "--bg-scale": 1.3
    }).to(ele, {
        "--bg-scale": 0,
        duration: 0
    }).to(ele.querySelector('.all-access-pass__background.links'), {
        opacity: 1,
        width: 168,
        transform: "matrix(1,0,0,1,-35,0)"
    });

    dupTL.to(ele, {
        opacity: 1,
        transform: "matrix(1,0,0,1,0,0)",
        "--bg-scale": 1.3
    }).to(ele, {
        "--bg-scale": 0,
        duration: 0
    }).to(ele.querySelector('.all-access-pass__background.play-pause-button-wrapper'), {
        opacity: 1,
        transform: "matrix(1,0,0,1,147,0)"
    });
})


gsap.utils.toArray('.all-access-pass.single').forEach(element => {
    const backgroundElement = element.querySelector('.all-access-pass__background');
    const nearDiv = element.closest('.section') || element.closest('.sub-sections');
    const textContents = backgroundElement.querySelector('.aap-base')
    const eletl = gsap.timeline({
        scrollTrigger: {
            trigger: nearDiv || '.section, .sub-sections',
            start: 'top+=90vh top',
            end: 'bottom center',
            scrub: false,
            toggleActions: 'play reverse play reverse',
            markers: false
        },
        default: {
            duration: 0.5
        }
    });

    gsap.set(element, {
        opacity: 0,
        transform: "matrix(1,0,0,1,0,0)"
    });
    gsap.set(textContents, {
        opacity: 0
    });
    gsap.set(backgroundElement, {
        opacity: 0,
        transform: "matrix(0.01,0,0,0.01,0,0)",
        height: "auto",
        width: 56
    });

    eletl.to([element, backgroundElement], {
        opacity: 1,
        transform: "matrix(1,0,0,1,0,0)",
        height: 56,
        "--bg-scale": 1.3
    }).to([element, backgroundElement], {
        "--bg-scale": 0,
        width: 292
    }).to(textContents, {
        opacity: 1
    });
});

gsap.utils.toArray('.zoom-anim').forEach(ele => {
    // //(ele)
    const nearDiv = ele.closest('.grid-item') || ele;
    const eletl = gsap.timeline({
        scrollTrigger: {
            trigger: nearDiv,
            start: 'top bottom-=200px',
            end: 'bottom bottom',
            scrub: true,
            markers: false
        }
    });
    gsap.set(ele, {
        scale: 1.3,
        opacity: (ele.classList.contains('bright')) ? 1 : 0.3
    });
    eletl.to(ele, {
        scale: 1,
        opacity: 1
    });
});

gsap.utils.toArray('.header-text-anim').forEach(ele => {
    //(ele);
    const eleTl = gsap.timeline({
        scrollTrigger: {
            trigger: ele.closest('.section'),
            start: 'top center-=100',
            end: 'bottom bottom',
            scrub: false,
            markers: false,
            toggleActions: 'play none none reverse'
        }
    });
    gsap.set(ele, {
        y: 0,
        opacity: 1
    });
    eleTl.from(ele, {
        y: 25,
        opacity: 0
    });
});

gsap.utils.toArray('.flex-text-anim').forEach(ele => {
    //(ele)
    const eletl = gsap.timeline({
        scrollTrigger: {
            trigger: ele,
            start: 'bottom bottom',
            end: 'bottom top',
            scrub: false,
            markers: false,
            toggleActions: 'play none none reverse'
        }
    });

    gsap.set(ele, {
        y: 25,
        opacity: 0
    });

    eletl.to(ele, {
        y: 0,
        opacity: 1
    });
});

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

gsap.utils.toArray('.photo-item').forEach((ele, index) => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ele.closest('.photos-slider'),
            start: 'top center',
            end: 'bottom bottom',
            scrub: false,
            markers: false
        },
    });
    gsap.set(ele, {
        transform: `matrix(0.7,0,0,0.7,${index * -660}, 0)`,
        zIndex: 7 - index
    })
    tl.to(ele, {
        transform: `matrix(1,0,0,1,${index * -35}, 0)`,
        duration: 2
    });

    tl.eventCallback("onComplete",()=>{
        tl.kill();
    })
});

const saTl = gsap.timeline({
    scrollTrigger: {
        trigger: document.querySelector('#scale-anim-0').closest('section'),
        start: 'top center',
        markers: false
    }
});
gsap.set(document.querySelector('#scale-anim-0'),{
    opacity: 0,
    scale: 1.4
});

saTl.to(document.querySelector('#scale-anim-0'),{
    opacity: 1,
    scale: 1
});

saTl.eventCallback('onComplete',() => {saTl.kill()});

window.addEventListener('load',() => {
    console.log('working')
    gsap.fromTo([document.querySelector('.buy-link-div'),document.querySelector('.ribbon')],{
        opacity: 0,
        y: 25
    },{
        opacity: 1,
        y: 0
    });
});