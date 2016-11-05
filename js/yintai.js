window.onload=function(){
  // 头部
   var item=$(".wx1")
   var xxk=$(".wxk")
   for(var i=0;i<item.length;i++){
    item[i].index=i;
    item[i].onmouseover=function(){
      xxk[this.index].style.display="block";
    }
    item[i].onmouseout=function(){
      xxk[this.index].style.display="none";
    }
   }

   var sy1=$(".sy1")
   var syxk=$(".syxk")
   for(var i=0;i<sy1.length;i++){
    sy1[i].index=i;
    sy1[i].onmouseover=function(){
      syxk[this.index].style.display="block";
    }
    sy1[i].onmouseout=function(){
      syxk[this.index].style.display="none";
    }
   }


   var wdyt=$(".wdyt")
   var wdyxk=$(".wdyxk")
   for(var i=0;i<wdyt.length;i++){
    wdyt[i].index=i;
    wdyt[i].onmouseover=function(){
      wdyxk[this.index].style.display="block";
    }
    wdyt[i].onmouseout=function(){
      wdyxk[this.index].style.display="none";
    }
   }


// 搜索
   var gouwu=$(".gouwu")
   var gwxk=$(".gwxk")
   for(var i=0;i<gouwu.length;i++){
    gouwu[i].index=i;
    gouwu[i].onmouseover=function(){
      gwxk[this.index].style.display="block";
    }
    gouwu[i].onmouseout=function(){
      gwxk[this.index].style.display="none";
    }
   }


//banner左选卡
   var lefts=$(".one1")
   var banxk=$(".banxk")
   for(var i=0;i<lefts.length;i++){
    lefts[i].index=i;
    lefts[i].onmouseover=function(){
      banxk[this.index].style.display="block";
    }
   lefts[i].onmouseout=function(){
      banxk[this.index].style.display="none";
    }
}







//banner 轮播图


  var imgs=$("a",$(".botcen1")[0]);
  var xys=$("li",$(".lu")[0]);
  // imgs[0].style.zIndex=10;
  animate(imgs[0],{opacity:1});
  xys[0].style.background="#e5004f";
  //当前窗口中的图片下标
  var now=0;
  var t=setInterval(move,2000);
  var flag=true;
//鼠标放上停止离开走
  var center=$(".banbotcen")[0];
  center.onmouseover=function(){
    clearInterval(t);
  }
  center.onmouseout=function(){
    t=setInterval(move,2000);
  }

//选项卡
  for(var i=0;i<xys.length;i++){
   xys[i].index=i;
   xys[i].onclick=function(){
      for (var i=0;i<imgs.length;i++) {
      // imgs[i].style.zIndex=5;
      xys[i].style.background="";
      animate(imgs[i],{opacity:0});
      
     }  
      xys[this.index].style.background="#e5004f";
      // imgs[this.index].style.zIndex=10;
      animate(imgs[this.index],{opacity:1});
      now=this.index;
   }
  }

// 左右爪
  var banl=$(".banl")[0];
  var banr=$(".banr")[0];
  banl.onclick=function(){
     movel()
  }
  banr.onclick=function(){
     move()
  }

  function movel(){
   now--;
   if(now<0){
      now=imgs.length-1;
   }
   for (var i=0;i<imgs.length;i++) {
      // imgs[i].style.zIndex=5;
      animate(imgs[i],{opacity:0});
      xys[i].style.background="";
      
   }   
      xys[now].style.background="#e5004f";
      // imgs[now].style.zIndex=10;
      animate(imgs[now],{opacity:1});
      
  }
  
 //自动轮播
  function move(){
   now++;
   if(now==imgs.length){
      now=0;
   }
   for (var i=0;i<imgs.length;i++) {
      // imgs[i].style.zIndex=5;
      animate(imgs[i],{opacity:0});
      xys[i].style.background="";
   }   
      xys[now].style.background="#e5004f";
      // imgs[now].style.zIndex=10;
      animate(imgs[now],{opacity:1});
  }



// 放价狂欢
  var tmtop=$(".tmtop")[0];
  var tmleft=$(".tmleft");
  var xiatus=$("ul",$(".xiatu")[0]);
  var tms=getclass("tm",tmtop)
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
    

// 银泰百货的选项卡
  var yttop=$("#bhrighttop");
  // 两个种类
  var bzs=getclass("aa",yttop);
  var ytbot=$(".bhrightbot",$(".bhrigbottom")[0]);
  bzs[1].className="aa s";
  ytbot[0].style.display="block";
  for(var i=0;i<bzs.length;i++){
    bzs[i].index=i;
    bzs[i].onmouseover=function(){
      for(var j=0;j<bzs.length;j++){
        bzs[j].className="aa";
        ytbot[j].style.display="none";
      }
      bzs[this.index].className="aa s";
      ytbot[this.index].style.display="block";
    }
  }



//时尚名品
  var bans=$("#shishangcen");
  var banner=$(".shi-img");
  var lis=$(".lis");
  var left=$(".banner-left")[0];
  var right=$(".banner-right")[0];
  var w=parseInt(getStyle(bans,"width"));
  var n=0;
  var next=0;
  var mpt=setInterval(moveimg,4000)
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
          lis[n].style.background="#fff";
      }
          lis[next].style.background="#e5004f";

            n=next;
   }

   
   
   bans.onmouseover=function(){
    clearInterval(mpt);
   }
   bans.onmouseout=function(){
    mpt=setInterval(moveimg,2000)
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
          lis[n].style.background="#fff";
      }
          lis[next].style.background="#e5004f";

            n=next;
   }
   




 
 function autolunbo(obj,imgs,lis,left,right){
  var bans=obj;
  var banner=$(imgs);
  var lis=$(lis);
  var left=$(left)[0];
  var right=$(right)[0];
  var w=parseInt(getStyle(bans,"width"));
  var n=0;
  var next=0;
  var t=setInterval(moveimg,3000)
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
          lis[n].style.background="#fff";
      }
          lis[next].style.background="#e5004f";

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
          lis[n].style.background="#fff";
      }
          lis[next].style.background="#e5004f";

            n=next;
   }
    


  
  // 移图 

  for(var i=0;i<banner.length;i++){
      lis[i].index=i;
      lis[i].onclick=function(){
        if(!flag){
         return;
        }
        flag=false;
        if(this.index>n){
           banner[this.index].style.left=w+"px";
           animate(banner[n],{left:-w},600);
           animate(banner[this.index],{left:0},600,function(){flag=true});
           for(var i=0;i<lis.length;i++){
           lis[n].style.background="#fff";
           }
          lis[this.index].style.background="#e5004f";
        }else if(this.index<n){
           banner[this.index].style.left=-w+"px";
           animate(banner[n],{left:w},600);
           animate(banner[this.index],{left:0},600,function(){flag=true});
            for(var i=0;i<lis.length;i++){
            lis[n].style.background="#fff";
            }
            lis[this.index].style.background="#e5004f";
        }
        n=this.index;
        next=this.index;

      }
  }

 }



//时尚鞋靴
var obj=$("#xiexuecen")
autolunbo(obj,".xue-img",".xuelis",".xue-left",".xue-right");



var obj1=$("#xiangbaocen")
autolunbo(obj1,".bao-img",".baolis",".bao-left",".bao-right");



var obj2=$("#hufucen")
autolunbo(obj2,".fu-img",".fulis",".fu-left",".fu-right");


var obj3=$("#yundongcen")
autolunbo(obj3,".wai-img",".wailis",".wai-left",".wai-right");


var obj4=$("#neiyicen")
autolunbo(obj4,".nei-img",".neilis",".nei-left",".nei-right");





// logo
  nodelunbo(".ssl",".ssr",".ssyt","1");
  nodelunbo(".ssl1",".ssr1",".ssyt1","1")
  nodelunbo(".ssl2",".ssr2",".ssyt2","1")
  nodelunbo(".ssl3",".ssr3",".ssyt3","1")
  nodelunbo(".ssl4",".ssr4",".ssyt4","1")
  nodelunbo(".ssl5",".ssr5",".ssyt5","1")
  nodelunbo(".ssl6",".ssr6",".ssyt6","1")
  nodelunbo(".ssl7",".ssr7",".ssyt7","1")
  nodelunbo(".ssl8",".ssr8",".ssyt8","1")


function nodelunbo(left,right,imgbox,j){
   var left=$(left)[0];//
   var right=$(right)[0];//
   var imgbox=$(imgbox)[0];//
   var imgs=$("div",imgbox)//
   var width=parseInt(getStyle(imgs[0],"width"));//
   var n=j;//
   var flag=true;//
   function move(){
        animate(imgbox,{left:-width*n},1000,
         function(){
          for (var i=1;i<=n;i++) {
            var first=firstChild(imgbox);
              imgbox.appendChild(first);
              
          }
          imgbox.style.left="0px";
         });
      
   }

     // 左右手
     right.onclick=function(){ 
     
     move();
    }
    left.onclick=function(){
    
       moveL();
    }

    function moveL(){
      if(!flag){
       return;
       }
       flag=false;
      for (var i=1;i<=n;i++) {
        var last=lastChild(imgbox);
          var first=firstChild(imgbox);
          imgbox.insertBefore(last,first);
      }
      
       imgbox.style.left=-width*n+"px";
         animate(imgbox,{left:0},1000,function(){flag=true;})
    }
}



/*--边框效果--*/
        
    var w0w=$(".bxxg");
    for(var i=0;i<w0w.length;i++){
         ytborder(w0w[i])
        }
    function ytborder(w0w){
    var width=parseInt(getStyle(w0w,"width"))+2;
    var height=parseInt(getStyle(w0w,"height"))+2;

         var wrr=[];
    for(var i=0;i<4;i++){
      var w1w=$("<div>");
        w1w.style.cssText="position:absolute;background:#000;"
           w0w.appendChild(w1w);
       wrr.push(w1w)
       }
           wrr[0].style.cssText+="width:0px;height:1px;left:-1px;top:-1px;"
       wrr[1].style.cssText+="width:1px;height:0px;left:-1px;top:-1px;"
       wrr[2].style.cssText+="width:0px;height:1px;right:-1px;bottom:-1px;"
       wrr[3].style.cssText+="width:1px;height:0px;right:-1px;bottom:-1px;"
       w0w.onmouseover=function(){
        animate(wrr[0],{width:width},600);
        animate(wrr[1],{height:height},600);
              animate(wrr[2],{width:width},600);
        animate(wrr[3],{height:height},600);
        }

                w0w.onmouseout=function(){
        animate(wrr[0],{width:0},600);
        animate(wrr[1],{height:0},600);
              animate(wrr[2],{width:0},600);
        animate(wrr[3],{height:0},600);}

    } 



    var w0w=$(".bxxg1");
    for(var i=0;i<w0w.length;i++){
         ytborder(w0w[i])
        }
    function ytborder(w0w){
    var width=parseInt(getStyle(w0w,"width"))+2;
    var height=parseInt(getStyle(w0w,"height"))+2;

         var wrr=[];
    for(var i=0;i<4;i++){
      var w1w=$("<div>");
        w1w.style.cssText="position:absolute;background:#000;"
           w0w.appendChild(w1w);
       wrr.push(w1w)
       }
           wrr[0].style.cssText+="width:0px;height:1px;left:-1px;top:-1px;"
       wrr[1].style.cssText+="width:1px;height:0px;left:-1px;top:-1px;"
       wrr[2].style.cssText+="width:0px;height:1px;right:-1px;bottom:-1px;"
       wrr[3].style.cssText+="width:1px;height:0px;right:-1px;bottom:-1px;"
       w0w.onmouseover=function(){
        animate(wrr[0],{width:width},600);
        animate(wrr[1],{height:height},600);
              animate(wrr[2],{width:width},600);
        animate(wrr[3],{height:height},600);
        }

                w0w.onmouseout=function(){
        animate(wrr[0],{width:0},600);
        animate(wrr[1],{height:0},600);
              animate(wrr[2],{width:0},600);
        animate(wrr[3],{height:0},600);}

    } 


    var w0w=$(".bxxg2");
    for(var i=0;i<w0w.length;i++){
         ytborder(w0w[i])
        }
    function ytborder(w0w){
    var width=parseInt(getStyle(w0w,"width"))+2;
    var height=parseInt(getStyle(w0w,"height"))+2;

         var wrr=[];
    for(var i=0;i<4;i++){
      var w1w=$("<div>");
        w1w.style.cssText="position:absolute;background:#000;"
           w0w.appendChild(w1w);
       wrr.push(w1w)
       }
           wrr[0].style.cssText+="width:0px;height:1px;left:-1px;top:-1px;"
       wrr[1].style.cssText+="width:1px;height:0px;left:-1px;top:-1px;"
       wrr[2].style.cssText+="width:0px;height:1px;right:-1px;bottom:-1px;"
       wrr[3].style.cssText+="width:1px;height:0px;right:-1px;bottom:-1px;"
       w0w.onmouseover=function(){
        animate(wrr[0],{width:width},600);
        animate(wrr[1],{height:height},600);
              animate(wrr[2],{width:width},600);
        animate(wrr[3],{height:height},600);
        }

                w0w.onmouseout=function(){
        animate(wrr[0],{width:0},600);
        animate(wrr[1],{height:0},600);
              animate(wrr[2],{width:0},600);
        animate(wrr[3],{height:0},600);}

    } 




// 楼层跳转
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
    cebian.style.top=(cHeight-nHeight)/2+"px";
    if(flag){
      flag=false;
      animate(hidden,{height:100},500,function(){flag=true;})
    } 
  };
        if (top<=floors[0].h-400) {
      cebian.style.display="none";
          if(flag){
      flag=false;
      animate(hidden,{height:0},500,function(){flag=true;})
    } 
    }
    
  }


 
    jQuery(".lazy").lazyload({
      effect:"fadeIn",
      threshold:200
      // skip_invisible:false
    })











}

