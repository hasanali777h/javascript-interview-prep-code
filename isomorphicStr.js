const isomorphicStr = (s, t) => {
  let hash = new Map();
  if ((s === null ?? s === undefined) && (t === null ?? t === undefined)) {
    throw new Error("Invalid argument");
  }
  if (s.length !== t.length) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    if (!hash.has(s[i])) {
      if ([...hash.values()].includes(t[i])) {
        return false;
      } else {
        hash.set(s[i], t[i]);
      }
    } else {
      if (hash.get(s[i]) != t[i]) {
        return false;
      }
    }
  }
  return true;
};
console.log(isomorphicStr("egg", "add"));
console.log(isomorphicStr("paper", "title"));
console.log(isomorphicStr("foo", "bar"));
console.log(isomorphicStr("ab", "aa"));
