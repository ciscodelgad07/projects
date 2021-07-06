var menuView = $(".menu");
var designView = $(".designs");
var designBtn = $("#designBtn")
var cmProjectBtn = $("#cmProjectBtn")
var resumeView = $(".resume");
var resumeBtn = $("#resumeBtn");

designView.css({"display": "none"});


designBtn.click(function() {
    window.location.href = "./pages/designs.html";
});

resumeBtn.click(function() {
    window.location.href = "./pages/resume.html";
});