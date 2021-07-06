function disclaimer() {
	var warningMsg = document.getElementById("warningMsg");
	var acknowledge = document.getElementById("acknowledgeMsg");
	var multifactor = document.getElementById("MFA");
	var disclaimerTitle = document.getElementById("disclaimer");
	if (warningMsg.style.display === "block") {
		warningMsg.style.display = "none";
		acknowledge.style.display = "none";
		disclaimerTitle.classList.remove("arrow-up");
		disclaimerTitle.classList.add("arrow-down");
    }
    
	else {
		warningMsg.style.display = "block";
		acknowledge.style.display = "block";
		disclaimerTitle.classList.remove("arrow-down");
		disclaimerTitle.classList.add("arrow-up");
	}
}
