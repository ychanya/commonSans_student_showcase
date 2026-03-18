export function gsapAnimation() {

    gsap.registerPlugin(ScrollTrigger);

    /******************** Event Information Section ********************/
    let eventInfoTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".eventInformation",
            start: "top +=60%",
            end: "bottom",
            // markers: true
        }
    })

    eventInfoTl.from("#eventInfo",{
        duration: 0.5,
        autoAlpha: 0,
        y:-100,
        ease: "back.out"
    })

    eventInfoTl.from("#videoContainer",{
        duration: 1, 
        x: -50,
        autoAlpha: 0,
        ease: "power4.out"
    })

    eventInfoTl.from("#eventContent",{
        duration: 0.5, 
        x: 50,
        autoAlpha: 0,
        ease: "power4.out"
    })

    /******************** Event Details Section ********************/

    let eventDetailTl = gsap.timeline({
        scrollTrigger: {
            trigger: "#eventDetailSect",
            start: "top +=60%",
            end: "bottom",
            // markers: true
        }
    });

    eventDetailTl.from("#eventDetail",{
        duration: 0.5,
        autoAlpha: 0,
        y:-100,
        ease: "back.out"
    })

    eventDetailTl.from(".box",{
        duration: 0.5,
        autoAlpha: 0,
        scale: 0.5,
        ease: "elastic.out(1, 0.5)",
        stagger: 0.3
    })

    /******************** IDP Section ********************/
    let idpTl = gsap.timeline({
        scrollTrigger: {
            trigger: "#interactiveMediaDesign",
            start: "top +=60%",
            end: "bottom",
            // markers: true
        }
    })

    idpTl.from("#idpHeading",{
        duration: 0.5,
        autoAlpha: 0,
        y:-100,
        ease: "back.out"
    })

    idpTl.from("#idpImg",{
        duration: 0.5, 
        x: 100,
        autoAlpha: 0,
        ease: "power4.out"
    })

    idpTl.from("#idpContent",{
        duration: 1, 
        x: -100,
        autoAlpha: 0,
        ease: "power4.out"
    })

    idpTl.from(".IMDSmallImg",{
        autoAlpha: 0,
        scale: 0.5,
        stagger: 0.5
    })

    /******************** Our Team Section ********************/
    
    gsap.from(".OTImg",{
        scrollTrigger: {
            trigger: "#ourTeam",     
            start: "top +=50%",
            // markers: true
        },
        duration: 1,
        autoAlpha: 0,
        scale: 0,
        ease: "power4.out",
        stagger: 0
    })
}