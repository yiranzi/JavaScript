console.log("enter");

var div = document.getElementById("testdiv");
console.log(div);
var buttonvisi = document.getElementById("button_visi")
console.log(buttonvisi);
var link = document.getElementsByTagName("link");
console.log(link);
function huanfu()
{


  if(buttonvisi.value == "隐藏")
  {
    buttonvisi.value = "显示"
    div.style.display = "none";
    buttonvisi.className = "myborder"
    console.log(buttonvisi.onclick)
  }
  else if(buttonvisi.value == "显示")
  {
    buttonvisi.value = "隐藏"
    buttonvisi.className = "none"
    div.style.display = "block";
  }
}

function skin1()
{
	console.log("skin1")
	// document.getElementById()

	link[0].href="pifu1.css";
	document.getElementsByTagName("input")[0].value = "red";
	document.getElementsByTagName("input")[0].title="hello me2"
}


function skin2()
{
	console.log("skin2");
	link[0].href="pifu2.css";
	document.getElementsByTagName("input")[1].value = "green";
}
console.log("finish");
