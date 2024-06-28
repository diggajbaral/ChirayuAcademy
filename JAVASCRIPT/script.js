let menuList = document.getElementById("menuList")
menuList.style.maxHeight = "0px"

function toggleMenu(){
    if(menuList.style.maxHeight == "0px")
    {
        if(menuList.style.maxHeight = "500px");
    }
else{
    if(menuList.style.maxHeight = "0px");
}
}

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
    });
});
