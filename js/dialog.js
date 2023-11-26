var count = 0;
var dialog = [ "The Learn Section contains notes that carefully explain all the topics you need to build synchronous flip-flops, in addition to links for useful resources on the topic", "If you're rusty on things like logic gates and flip-flops, I recommend getting started with the Prerequisite Knowledge section to refresh your memory", "Otherwise, you can jump right into the Learn About Counters Section", "Also, just for fun, we have a special bonus section specifically on the Quine-McCluskey Algorithm", "Well, enough talking, let's jump right into it!"]
function next(){
    var text = document.getElementsByClassName("helper-text")[0];
    text.innerHTML = dialog[count] + '<button id="next" onclick="next();"><i class="fa-solid fa-arrow-right"></i></button>';
    count++;

    if (count > dialog.length) 
        disappear();
}