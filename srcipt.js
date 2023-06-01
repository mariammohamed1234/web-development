
var neededCount = 4;
var count = 0;

function checkBox(checkValue){
   if(checkValue == true){
     count = count +1;
   }
   else if(checkValue == false){
     count = count -1;
   }
  console.log(count);

  if(count == neededCount){
    document.getElementById("success").style.display="block";
  }
  else{
    document.getElementById("success").style.display = "none";
  }
}