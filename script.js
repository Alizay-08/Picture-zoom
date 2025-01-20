function zoomIn() {
    var img = document.getElementById("image");
    var currWidth = img.clientWidth;
    // img.style.width = (currWidth + 50) + "px";
    if (currWidth < 500) { 
        img.style.width = (currWidth + 50) + "px";
    } else {
        alert("Maximum zoom-in level reached.");
    }
}

function zoomOut() {
    var img = document.getElementById("image");
    var currWidth = img.clientWidth;
    // img.style.width = (currWidth - 50) + "px";
    if (currWidth > 50) { 
        img.style.width = (currWidth - 50) + "px";
    } else {
        alert("Maximum zoom-out level reached.");
    }
}