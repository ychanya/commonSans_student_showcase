export function heroAnimation() {
    // This function is super helpful for handling responsiveness
    let mm = gsap.matchMedia();

    mm.add("(max-width: 1199px)", ()=> {
        const canvas = document.querySelector("#hero-animation-mb");
        const context = canvas.getContext("2d");

        canvas.width = 1080;
        canvas.height = 1920;

        const frameCount = 252;

        const images = [];

        const sequences = {
            frame: 0
        }

        for (let i=0; i<frameCount; i++) {
            const img = new Image();
            img.src = `images/hero-animation/hero-sm/hero-sm_${i}.webp`;
            images.push(img);
        }

        gsap.to(sequences, {
            frame: 251,
            snap: "frame",
            scrollTrigger: {
                trigger: "#hero-animation-mb",
                pin: true, 
                scrub: 4,
                start: "top +=10%",
                // markers: true
            },
            onUpdate: drawFrame
        })

        images[0].addEventListener("load", drawFrame);

        function drawFrame() {
            context.clearRect(0,0, canvas.width, canvas.height);
            context.drawImage(images[sequences.frame], 0, 0);
        }
    })

    mm.add("(min-width: 1200px)", ()=> {
        const canvas = document.querySelector("#hero-animation-dk");
        const context = canvas.getContext("2d");

        canvas.width = 1920;
        canvas.height = 1080;

        const frameCount = 252;

        const images = [];

        const sequences = {
            frame: 0
        }

        for (let i=0; i<frameCount; i++) {
            const img = new Image();
            img.src = `images/hero-animation/hero-lg/hero-lg_${i}.webp`;
            images.push(img);
        }

        gsap.to(sequences, {
            frame: 251,
            snap: "frame",
            scrollTrigger: {
                trigger: "#hero-animation-dk",
                pin: true, 
                scrub: 4,
                start: "top +=10%",
                // markers: true
            },
            onUpdate: drawFrame
        })

        images[0].addEventListener("load", drawFrame);

        function drawFrame() {
            context.clearRect(0,0, canvas.width, canvas.height);
            context.drawImage(images[sequences.frame], 0, 0);
        }
    })
}
