// E-TASK:

// Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
// MASALAN: getReverse("hello") return qilsin "olleh"

function getReverse(a) {
  let reversedArray = a.split("").reverse();
  let reversedString = reversedArray.join("").toString();
  return reversedString;
}

console.log(getReverse("hello"));
console.log(getReverse("jurabek"));
console.log(getReverse("John"));
console.log(getReverse("MIT"));

// D-TASK:

// Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
// MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;

// function checkContent(firstString, secondString) {
//   if (firstString.length !== secondString.length) {
//     return false;
//   }

//   let toLowerfirstString = firstString.toLowerCase();
//   let toLowersecondString = secondString.toLowerCase();

//   for (let i = 0; i < toLowerfirstString.length; i++) {
//     let index = toLowersecondString.indexOf(toLowerfirstString[i]);
//     if (index === -1) {
//       return false;
//     } else {
//       toLowersecondString =
//         toLowersecondString.slice(0, index) +
//         toLowersecondString.slice(index + 1);
//     }
//   }

//   return true;
// }

// console.log(checkContent("mitgroup", "gmtiprou"));
// console.log(checkContent("jurabek", "akbeurj"));
// console.log(checkContent("asadbek", "ekbadsa"));
// console.log(checkContent("MIT", "ITM"));
// console.log(checkContent("korea", "eaokq"));
// console.log(checkContent("korea", "eaokqrs"));

// MITASK-C

// Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
// MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!

// class Shop {
//   constructor(non, lagmon, cola) {
//     this.products = {
//       non: non,
//       lagmon: lagmon,
//       cola: cola,
//     };
//   }

//   getCurrentTime() {
//     let now = new Date();
//     let hours = now.getHours();
//     let minutes = now.getMinutes();
//     return `${hours}:${minutes}`;
//   }

//   qoldiq() {
//     const { non, lagmon, cola } = this.products;
//     return `Hozir ${this.getCurrentTime()}da ${non} ta non, ${lagmon} ta lagmon va ${cola} ta cola bor.`;
//   }

//   sotish(product, quntity) {
//     let keysArray = Object.keys(this.products);
//     if (!keysArray.includes(product)) {
//       return `Bizda hozir ${product} yo'q`;
//     }
//     if (this.products[product] < quntity) {
//       return `Bizda yetarli miqdorda ${product} yo'q`;
//     }
//     this.products[product] -= quntity;
//     return `Biz ${this.getCurrentTime()}da ${quntity} ta ${product} sotdik`;
//   }

//   qabul(product, quantity) {
//     let keysArray = Object.keys(this.products);
//     if (!keysArray.includes(product)) {
//       return `Bizda hozir ${product} yo'q`;
//     }
//     this.products[product] += quantity;
//     return `Biz ${this.getCurrentTime()}da ${quantity} ta ${product} qabul qildik`;
//   }
// }

// const shop = new Shop(4, 5, 2);
// console.log(shop.qoldiq());
// console.log(shop.sotish("non", 3));
// console.log(shop.qoldiq());
// console.log(shop.qabul("cola", 3));
// console.log(shop.qoldiq());
// console.log(shop.qabul("pepsi", 3));
// console.log(shop.sotish("lagmon", 3));
// console.log(shop.qoldiq());

/*



B-TASK: 

Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.
*/

// function countDigits(a) {
//   let count = 0;

//   for (let i = 0; i < a.length; i++) {
//     if (!isNaN(parseInt(a[i]))) {
//       count++;
//     }
//   }

//   if (count === 0) {
//     return `There is no number in string`;
//   } else {
//     return count;
//   }
// }

// console.log(countDigits("ad2a54y79wet0sfgb9"));
// console.log(countDigits("ad2a54y"));
// console.log(countDigits("I study in MIT12"));

/*
A-TASK: 
Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi 
parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
MASALAN countLetter("e", "engineer") 3ni return qiladi.

*/

// JAVOB

// function countLetter(a, b) {
//   let count = 0;
//   const lowerLetter = a.toLowerCase();

//   for (let i = 0; i < b.length; i++) {
//     if (b[i].toLowerCase() === lowerLetter) {
//       count++;
//     }
//     // else if (!b.includes(lowerLetter)) {
//     //   return `${b} does not include ${a}`;
//     // }
//     else if (count === 0) {
//       return `${b} does not include ${a}`;
//     }
//   }

//   return `There are ${count} ${a} letters in the word of ${b}`;
// }

// console.log(countLetter("a", "ali"));
// console.log(countLetter("a", "eli"));
// console.log(countLetter("e", "engineer"));
// console.log(countLetter("I", "I study in MIT"));

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
// (err, data)
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
//     }, 2000);
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
