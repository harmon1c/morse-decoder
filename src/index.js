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
    const morseWords = expr.match(/.{10}/g);
    let decodedSentence = '';

    for (const morseWord of morseWords) {
        if (morseWord === '**********') {
            decodedSentence += ' ';
        } else {
            let morseLetter = '';

            for (let i = 0; i < 10; i += 2) {
                const symbol = morseWord.slice(i, i + 2);
                if (symbol === '10') {
                    morseLetter += '.';
                } else if (symbol === '11') {
                    morseLetter += '-';
                }
            }

            decodedSentence += MORSE_TABLE[morseLetter];
        }
    }

    return decodedSentence;
}

module.exports = {
    decode
}