const fiscalCode1 = {
  name: "Matt",
  surname: "Edabit",
  gender: "F",
  dob: "2/1/1900",
}; // "DBTMTT00A01"

const fiscalCode2 = {
  name: "Helen",
  surname: "Yu",
  gender: "F",
  dob: "1/12/1950",
}; // "YUXHLN50T41"

const fiscalCode3 = {
  name: "Mickey",
  surname: "Mouse",
  gender: "M",
  dob: "16/10/1928",
}; // "MSOMKY28A16"

// const generateCode = (args) => {
//   let surnameConsonants = args.surname
//     .split("")
//     .filter((e) => e.match(/[^aeiouAEIOU]/) != null);
//   let surnameFormat = surnameConsonants.map((x) => {
//     return x.toUpperCase();
//   });
//   let nameConsonants = args.name
//     .split("")
//     .filter((e) => e.match(/[^aeiouAEIOU]/) != null);
//   let nameFormat = nameConsonants.map((x) => {
//     return x.toUpperCase();
//   });
//   let gsurnameFormat = surnameFormat.slice(0, 3);
//   let gnameFormat = nameFormat.slice(0, 3);
//   function monthValue(str) {
//     var anum = {
//       1: "A",
//       2: "B",
//       3: "C",
//       4: "D",
//       5: "E",
//       6: "F",
//       7: "G",
//       8: "H",
//       9: "I",
//       10: "J",
//       11: "K",
//       12: "L",
//     };
//     if (str.length == 1) return anum[str] || " ";
//     return str.split("").map(monthValue);
//   }
//   const getSirName = (str) => {
//     if (str.length == 3) {
//       return str.join("");
//     }
//     if (str.length == 2) {
//       return str.join("") + "X";
//     }
//     if (str.length == 1) {
//       return str.join("") + "XX";
//     }
//   };
//   const getName = (str) => {
//     if (str.length == 3) {
//       return str.join("");
//     }
//     if (str.length == 2) {
//       return str.join("") + "X";
//     }
//     if (str.length == 1) {
//       return str.join("") + "XX";
//     }
//   };
//   if (args.dob.length == 8) {
//     const yearFormat1 = args.dob.slice(-2);
//     const monthFormat1 = args.dob.substring(2, 3);
//     const dateFormat1 = args.dob.substring(0, 1);
//     if (args.gender == "M") {
//       const gdateFormat1 = "0" + dateFormat1;
//       const gmonthFormat1 = monthValue(monthFormat1);
//       const dobFormat = yearFormat1 + gmonthFormat1 + gdateFormat1;
//       return getSirName(gsurnameFormat) + getName(gnameFormat) + dobFormat;
//     }
//     if (args.gender == "F") {
//       const gdateFormat1 = Number("40") + Number(dateFormat1);
//       const gmonthFormat1 = monthValue(monthFormat1);
//       const dobFormat = yearFormat1 + gmonthFormat1 + gdateFormat1;
//       return getSirName(gsurnameFormat) + getName(gnameFormat) + dobFormat;
//     }
//   }
//   if (args.dob.length == 9) {
//     const yearFormat2 = args.dob.slice(-2);
//     const monthFormat2 = args.dob.substring(2, 4);
//     const dateFormat2 = args.dob.substring(0, 1);
//     if (args.gender == "M") {
//       const gdateFormat2 = "0" + dateFormat2;
//       const gmonthFormat2 = monthValue(monthFormat2);
//       const dobFormat = yearFormat2 + gmonthFormat2 + gdateFormat2;
//       return getSirName(gsurnameFormat) + getName(gnameFormat) + dobFormat;
//     }
//     if (args.gender == "F") {
//       const gdateFormat2 = Number("40") + Number(dateFormat2);
//       const gmonthFormat2 = monthValue(monthFormat2);
//       const dobFormat = yearFormat2 + gmonthFormat2 + gdateFormat2;
//       return getSirName(gsurnameFormat) + getName(gnameFormat) + dobFormat;
//     }
//   }
//   if (args.dob.length == 10) {
//     const yearFormat2 = args.dob.slice(-2);
//     const monthFormat2 = args.dob.substring(3, 5);
//     const dateFormat2 = args.dob.substring(0, 2);
//     if (args.gender == "M") {
//       const gmonthFormat2 = monthValue(monthFormat2);
//       const dobFormat = yearFormat2 + gmonthFormat2 + dateFormat2;
//       return getSirName(gsurnameFormat) + getName(gnameFormat) + dobFormat;
//     }
//     if (args.gender == "F") {
//       const gmonthFormat2 = monthValue(monthFormat2);
//       const dobFormat = yearFormat2 + gmonthFormat2 + dateFormat2;
//       return getSirName(gsurnameFormat) + getName(gnameFormat) + dobFormat;
//     }
//   }
// };
// console.log(generateCode(fiscalCode1));
// console.log(generateCode(fiscalCode2));
// console.log(generateCode(fiscalCode3));

function generateCode(args) {
  const surname = args.surname.toUpperCase();
  const firstName = args.name.toUpperCase();
  function genName(name) {
    const consonant = name.match(/[BCDFGHJKLMNPQRSTVWXYZ]/gi);
    const vowel = name.match(/[AEIOU]/gi);
    if (name.length >= 3) {
      if (consonant.length > 3) {
        const elementsOfName = [consonant[0], consonant[2], consonant[3]];
        return elementsOfName;
      }
      if (consonant.length === 3) {
        return consonant;
      }
      if (consonant.length === 2) {
        return (consonant + vowel[0]).replace(/,/g, "");
      }
      if (consonant.length === 1) {
        return (consonant + vowel[0] + vowel[1]).replace(/,/g, "");
      }
    } else {
      if (name.length == 2) {
        return name + "X";
      }
      if (name.length == 1) {
        return name + "XX";
      }
    }
  }
  function Date(date) {
    return date.substring(date.length - 2);
  }
  function month(month) {
    const months = {
      1: "A",
      2: "B",
      3: "C",
      4: "D",
      5: "E",
      6: "H",
      7: "L",
      8: "M",
      9: "P",
      10: "R",
      11: "S",
      12: "T",
    };
    const check = month.split("/");
    for (let item in months) {
      if (item === check[1]) {
        return months[item];
      }
    }
  }
  function gender(gender, date) {
    const birthDate = date.split("/");
    if (gender === "M" && birthDate[0].length < 2) {
      return 0 + birthDate[0];
    }
    if (gender === "M" && birthDate[0].length === 2) {
      return birthDate[0];
    }
    if (gender === "F") {
      return +birthDate[0] + 40;
    }
  }
  return (
    (genName(surname) + genName(firstName)).replace(/,/g, "") +
    Date(args.dob) +
    month(args.dob) +
    gender(args.gender, args.dob)
  );
}
console.log(generateCode(fiscalCode2));