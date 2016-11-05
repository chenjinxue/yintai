// window.onload=function(){
   // var bans=$(".banner")[0];
   // var banner=$(".banner-img");
   // var lis=$(".lis");
   // var t=setInterval(move,1000)
   // // var n=0;

   // // 自动轮播
   // function move(){
   //  n++;
   //  if(n>=banner.length){
   //    n=0
   //  }
   //   for(var i=0;i<banner.length; i++){
   //       lis[i].style.background="#fff";
   //       banner[i].style.display="none";
   //    } banner[n].style.display="block";
   //     lis[n].style.background="blue";
   // }
 

 // 鼠标点上
 // bans.onmouseover=function(){
 //    clearInterval(t)
 // }
 // bans.onmouseout=function(){
 //    t=setInterval(move,2000)
 // }


//左右手
 // 1 元素获取 大框  图片 圆 左右手
nodelunbo(".q1",".w1",".e1",".r1",".r2")
nodelunbo(".q2",".w2",".e2",".r3",".r4")
nodelunbo(".q3",".w3",".e3",".r5",".r6")
nodelunbo(".q4",".w4",".e4",".r7",".r8")
nodelunbo(".q5",".w5",".e5",".r9",".r10")
nodelunbo(".q6",".w6",".e6",".r11",".r12")
// nodelunbo(".banner",".one",".bb",".bl",".br")
 function nodelunbo(obj,imgs,lis,left,right){
  var bans=$(obj)[0];
  var banner=$(imgs);
  var los=$(lis);
  var left=$(left)[0];
  var right=$(right)[0];
  var w=parseInt(getStyle(bans,"width"));
  var n=0;
  var next=0;
  var t=setInterval(moveimg,2000)
  var flag=true;
  function moveimg(){
     if(!flag){
       return;
     }
     flag=false;
      next=n+1;
      if(next==banner.length){
        next=0;
      }
      banner[next].style.left=w+"px";
      animate(banner[n],{left:-w},600);
      animate(banner[next],{left:0},600,function(){flag=true});
      for(var i=0;i<lis.length;i++){
          los[n].style.background="#fff";
      }
          los[next].style.background="#ccc";

            n=next;
   }

   
   
   bans.onmouseover=function(){
    clearInterval(t);
   }
   bans.onmouseout=function(){
    t=setInterval(moveimg,2000)
   }

   // 左右按钮
   
   right.onclick=function(){ 
     
     moveimg();
   }
   left.onclick=function(){
    
      moveimgL();
   }
    function moveimgL(){
      if(!flag){
       return;
     }
     flag=false;
      next=n-1;
      if(next<0){
        next=banner.length-1;
      }
      banner[next].style.left=-w+"px";
      animate(banner[n],{left:w},600);
      animate(banner[next],{left:0},600,function(){flag=true});
      for(var i=0;i<lis.length;i++){
          los[n].style.background="#fff";
      }
          los[next].style.background="#ccc";

            n=next;
   }
    


  
  // 移图 

  for(var i=0;i<banner.length;i++){
      los[i].index=i;
      los[i].onclick=function(){
        if(!flag){
         return;
        }
        flag=false;
        if(this.index>n){
           banner[this.index].style.left=w+"px";
           animate(banner[n],{left:-w},600);
           animate(banner[this.index],{left:0},600,function(){flag=true});
           for(var i=0;i<lis.length;i++){
           los[n].style.background="#fff";
           }
          los[this.index].style.background="#ccc";
        }else if(this.index<n){
           banner[this.index].style.left=-w+"px";
           animate(banner[n],{left:w},600);
           animate(banner[this.index],{left:0},600,function(){flag=true});
            for(var i=0;i<lis.length;i++){
            los[n].style.background="#fff";
            }
            los[this.index].style.background="#ccc";
        }
        n=this.index;
        next=this.index;

      }
  }


  var broswerH = document.documentElement.clientHeight; 
  var floors = $(".floor"); 
  var flis = $("li",$("#guding"));
  var cebian = $("#guding");

  // 侧边当前显示
  var cbnow ;
  window.onscroll=function(){
    var obj = document.body.scrollTop?document.body:document.documentElement;
    // 内部元素超出窗口的距离
    var top=obj.scrollTop;
    var arr=[];
    for(var i=0;i<floors.length;i++){
      // 获取楼层据浏览器上不的距离
      arr.push(floors[i].offsetTop);    
    }
    for(var i=0;i<flis.length;i++){
      flis[i].index=i;
      flis[i].onclick=function(){
        if(this.index==flis.length-1){
          animate(obj,{scrollTop:0},200);
        }
        animate(obj,{scrollTop:arr[this.index]-50},200);
      }
      flis[i].onmouseover=function(){
        this.className="active";
      }
      flis[i].onmouseout=function(){
        if(cbnow==this.index){
          return;
        }
        this.className="";        
      }
    }
    for(var i=0;i<floors.length;i++){
      if(top>arr[i]-100){
        for(var j=0;j<flis.length;j++){
          flis[j].className="";
        }
        flis[i].className="active";
      }
      cbnow=i;
    }

    for (var i = 0; i < floors.length; i++) {
    floors[i].h=floors[i].offsetTop;
  };
     if (top>=floors[0].h-400) {
      cebian.style.display="block";
    var nHeight=cebian.offsetHeight;
    cebian.style.top=(broswerH-nHeight)/2+"px";
    
  };
        if (top<=floors[0].h-400) {
      cebian.style.display="none";
          
    } 
  }
    

var tmtop=$(".tmtop")[0];
  var tmleft=$(".tmleft");
  var xiatus=$("ul",$(".xiatu")[0]);
  var tms=getClass("tm",tmtop)
  tms[0].className="tm hot";
  for(var i=0;i<tms.length;i++){
    tms[i].index=i;
    tms[i].onmouseover=function(){
      for(var j=0;j<tms.length;j++){
        tms[j].className="tm";
        xiatus[j].style.display="none";
      }
      tms[this.index].className="tm hot";
      xiatus[this.index].style.display="block";
    }   
  }

 }