$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }
        else {
            $('.navbar').removeClass("sticky");
        }

        if (this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }
        else {
            $('.scroll-up-btn').removeClass("show");
        }

    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0})

    })

        $('.menu-btn').click(function(){
            $('.navbar .menu').toggleClass("active");
            $('.menu-btn i').toggleClass("active");
        });

        var typed=new Typed (".typing", {
            strings: ["Developer", "Freelancer", "Designer"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });

        var typed=new Typed (".typing-2", {
            strings: ["Developer", "Freelancer", "Designer"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });

        $('.skill-per').each(function(){
            $(this).animate({
                width: $(this).attr('data-per')
            })
        });

});


