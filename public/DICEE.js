let attempts = 0;
function fun1() {
      let a=Math.floor(Math.random()*6+1);
      let b=Math.floor(Math.random()*6+1);

      let img1 = "/images/DICEE/"+a+".png";

      let img2 = "/images/DICEE/"+b+".png";

      let heading=document.getElementById("change");

      document.getElementById("i1").setAttribute("src",img1);
      document.getElementById("i2").setAttribute("src",img2);

      if(a>b)
      {
        attempts ++;
        heading.innerHTML="You Win,";
      }
      else if(a<b)
      {
        heading.innerHTML="You Loose, Streak = " + attempts;
        document.getElementById("dicescore").textContent = "DICEE -- " + attempts;
        attempts = 0;
      }
      else{
        heading.innerHTML="Draw";

      }
}


function fun2() {
      let a=Math.floor(Math.random()*6+1);
      let b=Math.floor(Math.random()*6+1);

      let img1 = "/images/DICEE/"+a+".png";

      let img2 = "/images/DICEE/"+b+".png";

      let heading=document.getElementById("change");

      document.getElementById("i1").setAttribute("src",img1);
      document.getElementById("i2").setAttribute("src",img2);

      if(a>b)
      {
        heading.innerHTML="You Loose, Streak = " + attempts;
        document.getElementById("dicescore").textContent = "DICEE -- " + attempts;
        attempts = 0;
      }
      else if(a<b)
      {
        heading.innerHTML="You Win";
        attempts ++;
      }
      else{
        heading.innerHTML="Draw";

      }
}

document.getElementById("btn1").addEventListener("click",fun1);
document.getElementById("btn2").addEventListener("click",fun2);
