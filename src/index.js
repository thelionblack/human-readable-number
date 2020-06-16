module.exports = function toReadable (number) {
    let strNumber = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen'],
        result = "",
        numberIndex = "";
        if(+number > 99){
            number += "";
           numberIndex = number.slice(0, -2);
           number = number.slice(1);
           result += strNumber[+numberIndex - 1] + " hundred ";
        } 
        if(number === "00"){
            number = 1000000000;
            result = result.slice(0, -1);
        }
        if(+number === 0){
            result += 'zero';
        }else if(+number < 13){
            result += strNumber[+number - 1]; 
        }else if(+number < 20){
            (+number === 13) ? result += "thir" + "teen" :
            (+number === 15) ? result += "fif" + "teen" :
            (+number === 18) ? result += strNumber[+number - 11] + "een" :
            result += strNumber[+number - 11] + "teen";
        }else if(+number < 30){
            (+number === 20) ? result += 'twenty' :
             result += 'twenty ' + strNumber[+number - 21];
        }else if(+number < 40){
            (+number === 30) ? result += 'thirty' :
             result += 'thirty ' + strNumber[+number - 31];
        }else if(+number < 50){
            (+number === 40) ? result += 'forty' :
             result += 'forty ' + strNumber[+number - 41];
        }else if(+number < 60){
            (+number === 50) ? result += 'fifty' :
             result += 'fifty ' + strNumber[+number - 51];
        }else if(+number < 70){
            (+number === 60) ? result += 'sixty' :
             result += 'sixty ' + strNumber[+number - 61];
        }else if(+number < 80){
            (+number === 70) ? result += 'seventy' :
             result += 'seventy ' + strNumber[+number - 71];
        }else if(+number < 90){
            (+number === 80) ? result += 'eighty' :
             result += 'eighty ' + strNumber[+number - 81];
        }else if(+number < 100){
            (+number === 90) ? result += 'ninety' :
             result += 'ninety ' + strNumber[+number - 91];
        }
        
        return result;
}
