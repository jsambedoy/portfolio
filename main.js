const parallax = document.getElementById("parallax");

window.addEventListener("scroll", function ()
{
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * -0.2 + "px";
})

const parallax_2 = document.getElementById("parallax_2");

window.addEventListener("scroll", function ()
{
    let offset = window.pageYOffset;
    parallax_2.style.backgroundPositionY = offset * -5 + "px";
})