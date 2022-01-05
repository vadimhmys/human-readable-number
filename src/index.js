module.exports = function toReadable (number) {
    let baseSet = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen'
    ];

    let baseSetOfSecondLevel = [
        'hundred',
        'ten',
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety'
    ];

    function getOneDigitNumber(num) {
        return baseSet[num];
    }

    function getTwoDigitNumber(num) {
        if (num % 10 === 0) {
            return baseSetOfSecondLevel[num / 10];
        } else if(num > 20) {
            let str = num + '';
            return ( baseSetOfSecondLevel[ +str[0] ] + ' ' + getOneDigitNumber( +str[1] ) );
        } else {
            return baseSet[num];
        }
    }

    function getThreeDigitNumber(num) {
        if(num % 100 === 0) {
            let str = num + '';
            return baseSet[ +str[0] ] + ' hundred';
        } else {
            let str = num + '';
            let result = getOneDigitNumber( +str[0] ) + ' hundred ';
            str = str.slice(1);
            result += getTwoDigitNumber(+str);
            return result;
        }

        
    }
    
    let finalResult;

    switch(String(number).length) {
        case 1:
            finalResult = getOneDigitNumber(number);
            break;
        case 2:
            finalResult = getTwoDigitNumber(number);
            break;
        case 3:
            finalResult = getThreeDigitNumber(number);
            break;
        default:
            break;
    }

    return finalResult;
}
