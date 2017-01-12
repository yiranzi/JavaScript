
console.log("enter");
var button_ = document.getElementsByTagName("input")
console.log(button_);
var divtest = document.getElementById("test1")
console.log(divtest);
addclick(button_);
function huanfu()
{
  console.log(this);
  if(this.value == "green")
  {
    console.log(divtest);
    console.log(divtest.style);
    divtest.style.backgroundColor="green";
    console.log(divtest.style.backgroundColor);

  }
  else if(this.value =="red")divtest.style.backgroundColor="red";
  else if(this.value =="blue")divtest.style.backgroundColor="blue";
}

function addclick(button_)
{
  console.log("addclick");

  for(var i =0;i<button_.length;i++)
  {
    button_[i].onclick = huanfu;
  }
}
console.log("finish");
