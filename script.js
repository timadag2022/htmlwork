// ==================Change of Element ==================
// function myFunction(){
//     document.getElementById('demo').style.fontSize = '25px';
//     document.getElementById('demo').style.color = 'red';
//     document.getElementById('demo').style.backgroundColor = 'yellow';

// }


function myFunction() {
    const demoElement = document.getElementById('demo');
    const currentFontSize = window.getComputedStyle(demoElement).getPropertyValue('font-size');
    if(currentFontSize === '16px'){
        demoElement.style.fontSize = '40px';
        demoElement.style.color = 'red';
        demoElement.style.backgroundColor = 'yellow';
    }else{
        demoElement.style.fontSize = '16px';
        demoElement.style.color = 'black';
        demoElement.style.backgroundColor = 'transparent';
    }
}