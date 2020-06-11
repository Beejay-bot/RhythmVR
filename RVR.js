function newtext()
{
    document.getElementById("brand_name").innerHTML = "Welcome"
    document.getElementById("brand_name").style.color = "blue"
}

function oldtext()
{
    document.getElementById("brand_name").innerHTML = "RhythmVR"
    document.getElementById("brand_name").style.color = "blanchedalmond"
}


let new_word =() => {
    document.getElementById("Vr").innerHTML = "Coming soon!!!"
    document.getElementById("Vr").style.color = "red"
}

let old_word = () => {
    document.getElementById("Vr").innerHTML = "RhythmVR"
    document.getElementById("Vr").style.color = "whitesmoke"
}

function zoomIn()
{
    var GFG =  document.getElementById("btn")
    var currHeight = GFG.clientHeight;
    GFG.style.Height= (currHeight + 100) + 'px';
}

function zoomOut()
{
    var GFG =  document.getElementById("btn")
    var currHeight = GFG.clientHeight;
    GFG.style.Height = (currHeight - 100 ) + "px";
}