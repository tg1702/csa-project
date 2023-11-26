      /*Functions for the accordion list on the Learn page*/

/*Allows user to toggle the links on the page */
function showList(divClass){
    var element = document.querySelectorAll("."+divClass);
 
    for (let i=0; i < element.length; i++){
       
    if (element[i].className.indexOf("accordian") != -1  )
        element[i].className = element[i].className.replace('accordian', '');
    else
        element[i].className += " accordian";
        
    }
    
}
        /*Shows and hides sub-menu items when the main header is clicked*/
function showMainItems(divClass){
    var element = document.querySelectorAll("."+divClass);

    hide = false;

    for( let i=0; i< element.length; i++){
        if (element[i].className.indexOf("accordian") == -1){ hide = true;}
    }

    if (hide == true){
        for (let i=0; i < element.length; i++){
            element[i].className += " accordian";
        }
    }
    else{
        showList(divClass);
    }
}