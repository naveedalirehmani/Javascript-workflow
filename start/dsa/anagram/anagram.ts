export function anagram(word1, word2) {
    const wordT1 = word1.toLowerCase().replace(/\s+/g,"")
    const wordT2 = word2.toLowerCase().replace(/\s+/g,"")

  if (wordT1.length != wordT2.length) return false;


  const freW = {};
  const freW2 = {};

  for (const element of wordT1) {
    freW[element] = ++freW[element] || 1;
  }

  for (const element of wordT2) {
    freW2[element] = ++freW2[element] || 1;
  }

  for (const element in freW) {
    if (!freW2[element]) return false;
    if (freW2[element] != freW[element]) return false;
  }

  return true;
}

// console.log("ice Man".toLowerCase().replace(/\s+/g,""))

console.log(" the  classroom ".toLowerCase().replace(/\s+/g,""))