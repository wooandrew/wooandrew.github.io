var globalindex = 0;
carousel();

function carousel() {
    
    if(globalindex != undefined) {
        
        var i;
    
        var x = document.getElementsByClassName("images");
        var d = document.getElementsByClassName("ddots");

        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
            d[i].className = d[i].className.replace(" w3-grey", "");
        }

        globalindex++;

        if(globalindex > x.length) {globalindex = 1}

        x[globalindex - 1].style.display = "block";
        d[globalindex - 1].className += " w3-grey";

        setTimeout(carousel, 2500); // Change image every 2.5 seconds 
    }
}

function plusDivs(n) {
    showDivs(globalindex += n);
}

function currentDiv(n) {
    showDivs(globalindex = n);
}

function showDivs(n) {
    
    var i;
    
    var x = document.getElementsByClassName("images");
    var d = document.getElementsByClassName("ddots");
    
    if (n > x.length) {globalindex = 1}
    if (n < 1) {globalindex = x.length}
    
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        d[i].className = d[i].className.replace(" w3-grey", "");
    }
    
    x[globalindex-1].style.display = "block";  
    d[globalindex-1].className += " w3-grey";
}
