var oTxt1 = document.getElementById('txt1');
var oTxt2 = document.getElementById("txt2");
var oBtn1 = document.getElementById("btn1");
var ourDecimal = 5.7;
var a = parseInt(ourDecimal);
console.log("result:" + a);
oBtn1.onclick = function()
{
  console.log("test:"+typeof(ABC));
    console.log("test2:"+CDE);
  pt(oTxt1);
  pt(oTxt2.value);
  var iA = parseInt(oTxt1.value);
  var iB = parseInt(oTxt2.value);
  if(isNaN(iA))
  {
    alert("1 NaN change!")
  }

else if(isNaN(iB))
  {
    alert("2 NaN change!")
  }
  else
  {
      p( iA + iB );
  }

}

function p(a)
{
  console.log(a);
}


function pt(a)
{
  console.log(typeof(a));
}
