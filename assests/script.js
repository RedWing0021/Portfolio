window.onscroll=function(){
  scroll();
};

function scroll(){
  if(document.body.scrollTop>20|| document.documentElement.scrollTop >20){
    document.getElementById("header").style.top="0";

  }
  else{
    document.getElementById("header").style.top="-60px";
  }
}

const text= document.querySelector("typed-items");
const textload=()=>{
  setTimeout(()=>{
    text.textContent="DEVELOPER";
  },0);
  setTimeout(()=>{
    text.textContent="DESIGNER";
  },4000);
  setTimeout(()=>{
    text.textContent="SHUTTERBUG";
  },8000);
}
textload();
setInterval(textload,12000)
