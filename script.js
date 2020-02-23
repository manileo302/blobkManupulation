window.onload=function(){
    let block=this.document.getElementById('block');
    
    //pos-y manipulation
    let posY=this.document.getElementById('pos-y');
       posY.onchange=function(){
        block.style.top=posY.value+'px';
    }
    //pos-x manipulation
    let posX=this.document.getElementById('pos-x');
  
    posX.onchange=function(){
        block.style.left=posX.value+'px';
    }
    //sixe manipulation
    let size=this.document.getElementById('size');
    size.onchange=function(){

        block.style.transform='scale('+size.value+')';
    }
    //opacity manipulation
    let opacity=this.document.getElementById('opacity');
  
    opacity.onchange=function(){
        block.style.opacity=opacity.value;
    }
    //shape  manipulation
    let selector=this.document.getElementById('shape-select');
    let okButton=this.document.getElementById('ok-shape');
    okButton.onclick=function(){
        
    let option=selector.value;
    if(option==='1'){
        block.style.borderRadius='0';
        block.style.transform='rotate(0deg)';
    }else if(option==='2'){
        block.style.borderRadius='50%';
} 
else if(option==='3'){
    block.style.borderRadius='0';
    block.style.transform='rotate(45deg)';
   }
  }
 //hex manipulation
 let hex=this.document.getElementById('hex');
  
 hex.onkeypress=function(){

  block.style.backgroundColor='#'+hex.value;    
    
 }  
 //rgba manipultion
 let rgbaR=this.document.getElementById('rgba-r');
 let rgbaG=this.document.getElementById('rgba-g');
 let rgbaB=this.document.getElementById('rgba-b');
 let rgbaA=this.document.getElementById('rgba-a');

 let rgbaCont=this.document.querySelector('.rgba-container');
 let rgbaInput=rgbaCont.querySelectorAll('input');
 for(let i=0;i<rgbaInput.length;i++){
     rgbaInput[i].onchange=function(){
         block.style.backgroundColor='rgba('+rgbaR.value+','+rgbaG.value+','+rgbaB.value+','+rgbaA.value+')';

     }
 }
  
     
}