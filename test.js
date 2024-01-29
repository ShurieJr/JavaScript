
function test(){
    const h =  document.getElementById("demo");
    const msg = document.getElementById("msg");
   h.style.color= "blue";

    alert("test click button!");
    msg.innerHTML="";
    msg.appendChild(document.createTextNode(`welcome to somalia `));
    msg.appendChild(document.createTextNode(`Mogadishu`));
    msg.style.color="brown";
    msg.style.fontFamily="cursive";
  
}