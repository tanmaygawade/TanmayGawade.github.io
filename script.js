$(document).ready(function () {

    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $(".navbar").addClass("sticky");
        }
        else {
            $(".navbar").removeClass("sticky");
        }


    });

    $(".menu-btn").click(function () {
        $(".navbar .menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    });


});

var typed = new Typed(".re-typing", {
    strings: ["Backend Developer", "Problem Solver", "Continous Learner"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
});
var typed = new Typed(".re-typing-2", {
    strings: ["Backend Developer", "Problem Solver", "Continous Learner"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
});

GitHubCalendar(".calendar", "tanmaygawade");

// or enable responsive functionality:
GitHubCalendar(".calendar", "tanmaygawade", { responsive: true });

// Use a proxy
GitHubCalendar(".calendar", "tanmaygawade", {
    proxy(username) {
        return fetch(`https://your-proxy.com/github?user=${tanmaygawade}`)
    }
}).then(r => r.text())