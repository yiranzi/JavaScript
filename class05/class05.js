console.log("hellow")
//给按钮添加上事件
var buttons = document.getElementsByTagName("input");
var docBox = document.getElementsByTagName("div");

function reColor()
{
  for(var i=0;i<buttons.length;i++)
  {
    buttons[i].style.backgroundColor = "";
    docBox[i].style.display="none";
  }
}

for (var i=0;i<buttons.length;i++)
{

    buttons[i].onmouseover = function(){
        reColor();
        this.style.backgroundColor = "red";
        docBox[this.index].style.display="block";
    }
    buttons[i].onmouseout = function(){
        //this.style.backgroundColor = "";
        //docBox[this.index].style.display="none";
    }
    if(i==0)
    {
      docBox[i].style.display="block";
      buttons[i].style.backgroundColor="red";
    }
    else
    {
      docBox[i].style.display="none";
    }

    buttons[i].index = i;
    docBox[i].index = i;
  }
//当滑动上去的时候.

//当离开的时候.

//重置所有的样式.

//改变这个的颜色.
function TurnRed(color){
  console.log(this.style)
  this.style.backgroundColor = color;
}
//改变div的显隐性关系?
console.log("exit");
