
console.log("enter js");
// <!-- hover的提示框 -->
var oDiv2 = document.getElementById("div2");

var oBtn1 = document.getElementById("sure");
var oBtn2 = document.getElementById("cancel");
var oBtn3 = document.getElementById("change");

var oCheckbox = document.getElementById("checkboxs");
var och = oCheckbox.getElementsByTagName("input");
oBtn1.onclick = function()
{
  for(var i=0;i<och.length;i++)
  {
      och[i].checked = true;
  }

}

oBtn2.onclick = function()
{
  for(var i=0;i<och.length;i++)
  {
    och[i].checked = false;
  }
}

oBtn3.onclick = function()
{
  for(var i = 0; i < och.length; i++)
  {
    if(och[i].checked)och[i].checked = false;
    else och[i].checked = true;
  }
}

  // <!-- hover的提示框 -->
  function invisible()
  {
    document.getElementById('tip').style.display = 'none'
  }

  function visible()
  {
    document.getElementById('tip').style.display = 'block'
  }
  console.log("out js");
