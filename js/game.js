let timer = null;
const max=4;
let count=0
function init() {
  if (timer == null) {
    start = new Date();
    time();
    gameStart();
  }
}

function gameStart() {
  let size=5;
  let qNum=Math.floor(Math.random()*q.length);

  for(let i=0;i<size*size;i++){
    let s=document.createElement("span");
    s.textContent=q[qNum][0];
    s.setAttribute("id","num"+i);
    s.addEventListener('click',function(){
      if(this.textContent==q[qNum][1]){
        //alert("ok");
        correct.play();
        count=count+1
        while(cells.firstChild){
          cells.removeChild(cells.lastChild)
        }
        gameStart();
        if(count==max){
          alert("game clear!");
          while(cells.firstChild){
            cells.removeChild(cells.lastChild)
          }
          clearTimeout(timer);
          timer=null;
          count=0;
        }
      }else{
        //alert("fuck");
        wrong.play();
      }
    })
    cells.appendChild(s);
    if(i%size==size-1){
      const br=document.createElement("br");
      cells.appendChild(br);
    }
  }
  let p=Math.floor(Math.random()*size*size);
  let ans=document.getElementById("num"+p);
  ans.textContent=q[qNum][1];
}

function time() {
    let now=new Date();
    let etime=parseInt((now.getTime()-start.getTime())/1000);
    score.textContent=etime;
    timer=setTimeout("time()",1000);
}
