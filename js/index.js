var items = document.querySelectorAll(".item");

items.forEach((item) => {
    var title = item.querySelector(".item__title");
    var outline = item.querySelector(".item__titleOutline");
    var img = item.querySelector(".item img");

    var itemTL = gsap.timeline({
        scrollTrigger: {
            trigger: item,
            start: " 0% 75%",
            end: "25% 50%",
            scrub: 3,
        },
    });
    itemTL.fromTo(title,  {scale: 2, y: "100%"}, {scale: 1, y: "0%", ease: "power2.inOut"}, 0)
    itemTL.fromTo(outline,  {scale: 2, y: "100%"}, {scale: 1, y: "0%", ease: "power2.inOut"}, 0)

    gsap.fromTo(img,{x: "60vw", y : "60vh", rotate: -30}, {x: "-60vw", y: "-60vh", rotate: 30, ease: "none", scrollTrigger: {
        trigger: item,
        start: " 50% 100%",
        end: "100% 50%",
        scrub: 3,
    }})
});