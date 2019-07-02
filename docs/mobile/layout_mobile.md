## 布局分为2种形式
- 根据initial-scale ,minimum-scale,maximum-scale
```
   (function(){
               var dofn=function(getMeta,scale){
                   if(getMeta.length){
                       var scal="user-scalable=no,initial-scale="+scale+",minimum-scale="+scale+",maximum-scale="+scale+"";
                       var getatrr=getMeta[0].setAttribute('content',scal);
                   }
                   else{
                       var meta = document.createElement("meta");
                       meta.name = "viewport";
                       meta.content = "user-scalable=no,initial-scale="+scale+",minimum-scale="+scale+",maximum-scale="+scale+""
                       document.head.appendChild(meta);
                   }
               };
               var computed=function(){
                   /**根据缩放来布局***/
                   var w = window.screen.width;
                   var targetW = 375;
                   var scale = (w/targetW)*1/2;
                   var getMeta=document.getElementsByName('viewport');
                   if(w>640){
                       scale=1;
                       dofn(getMeta,scale);
                   }
                   else{
                       dofn(getMeta,scale);
                   }
               };
               computed();
               window.addEventListener('resize',computed,false);
           })();
```
- 根据rem
```
    ~function(){
                /**rem 方式来布局**/
                let computed = function(){
                    let desW=750;
                    let devW=document.documentElement.clientWidth;
                    if(devW>=640) {
                        document.documentElement.style.fontSize='100px';
                        return;
                    }
                    document.documentElement.style.fontSize = devW/desW*100+'px'
                }
                computed();
                window.addEventListener('resize',computed,false);
            }();
```
