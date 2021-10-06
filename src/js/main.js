// Delay 8 seconds, then load main page
$(window).on("load", function(){
     $(".loader-container").fadeOut("slow");
});

// Open form with button
function openForm() {
     window.open("https://forms.gle/bisaMZHAJGX3Q7Py7", "_blank")
}
