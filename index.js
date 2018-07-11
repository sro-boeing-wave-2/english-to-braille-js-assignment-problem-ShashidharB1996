/**
 * Converts text in english to braille code.
 * Write all code related to the DOM Manipulation here.
 * Using the english-to-braille mapper convert the text
 * in english language to that in the equivalent braille
 * code.
 */
import englishToBrailleLiteralSet from './english-to-braille.js';

const eMap = new Map(englishToBrailleLiteralSet);
function textToBraille() {
  let output = '';
  const str = document.getElementById('sourceLangText').value;
  output += str.split('').map(x => eMap.get(x)).join('');
  document.getElementById('targetLangText').innerHTML = output;
}
document.getElementById('btnConvertEnglishToBraille').addEventListener('click', textToBraille);
