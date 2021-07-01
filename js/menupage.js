var menuView = $(".menu");
var designView = $(".designs");
var designBtn = $("#Designs")
var cmProjectBtn = $("#cmProjectBtn")
var resumeView = $(".resume");
var resumeBtn = $("#Resume");

designView.css({"display": "none"});


designBtn.click(function() {
    design();
});

resumeBtn.click(function() {
    resume();
});

cmProjectBtn.click(function() {
    cmProjectView();
});

function design() {
    menuView.css({"display": "none"});
    designView.css({"display": "inherit"});
}

function resume() {
    menuView.css({"display": "none"});
    resumeView.css({"display": "inherit"});
}

function cmProjectView() {
    designView.css({"display": "none"});
}

$("#Designs").click(function() {
    window.location.href = "./pages/designs.html";
})