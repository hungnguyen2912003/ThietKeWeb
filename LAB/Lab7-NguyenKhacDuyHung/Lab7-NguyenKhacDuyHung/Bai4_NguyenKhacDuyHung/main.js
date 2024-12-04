let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.value = '';
                break;
            case '=':
                try{
                    let result = eval(display.value.replace(/x/g, '*'));
                    if(Number.isInteger(result)){
                        display.value = result;
                    }
                    if(result % 1 === 0){
                        display.value = result;
                    }
                    else{
                        display.value = parseFloat(result.toFixed(6)); 
                    }
                    break;
                }
                catch{
                    display.value = 'Lỗi phép tính';
                    break;
                }
            default:
                display.value += e.target.innerText;
        }
    });
});