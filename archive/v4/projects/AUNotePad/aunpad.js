function test() {
    alert("Hello World!");
}

var playclass = "N/A";

function reset() {

    playclass = "N/A";

    close();
}

function new_game() {

    document.getElementById("popup").style.display = "flex";
}

function close_form() {

    document.getElementById("popup").style.display = "none";
}
