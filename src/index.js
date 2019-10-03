const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let text = '';
    let symbol = '';

    for (let i = 0; i < expr.length; i += 10) { 
        if (expr[i] == '*') {
            text += ' ';
            continue;
        } 

        for (let j=i; j < (i+9); j+=2) {
            let letter = expr[j]+expr[j+1];
            //берем букву и проверяем 10 или 11
            if (letter == '10') {
                symbol += '.';
            } else if (letter == '11') {
                symbol += '-';
            }
        }
        text += MORSE_TABLE[symbol];
        symbol = '';
    }
    return text; 
}

module.exports = {
    decode
}