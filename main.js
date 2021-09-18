const parallax = document.getElementById("parallax");

window.addEventListener("scroll", function ()
{
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionX = offset * 0.05 + "px";
    parallax.style.backgroundPositionY = offset * -0.1 + "px";
})

