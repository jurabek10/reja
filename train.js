/*
A-TASK: 
Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi 
parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
MASALAN countLetter("e", "engineer") 3ni return qiladi.

*/

// JAVOB

function countLetter(a, b) {
  let count = 0;
  const lowerLetter = a.toLowerCase();

  for (let i = 0; i < b.length; i++) {
    if (b[i].toLowerCase() === lowerLetter) {
      count++;
    }
    // else if (!b.includes(lowerLetter)) {
    //   return `${b} does not include ${a}`;
    // }
    else if (count === 0) {
      return `${b} does not include ${a}`;
    }
  }

  return `There are ${count} ${a} letters in the word of ${b}`;
}

console.log(countLetter("a", "ali"));
console.log(countLetter("a", "eli"));
console.log(countLetter("e", "engineer"));
console.log(countLetter("I", "I study in MIT"));

// console.log("Jack Ma maslahtlari");

// const list = [
//   "Yaxshi talaba bo'ling", // 0-20
//   "To'g'ri boshliq tanlang", // 20-30
//   "O'zingiz ishlashni boshlang", // 30-40
//   "Siz kuchli bo'gan narsalarni qiling", // 40-50
//   "Yoshlarga inverstitsiya qiling", // 50-60
//   "dam oling", // 60
// ];

// // CLLBACK FUNCTIONS
// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("Insert number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a < 20 && a <= 30) callback(null, list[1]);
//   else if (a < 30 && a <= 40) callback(null, list[2]);
//   else if (a < 40 && a <= 50) callback(null, list[3]);
//   else if (a < 50 && a <= 60) callback(null, list[4]);
//   else {
//     setInterval(function () {
//       callback(null, list[5]);
//     }, 5000);
//   }
// }

// console.log("passed here 0");
// maslahatBering(20, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log(data);
//   }
// });

// console.log("passed here 0");
// maslahatBering(70, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log(data);
//   }
// });

// ASYNC FUNCTIONS (DEFINE)
// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("Insert number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(list[5]);
//       }, 5000);
//     });
//     // setTimeout(function () {
//     //   return list[5];
//     // }, 5000);
//   }
// }

// CALL VIA THEN/CATCH
// console.log("Passed here 0");
// maslahatBering(35)
//   .then((data) => {
//     console.log("javob:", data);
//   })
//   .catch((err) => {
//     console.error("ERROR:", err);
//   });

// console.log("Passed here 1");

// CALL VIA ASYNC/AWAIT
// async function run() {
//   let javob = await maslahatBering(25);
//   console.log(javob);
//   javob = await maslahatBering(70);
//   console.log(javob);
//   javob = await maslahatBering(56);
//   console.log(javob);
// }
// run();
