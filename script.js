
var count=0;
   var i=0;
function next(){

   fetch('./data.json')
   .then(function(response){
       return response.json();
   })
   .then(function(data)
{
  window.data_length=data.length;
if(i<=count){
    
   var p=document.createElement("p")
   p.innerHTML=`
            <table>
               <thead>
               <tr ><th rowspan="3" id="first">${count=count+1}</th></tr>
               <tr ><th colspan="5" id="second">Name:${data[i].name}</th></tr>
               <tr ><th colspan="5" id='third'>Location:${data[i].location}</th></tr>
               </thead>
               </table>
      
   
   `

   document.getElementById('cls').appendChild(p)
   i++

           }

   });

 if(count<data_length) {     
    document.getElementById("end").innerHTML=`CURRENTLY ${count+1} PEOPLE  SHOWING`
 }
 else{
   alert("No more people!")
 }
}

           
