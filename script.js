
let string="";
let buttons=document.querySelectorAll('.button');
let inputText=document.querySelector('input');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click',(e)=>{
console.log(e.target);
    if(e.target.innerHTML==='='){
      try{
      string=math.evaluate(string);
      inputText.value=string;
      }
      catch(error){
        inputText.value="Error";
      }
    }
    else if(e.target.innerHTML==='C'){
      string="";
      inputText.value=string;
    }else{
      console.log(e.target);
      string=string+e.target.innerHTML;
      inputText.value=string;
    }
                          
  });
});
