const parallax = document.getElementById ("parallax");

window.addEventListener("scroll", function ()
{
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * -1.5 + "px";
})

const hello = document.getElementById ("hello");