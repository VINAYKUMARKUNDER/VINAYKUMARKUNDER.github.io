$(window).on("load", function () {
    $(".preloader").fadeOut("slow");
});

/*------------------------Navbar Shrink------------------*/
$(window).on("scroll", function () {
    if ($(this).scrollTop() > 90) {
        $(".navbar").addClass("navbar-shrink");
    } else {
        $(".navbar").removeClass("navbar-shrink");
    }
});

/*-------------------------Page Scrollibg - ScrollIt------------------------*/
$.scrollIt({
    topOffset: -50,
});

/*--------------------------Navbar Collapse---------------------------------*/
$(".nav-link").on("click", function () {
    $(".navbar-collapse").collapse("hide");
});

/*--------------------Toggle Theme - light and dark theme--------------------*/
function toggleTheme() {
    if (localStorage.getItem("sketch-theme") !== null) {
        if (localStorage.getItem("sketch-theme") === "dark") {
            $("body").addClass("dark");
        } else {
            $("body").removeClass("dark");
        }
    }
    updateIcon();
}
toggleTheme();
$(".toggle-theme").on("click", function () {
    $("body").toggleClass("dark");
    if ($("body").hasClass("dark")) {
        localStorage.setItem("sketch-theme", "dark");
    } else {
        localStorage.setItem("sketch-theme", "light");
    }
    updateIcon();
});
function updateIcon() {
    if ($("body").hasClass("dark")) {
        $(".toggle-theme i").removeClass("bx-moon");
        $(".toggle-theme i").addClass("bx-sun");
    } else {
        $(".toggle-theme i").removeClass("bx-sun");
        $(".toggle-theme i").addClass("bx-moon");
    }
}

/*--------------------------Github Calender-----------------------*/
GitHubCalendar(".calendar", "VINAYKUMARKUNDER", { responsive: true });

/*--------------------------Contact Form-----------------------*/
$("#email_form").submit((e) => {
    $("#submit").prop("disabled", true);

    let data = {
        name: $("#name").val(),
        email: $("#email").val(),
        message: $("#message").val(),
        _captcha: false,
        _next: "",
    };
    if ($("#subject").val()) data.subject = $("#subject").val();

    submitForm(data);
    e.preventDefault();
});

const submitForm = (data) => {
    $.ajax({
        method: "POST",
        url: "https://formsubmit.co/vinay30001111@gmail.com",
        // dataType: "json",
        accepts: "application/json",
        data: data,
    })
        .done(function (data) {
            $("#popup-message").html(
                "Thank you for taking the time to contact me.<br> I appreciate your interest and I will get back to you as soon as possible."
            );
            $("#popupModal").modal("show");
            $("#email_form").trigger("reset");
        })
        .fail(() => {
            $("#popup-message").html(
                "Something went you wrong..!<br>Please try again."
            );
            $("#popupModal").modal("show");
        })
        .always(() => {
            $("#submit").prop("disabled", false);
        });
};







$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('java').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('java').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('java').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: [ "Developer", "Backend Developer" ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: [ "Developer", "Backend Developer" ],
        typeSpeed: 120,
        backSpeed: 70,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});


function DownloadFile(fileName) {
    //Set the File URL.
    var url = "Files/" + fileName;

    //Create XMLHTTP Request.
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.responseType = "blob";
    req.onload = function () {
        //Convert the Byte Data to BLOB object.
        var blob = new Blob([req.response], { type: "application/octetstream" });

        //Check the Browser type and download the File.
        var isIE = false || !!document.documentMode;
        if (isIE) {
            window.navigator.msSaveBlob(blob, fileName);
        } else {
            var url = window.URL || window.webkitURL;
            link = url.createObjectURL(blob);
            var a = document.createElement("a");
            a.setAttribute("download", fileName);
            a.setAttribute("href", link);
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    };
    req.send();
};



