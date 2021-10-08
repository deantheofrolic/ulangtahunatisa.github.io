// Delay 8 seconds, then load main page
$(window).on("load", function(){
     $(".loader-container").delay(8000).fadeOut("slow");
});

// Open form with button
function openForm() {
     window.open("https://forms.gle/bisaMZHAJGX3Q7Py7", "_blank")
}
