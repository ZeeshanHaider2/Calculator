let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));

//https://stackoverflow.com/questions/68304430/convert-htmlcollection-to-an-array-with-javascript
//https://dev.to/hasnaindev/easiest-way-to-convert-htmlcollection-into-an-array-bkl

console.log(buttons);

 buttons.map(button =>{
     button.addEventListener('click', e => {
         switch(e.target.innerText){
             case 'C':
                 display.innerText = '';
                 break; 
            case '←':
                 display.innerText = display.innerText.slice(0, -1); 
                 break;
            case '=':
                try{
                display.innerText = eval(display.innerText);
                } catch{
                    display.innerText = "Pls write a valid Math expression!"
                }
                break;
             default:
                 display.innerText += e.target.innerText;
         }
     })
 })