const len=document.getElementById('number');
const from=document.getElementById('from');
const to=document.getElementById('to');
const formula=document.getElementById('formula');
const result =document.getElementById('result');

const units=[
    'meter',
    'kilometer',
    'millimeter',
    // 'decimeter',
    
    'feet',
    'inch',
    'mile',
    'yard'
];
const selele=document.querySelectorAll('select');

for(let i=6;i>=0;i--)
{
    let option=` <option value="${units[i]}">${units[i]}</option>`;
    selele[0].firstElementChild.insertAdjacentHTML('afterend',option);
}

for(let i=6;i>=0;i--)
{
    let option=` <option value="${units[i]}">${units[i]}</option>`;
    selele[1].firstElementChild.insertAdjacentHTML('afterend',option);
}

function lengthconverter(){
    if(from.value === to.value){
       result.value=len.value;
       formula.textContent="Remainds Same"
    }


    else if(from.value==='meter' && to.value==='millimeter' ){
        result.value=len.value*1000;
        formula.textContent="Multiply the length value by 1000"
    }
    else if(from.value==='meter' && to.value==='centimeter' ){
        result.value=len.value*100;
        formula.textContent="Multiply the length value by 100"
    }
    else if(from.value==='meter' && to.value==='kilometer' ){
        result.value=len.value/1000;
        formula.textContent="divide the length value by 1000"
    }
    else if(from.value==='meter' && to.value==='inch' ){
        result.value=len.value*39.37;
        formula.textContent="Multiply the length value by 39.37"
    }
    else if(from.value==='meter' && to.value==='feet' ){
        result.value=len.value * 3.281;
        formula.textContent="Multiply the length value by 3.281"
    }
    else if(from.value==='meter' && to.value==='yard' ){
        result.value=len.value* 1.094;
        formula.textContent="Multiply the length value by 1.094"
    }
    else if(from.value==='meter' && to.value==='mile' ){
        result.value=len.value/1609;
        formula.textContent="divide the length value by 1609"
    }


  
    else if(from.value==='millimeter' && to.value==='meter' ){
        result.value=len.value/1000;
        formula.textContent="Divide the length value by 1000"
    }
    else if(from.value==='millimeter' && to.value==='centimeter' ){
        result.value=len.value/10;
        formula.textContent="Divide the length value by 10"
    }
    else if(from.value==='millimeter' && to.value==='kilometer' ){
        result.value=len.value/ 1000000;
        formula.textContent="divide the length value by 1000000"
    }
    else if(from.value==='millimeter' && to.value==='inch' ){
        result.value=len.value/ 25.4;
        formula.textContent="Divide the length value by 25.4"
    }
    else if(from.value==='millimeter' && to.value==='feet' ){
        result.value=len.value / 304.8;
        formula.textContent="Divide the length value by 304.8"
    }
    else if(from.value==='millimeter' && to.value==='yard' ){
        result.value=len.value/ 914.4;
        formula.textContent="Divide the length value by 914.4"
    }
    else if(from.value==='millimeter' && to.value==='mile' ){
        result.value=len.value/ 1609344;
        formula.textContent="Divide the length value by 1609344"
    }


    else if(from.value==='centimeter' && to.value==='meter' ){
        result.value=len.value/100;
        formula.textContent="Divide the length value by 100"
    }
    else if(from.value==='centimeter' && to.value==='millimeter' ){
        result.value=len.value*10;
        formula.textContent="Multiply the length value by 10"
    }
    else if(from.value==='centimeter' && to.value==='kilometer' ){
        result.value=len.value/ 100000;
        formula.textContent="divide the length value by 100000"
    }
    else if(from.value==='centimeter' && to.value==='inch' ){
        result.value=len.value/  2.54;
        formula.textContent="Divide the length value by  2.54"
    }
    else if(from.value==='centimeter' && to.value==='feet' ){
        result.value=len.value / 30.48;
        formula.textContent="Divide the length value by 30.48"
    }
    else if(from.value==='centimeter' && to.value==='yard' ){
        result.value=len.value/ 91.44;
        formula.textContent="Divide the length value by 91.44"
    }
    else if(from.value==='centimeter' && to.value==='mile' ){
        result.value=len.value/ 160934.4;
        formula.textContent="Divide the length value by 160934.4"
    }


    
    else if(from.value==='kilometer' && to.value==='meter' ){
        result.value=len.value*1000;
        formula.textContent="Multiply the length value by 1000"
    }
    else if(from.value==='kilometer' && to.value==='millimeter' ){
        result.value=len.value*1000000;
        formula.textContent="Multiply the length value by 1000000"
    }
    else if(from.value==='kilometer' && to.value==='centimeter' ){
        result.value=len.value* 100000;
        formula.textContent="Multiply the length value by 100000"
    }
    else if(from.value==='kilometer' && to.value==='inch' ){
        result.value=len.value* 39370.079;
        formula.textContent="Multiply the length value by  39370.079"
    }
    else if(from.value==='kilometer' && to.value==='feet' ){
        result.value=len.value * 3280.84;
        formula.textContent="Multiply the length value by 3280.84"
    }
    else if(from.value==='kilometer' && to.value==='yard' ){
        result.value=len.value*1093.613;
        formula.textContent="Multiply the length value by 1093.613"
    }
    else if(from.value==='kilometer' && to.value==='mile' ){
        result.value=len.value/ 1.609;
        formula.textContent="Divide the length value by 1.609"
    }





    
    else if(from.value==='inch' && to.value==='meter' ){
        result.value=len.value/ 39.37;
        formula.textContent="Divide the length value by  39.37"
    }
    else if(from.value==='inch' && to.value==='centimeter' ){
        result.value=len.value*2.54;
        formula.textContent="Multiply the length value by 2.54"
    }
    else if(from.value==='inch' && to.value==='kilometer' ){
        result.value=len.value/ 39370.079;
        formula.textContent="divide the length value by  39370.079"
    }
    else if(from.value==='inch' && to.value==='millimeter' ){
        result.value=len.value*25.4;
        formula.textContent="Multiply the length value by 25.4"
    }
    else if(from.value==='inch' && to.value==='feet' ){
        result.value=len.value / 12;
        formula.textContent="Divide the length value by 12"
    }
    else if(from.value==='inch' && to.value==='yard' ){
        result.value=len.value/ 36;
        formula.textContent="Divide the length value by 36"
    }
    else if(from.value==='inch' && to.value==='mile' ){
        result.value=len.value/ 1609344;
        formula.textContent="Divide the length value by 1609344"
    }








    
    else if(from.value==='feet' && to.value==='meter' ){
        result.value=len.value/ 3.281;
        formula.textContent="Divide the length value by  3.281"
    }
    else if(from.value==='feet' && to.value==='centimeter' ){
        result.value=len.value*30.48;
        formula.textContent="Multiply the length value by 30.48"
    }
    else if(from.value==='feet' && to.value==='kilometer' ){
        result.value=len.value/ 3280.84;
        formula.textContent="divide the length value by 3280.84"
    }
    else if(from.value==='feet' && to.value==='inch' ){
        result.value=len.value*12;
        formula.textContent="Multiply the length value by 12"
    }
    else if(from.value==='feet' && to.value==='millimeter' ){
        result.value=len.value *304.8;
        formula.textContent="Multiply the length value by 304.8"
    }
    else if(from.value==='feet' && to.value==='yard' ){
        result.value=len.value/ 3;
        formula.textContent="Divide the length value by 3"
    }
    else if(from.value==='feet' && to.value==='mile' ){
        result.value=len.value/ 5280;
        formula.textContent="Divide the length value by 5280"
    }



 
    else if(from.value==='yard' && to.value==='meter' ){
        result.value=len.value/1.094;
        formula.textContent="Divide the length value by 1.094"
    }
    else if(from.value==='yard' && to.value==='centimeter' ){
        result.value=len.value*91.44;
        formula.textContent="Multiply the length value by 91.44"
    }
    else if(from.value==='yard' && to.value==='kilometer' ){
        result.value=len.value/ 1093.613;
        formula.textContent="divide the length value by 1093.613"
    }
    else if(from.value==='yard' && to.value==='inch' ){
        result.value=len.value*36;
        formula.textContent="Multiply the length value by 36"
    }
    else if(from.value==='yard' && to.value==='feet' ){
        result.value=len.value *3;
        formula.textContent="Multiply the length value by 3"
    }
    else if(from.value==='yard' && to.value==='millimeter' ){
        result.value=len.value* 914.4;
        formula.textContent="Multiply the length value by 914.4"
    }
    else if(from.value==='yard' && to.value==='mile' ){
        result.value=len.value/1760;
        formula.textContent="Divide the length value by 1760"
    }

    
    
    else if(from.value==='mile' && to.value==='meter' ){
        result.value=len.value*1609.344;
        formula.textContent="Multiply the length value by 1609.344"
    }
    else if(from.value==='mile' && to.value==='centimeter' ){
        result.value=len.value*160934.4;
        formula.textContent="Multiply the length value by 160934.4"
    }
    else if(from.value==='mile' && to.value==='kilometer' ){
        result.value=len.value*1.609;
        formula.textContent="Multiply the length value by 1.609"
    }
    else if(from.value==='mile' && to.value==='inch' ){
        result.value=len.value* 63360;
        formula.textContent="Multiply the length value by 63360"
    }
    else if(from.value==='mile' && to.value==='feet' ){
        result.value=len.value *5280;
        formula.textContent="Multiply the length value by 5280"
    }
    else if(from.value==='mile' && to.value==='yard' ){
        result.value=len.value*1760;
        formula.textContent="Multiply the length value by 1760"
    }
    else if(from.value==='mile' && to.value==='millimeter' ){
        result.value=len.value* 1609344;
        formula.textContent="Multiply the length value by  1609344"
    }


}

from.addEventListener('change',lengthconverter)
to.addEventListener('change',lengthconverter)
len.addEventListener('input',lengthconverter)
