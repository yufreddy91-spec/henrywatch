console.log("Henry Watch Loaded Successfully!");
function loadChat() {

const file=document.getElementById("chatFile").files[0];

if(!file){
alert("Select WhatsApp chat");
return;
}

const reader=new FileReader();

reader.onload=function(e){

const text=e.target.result;

const lines=text.split("\n");

const table=document.getElementById("watchTable");

table.innerHTML="";

lines.forEach(line=>{

if(line.includes("₹")){

const row=`
<tr>
<td>Dealer</td>
<td>${line.substring(0,40)}</td>
<td>${line.match(/₹[0-9,]+/) || ""}</td>
</tr>
`;

table.innerHTML+=row;

}

});

};

reader.readAsText(file);

}
