/*Functions for the helpers*/
function disappear()
{
    bottom = document.getElementById("bottom");
    
    if (bottom.style.display == "")
        bottom.style.display = "none";
    else
        bottom.style.display = "block";
}
