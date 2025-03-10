export function romanToInt(s) {
  const romanToNumberMaping = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const romanSub = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };

  let toNumber = 0;

  let toSkip = false;

  for (let index = 0; index < s.length; index++) {
    if (toSkip) {
      toSkip = false;
      continue;
    }

    const element = s[index];
    if (element + s[index + 1] in romanSub) {
      toSkip = true;
      toNumber += romanSub[element + s[index + 1]];
      continue
    }

    if(!romanToNumberMaping[s[index]]) throw new Error()

    toNumber += romanToNumberMaping[s[index]];
  }

  return toNumber;
}


console.log(romanToInt("MCDLXXVI"));

