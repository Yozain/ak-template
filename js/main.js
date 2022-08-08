var math = document.querySelector(".about .contain .image-box img.abs");
var aboutSection = document.querySelector(".about");
var moveMath = function () {
    if (window.scrollY >= aboutSection.offsetTop - 100) {
        math.style.cssText = "animation-name: math";
        console.log("YeS");
    }
};
addEventListener("scroll", moveMath);
