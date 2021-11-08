var isClicked = false;
console.log("Scripts successfully loaded");
console.log(isClicked);
$("#chatBox").removeClass("chatBoxIn");
$("#chatBox").removeClass("chatBoxOut");

function chatBox(){
    console.log("Clicked!");
    if (isClicked == false){
    $("#chatBox").removeClass("chatBoxOut");
    $("#chatBox").addClass("chatBoxIn");
    isClicked = true;}
    else if (isClicked == true){
    $("#chatBox").removeClass("chatBoxIn");
    $("#chatBox").addClass("chatBoxOut");
    isClicked = false;};
};