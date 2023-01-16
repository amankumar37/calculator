var display= document.getElementById('display');
var buttons=document.getElementsByClassName('buttons');
var operator=null;
var operand1=0;
var operand2=null; 
display.innerText="";


for(var i=0;i<buttons.length;i++){
      let text=buttons[i].innerText;
      buttons[i].addEventListener('click',function(){
              if(text=='+'||text=='-'||text=='*'||text=='/'||text=='%'){
                operand1=parseFloat(display.textContent);
                operator=text;
                display.innerText="";
              }else if(text=='+/-'){
                display.innerText*=(-1);
              }else if(text=='AC'){
                operand1=0;
                operand2=null;
                operator=null;
                display.innerText="";
              }else if(text=='='){
                operand2=parseFloat(display.textContent);                
               if(operator!='%')operand1=eval(operand1+" "+operator+" "+operand2);
               else operand1=operand1*operand2/100;
               if(operand1==Infinity||(!operand1)) operand1='Error';
               display.innerText=operand1;
              }else{
                display.innerText+=text;
              }
            

      });
}
