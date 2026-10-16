const isIsogram = (string) => {
  const stringNoSpaceOrHyphen = string.replace(/ |-/g, '');
  const uniqueLetters = stringNoSpaceOrHyphen
    .toLowerCase()
    .split('')
    .filter((element, index, self) => self.indexOf(element) === index);
  return uniqueLetters.length === stringNoSpaceOrHyphen.length;
};

const __in = ["", "isogram", "eleven", "zzyzx", "subdermatoglyphic", "Alphabet", "alphAbet", "thumbscrew-japingly", "thumbscrew-jappingly", "six-year-old", "Emily Jung Schwartzkopf", "accentor", "angola", "up-to-date"];
const __out = [];
for (const x of __in) {
  try { __out.push({ok: true, v: isIsogram(x)}); }
  catch (e) { __out.push({ok: false, e: String(e).slice(0, 40)}); }
}
console.log(JSON.stringify({out: __out}));
