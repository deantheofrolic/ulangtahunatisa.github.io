const presentLid = document.querySelector(".present-lid");
const birthdayText = document.querySelector(".birthday-text");
const clickText = document.querySelector(".click-text")

function openLid() {
	clickText.remove()
	presentLid.style.top = "-100px";
	presentLid.style.transform = "rotateZ(10deg)";
	presentLid.style.left = "10px";
	birthdayText.style.top = "-80px"

	setTimeout(function() {
		window.location.href = "main.html"
	}, 2000);
}