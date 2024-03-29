//your JS code here. If required.
function updatePragraph(){
	var StatusParagraph=document.getElementById("status");
	StatusParagraph.innerHTML="<h1>Entered Metaverse</h1>";
}
//Adding EventListner......
document.getElementById("enterBtn").addEventListener("click",updatePragraph);