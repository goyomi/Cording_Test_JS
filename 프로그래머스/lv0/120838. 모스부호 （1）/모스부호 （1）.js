function solution(letter) {
  const morse = {
    '.-': 'a', '-...': 'b', '-.-.': 'c', '-..': 'd', '.': 'e', '..-.': 'f',
    '--.': 'g', '....': 'h', '..': 'i', '.---': 'j', '-.-': 'k', '.-..': 'l',
    '--': 'm', '-.': 'n', '---': 'o', '.--.': 'p', '--.-': 'q', '.-.': 'r',
    '...': 's', '-': 't', '..-': 'u', '...-': 'v', '.--': 'w', '-..-': 'x',
    '-.--': 'y', '--..': 'z'
  };

  const morseLetters = letter.split(' ');
  let result = '';

  for (let i = 0; i < morseLetters.length; i++) {
    const morseLetter = morseLetters[i];
    if (morseLetter in morse) {
      result += morse[morseLetter];
    }
  }

  return result;
}