$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");

        }else{
            $('.navbar').removeClass("sticky");

        }
        if(this.scroll > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");

        }
    });

    // slide uo

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});

    });
    /*toggle*/
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");

    });

    //owl

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items:1,
                nav: false
            },
            600:{
                items:2,
                nav: false

            },
            1000:{
                items:3,
                nav: false

            }
        }

    })

    // typing animate
    var typed = new Typed(".typing", {
        strings: ["Full-stack Web Developer", "Front End Developer", "Web Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    var typed = new Typed(".typing-2", {
        strings: ["Full-stack Web Developer", "Front End Developer", "Web Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })
});

// Function to handle form submission
$(document).ready(function () {
    // Attach click event listener to each project card
    $(".carousel .card").on("click", function () {
        // Get the URL from the 'src' attribute of the image inside the card
        var projectURL = $(this).find("img").attr("src");

        // Open the link in a new tab
        window.open(projectURL, "_blank");
    });
});
