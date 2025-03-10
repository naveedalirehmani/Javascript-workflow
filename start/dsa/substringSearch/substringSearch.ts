export function substringSearch(string: string, sub: string) {
  if (sub.length == 0) return 0;

  for (let outer = 0; outer < string.length; outer++) {
    for (let inner = 0; inner < sub.length; inner++) {
      if (string[outer + inner] !== sub[inner]) {
        break;
      }

      if (inner === sub.length - 1) {
        return outer;
      }
    }
  }

  return -1;
}
