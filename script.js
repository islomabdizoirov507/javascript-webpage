'use strict';
// JS bo'yicha uchinchi amaliy dars, bunda alert orqali xabar chiqaramiz
// alert("Hello, welcome to the JavaScript example!");
// alert("This is a simple alert message.");
// alert("You can use alerts to display information to users.");

// JS bo'yicha to'rtinchi dars. Bunda Qiymatlar va o'zgaruvchilar bilan ishlashni o'rganamiz
// JS da qiymatlar va o'zgaruvchilarni yaratish va ulardan foydalanish mumkin. Quyidagi misolda, biz "name" va "age" o'zgaruvchilarini yaratamiz va ularni konsolga chiqaramiz.
// Bu misollarda biz "name" va "age" o'zgaruvchilarini yaratamiz va ularni konsolga chiqaramiz. Shuningdek, biz alert orqali ham xabar chiqarishimiz mumkin.
// Bu misollarda ko'rsatilgan John, 30 va shunga o'shash sonlar raqamlar ismlar va boshqalar qiymatlar sifatida ishlatiladi. Siz o'zingizning qiymatlaringizni o'zgartirishingiz mumkin va ular konsolga chiqariladi yoki alert orqali ko'rsatiladi.
// JS da o'zgaruvchilarni e'lon qilish uchun "let" yoki "const" kalit so'zlaridan foydalanish mumkin. "let" o'zgaruvchilarni yaratish uchun ishlatiladi, "const" esa o'zgarmas qiymatlarni yaratish uchun ishlatiladi. Quyidagi misolda, biz "name" va "age" o'zgaruvchilarini yaratamiz va ularni konsolga chiqaramiz.   
// JS da o'zgaruvchilarga nom berishda ba'zi qoidalar mavjud.
// O'zgaruvchi nomlari harflar, raqamlar va pastki chiziqlarni o'z ichiga olishi mumkin, lekin raqam bilan boshlanmasligi kerak. 
// O'zgaruvchi nomlari katta va kichik harflarga sezgir bo'lishi mumkin. 
// Shuningdek, o'zgaruvchi nomlari maxsus belgilarni o'z ichiga olmaydi va JavaScript kalit so'zlari bilan bir xil bo'lmasligi kerak. 
// Quyidagi misolda, biz "name" va "age" o'zgaruvchilarini yaratamiz va ularni konsolga chiqaramiz.   
//let name = "John";
//let age = 30;
//console.log(name);
//console.log(age);
//console.log("Name: " + name + ", Age: " + age);
//console.log(`Name: ${name}, Age: ${age}`);
//alert(`Name: ${name}, Age: ${age}`);
//alert("Name: " + name + ", Age: " + age);

// JS bo'yicha beshinchi dars. Bunda ma'lumot turlari bilan ishlashni o'rganamiz.
// JS da ma'lumot ikki asosiy turlari quyidagilarni o'z ichiga oladi: Primitive va Non-Primitive (Object). 
// Primitive ma'lumot turlari quyidagilarni o'z ichiga oladi: String, Number, Boolean, Null, Undefined va Symbol. 
// Non-Primitive ma'lumot turlari esa Object va Array ni o'z ichiga oladi. 
// Quyidagi misolda, biz turli ma'lumot turlarini yaratamiz va ularni konsolga chiqaramiz.
//let age = 25; // Number - sonlarni o'zida saqlovchi va ular bilan arifmetik amallarni bajarish imkonini beruvchi ma'lumot turi
//console.log("Age:", age);
//let name = "Alice"; // String - matnli ma'lumot turi va ular bilan turli amallarni bajarish imkonini beruvchi ma'lumot turi
//console.log("Name:", name);
//let isStudent = true; // Boolean - mantiqiy ma'lumot turi va ular bilan mantiqiy amallarni bajarish imkonini beruvchi ma'lumot turi
//console.log("Is Student:", isStudent);
//let address = null; // Null - qiymati yo'q bo'lgan ma'lumot turi va u bilan ishlash imkonini beruvchi ma'lumot turi
//console.log("Address:", address);
//let phoneNumber; // Undefined - qiymati belgilanmagan ma'lumot turi
//console.log("Phone Number:", phoneNumber);
//let uniqueId = Symbol("id"); // Symbol - unikal identifikator sifatida ishlatiladi
//console.log("Unique ID:", uniqueId);
//let bigNumber = BigInt("12345678901234567890"); // BigInt - juda katta sonlarni o'zida saqlovchi ma'lumot turi
//console.log("Big Number:", bigNumber);
//let person = { name: "Bob", age: 30 }; // Object - obyekt ma'lumot turi
//console.log("Person:", person);
//let numbers = [1, 2, 3, 4, 5]; // Array - massiv ma'lumot turi
//console.log("Numbers:", numbers);

// JS bo'yicha oltinchi dars. Bunda let, const va var bilan ishlashni o'rganamiz.
// JS da o'zgaruvchilarni e'lon qilish deb - o'zgaruvchilarni yaratish va ularga qiymat berish jarayonini tushunish mumkin.
// JS da o'zgaruvchilarni e'lon qilish uchun "let", "const" va "var" kalit so'zlaridan foydalanish mumkin. 
// "let" o'zgaruvchilarni yaratish uchun ishlatiladi, "const" esa o'zgarmas qiymatlarni yaratish uchun ishlatiladi.
// "var" esa eski usul bo'lib, hozirda kamroq ishlatiladi. Quyidagi misolda, biz "let", "const" va "var" kalit so'zlarini ishlatib o'zgaruvchilarni yaratamiz va ularni konsolga chiqaramiz.
//let name = "John"; // let - o'zgaruvchilarni yaratish uchun ishlatiladi
//const age = 30; // const - o'zgarmas qiymatlarni yaratish uchun ishlatiladi
//var city = "New York"; // var - eski usul, hozirda kamroq ishlatiladi
//console.log("Name:", name);
//console.log("Age:", age);
//console.log("City:", city);
//let nameGirl = "Alice"; // let - o'zgaruvchilarni yaratish uchun ishlatiladi
//const ageGirl = 25; // const - o'zgarmas qiymatlarni yaratish uchun ishlatiladi
//var cityGirl = "Los Angeles"; // var - eski usul, hozirda kamroq ishlatiladi
//console.log("Name:", nameGirl);
//console.log("Age:", ageGirl);
//console.log("City:", cityGirl);
//let nameBoy = "Bob"; // let - o'zgaruvchilarni yaratish uchun ishlatiladi
//const ageBoy = 28; // const - o'zgarmas qiymatlarni yaratish uchun ishlatiladi
//var cityBoy = "Chicago"; // var - eski usul, hozirda kamroq ishlatiladi
//console.log("Name:", nameBoy);
//console.log("Age:", ageBoy);
//console.log("City:", cityBoy);

// JS bo'yicha yettinchi dars. Bunda biz JS da mavjud operatorlar bilan ishlashni o'rganamiz.
// JS da operatorlar - bu ma'lumotlar ustida turli amallarni bajarish uchun ishlatiladigan maxsus belgilar yoki so'zlardir.
// JS da operatorlar turli turlarga bo'linadi, masalan: arifmetik operatorlar, taqqoslash operatorlari, mantiqiy operatorlar, tayinlash operatorlari va boshqalar. 
// Quyidagi misolda, biz arifmetik operatorlarni ishlatib, ikki sonni qo'shish, ayirish, ko'paytirish va bo'lish amallarini bajarishimiz mumkin.
// + qo'shadi, - ayiradi, * ko'paytiradi, / bo'ladi, % qoldiqni topadi.
// ** darajaga oshiradi, ++ qiymatni 1 ga oshiradi, -- qiymatni 1 ga kamaytiradi.
//const firstNumber = 10;
//const secondNumber = 5;

//console.log("Arifmetik operatorlar:");
//console.log("10 + 5 =", firstNumber + secondNumber); // 15
//console.log("10 - 5 =", firstNumber - secondNumber); // 5
//console.log("10 * 5 =", firstNumber * secondNumber); // 50
//console.log("10 / 5 =", firstNumber / secondNumber); // 2
//console.log("10 % 5 =", firstNumber % secondNumber); // 0
//console.log("10 ** 5 =", firstNumber ** secondNumber); // 100000
// Post-increment: avval eski qiymat qaytariladi, keyin qiymat 1 ga oshadi.
//let postIncrementNumber = 10;
//console.log("postIncrementNumber++ natijasi:", postIncrementNumber++); // 10
//console.log("Amaldan keyingi qiymat:", postIncrementNumber); // 11

// Pre-increment: avval qiymat 1 ga oshadi, keyin yangi qiymat qaytariladi.
//let preIncrementNumber = 10;
//console.log("++preIncrementNumber natijasi:", ++preIncrementNumber); // 11
//console.log("Amaldan keyingi qiymat:", preIncrementNumber); // 11

// Post-decrement: avval eski qiymat qaytariladi, keyin qiymat 1 ga kamayadi.
//let postDecrementNumber = 10;
//console.log("postDecrementNumber-- natijasi:", postDecrementNumber--); // 10
//console.log("Amaldan keyingi qiymat:", postDecrementNumber); // 9

// Pre-decrement: avval qiymat 1 ga kamayadi, keyin yangi qiymat qaytariladi.
//let preDecrementNumber = 10;
//console.log("--preDecrementNumber natijasi:", --preDecrementNumber); // 9
//console.log("Amaldan keyingi qiymat:", preDecrementNumber); // 9

// JS da solishtirish operatorlari - bu ikki qiymatni taqqoslash uchun ishlatiladigan operatorlardir.
// Ular quyidagilarni o'z ichiga oladi: ==, ===, !=, !==, >, <, >=, <=.
// Quyidagi misolda, biz solishtirish operatorlarini ishlatib, ikki sonни taqqoslashimiz mumkin.
//const a = 10;
//const b = 5;
//console.log("Taqqoslash operatorlari:");
//console.log("10 == 5:", a == b); // false - qiymat turini hisobga olmaydi, faqat qiymatlarni solishtiradi
//console.log("10 === 5:", a === b); // false - qiymati va turi bo'yicha ikki qiymatni solishtiradi
//console.log("10 != 5:", a != b); // true - ikki operator qiymatlari teng emasligini tekshiradi
//console.log("10 !== 5:", a !== b); // true - ikki operator qiymatlari teng emasligini tekshiradi
//console.log("10 > 5:", a > b); // true - birinchi operator ikkinchisidan katta ekanligini tekshiradi
//console.log("10 < 5:", a < b); // false - birinchi operator ikkinchisidan kichik ekanligini tekshiradi
//console.log("10 >= 5:", a >= b); // true - birinchi operator ikkinchisidan katta yoki teng ekanligini tekshiradi
//console.log("10 <= 5:", a <= b); // false - birinchi operator ikkinchisidan kichik yoki teng ekanligini tekshiradi

// JS da tayinlash operatorlari - bu o'zgaruvchilarga qiymat berish uchun ishlatiladigan operatorlardir. 
// Ular quyidagilarni o'z ichiga oladi: =, +=, -=, *=, /=, %=.
// Quyidagi misolda, biz tayinlash operatorlarini ishlatib, o'zgaruvchilarga qiymat berishimiz mumkin.
//let x = 10;
//let y = 5;
//let z = 0;
//console.log("Tayinlash operatorlari:");
//console.log("Dastlabki qiymatlar: x =", x, ", y =", y, ", z =", z);
//console.log("x = 10:", x = 10); // 10
//console.log("y = 5:", y = 5); // 5
//console.log("z = 0:", z = 0); // 0
//console.log("x = y:", x = y); // 5 - x = y chap tomonidagi qiymat o'ng tomondagi qiymatga tenglashtiriladi
//console.log("y = x:", y = x); // 10 - y = x chap tomonidagi qiymat o'ng tomondagi qiymatga tenglashtiriladi
//console.log("x += y:", x += y); // 15 - x = x + y chap va o'ng tomonidagi qiymatlar yig'indisi chap tomonga tayinlanadi
//console.log("y -= 2:", y -= 2); // 3 - y = y - 2 chap va o'ng tomonidagi qiymatlar ayirmasi chap tomonga tayinlanadi
//console.log("z *= x:", z *= x); // 0 - z = z * x chap va o'ng tomonidagi qiymatlar ko'paytmasi chap tomonga tayinlanadi
//console.log("x /= y:", x /= y); // 3 - x = x / y chap va o'ng tomonidagi qiymatlar bo'linmasi chap tomonga tayinlanadi
//console.log("y %= x:", y %= x); // 1 - y = y % x chap va o'ng tomonidagi qiymatlar qoldig'i chap tomonga tayinlanadi

// JS da sakkizinchi dars. Bun darsda bir JS da STRING bilan ishlashni o'rganamiz.
// JS da stringlar - bu matnli ma'lumotlarni ifodalash uchun ishlatiladigan ma'lumot turidir. 
// Stringlar qo'shtirnoq (" ") yoki apostrof (' ') ichida yoziladi.
// Ba'zi bir stringlar o'z ichida qo'shtirnoq yoki apostrofni o'z ichiga olishi mumkin. Bunday hollarda, siz escape belgisi (\) dan foydalanishingiz mumkin.
//let singleQuoteString = 'This is a string with a single quote (\') inside.';
//let doubleQuoteString = "This is a string with a double quote (\") inside.";
//let backtickString = `This is a string with a backtick (\`) inside.`;
//console.log(singleQuoteString);
//console.log(doubleQuoteString);
//console.log(backtickString);
// JS da stringlarni birlashtirish uchun + operatoridan foydalanish mumkin.
// Stringlarni birlahtish (concatenation) orqali yangi string yaratish mumkin. 
// Quyidagi misolda, biz ikki stringni birlashtiramiz va natijani konsolga chiqaramiz.
//let firstName = "John";
//let lastName = "Doe";
//let fullName = firstName + " " + lastName;  
//console.log("Full Name:", fullName); // Full Name: John Doe
// JS da stringlarni birlashtirish uchun template literal (shablonli string) dan foydalanish mumkin. 
// Template literal orqali o'zgaruvchilarni string ichida ishlatish mumkin.
//let age = 30;
//let greeting = `Hello, my name is ${firstName} ${lastName} and I am ${age} years old.`;
//console.log(greeting); // Hello, my name is John Doe and I am 30 years old. 
// JS da stringlarni uzunligini olish uchun length xususiyatidan foydalanish mumkin.
//let stringLength = fullName.length;
//console.log("Length of Full Name:", stringLength);
// JS da stringlarni katta harflarga yoki kichik harflarga o'zgartirish uchun toUpperCase() va toLowerCase() metodlaridan foydalanish mumkin.
//let upperCaseString = fullName.toUpperCase();
//let lowerCaseString = fullName.toLowerCase();
//console.log("Upper Case:", upperCaseString);
//console.log("Lower Case:", lowerCaseString);
// JS da stringlarni qidirish va almashtirish uchun indexOf(), lastIndexOf(), includes(), startsWith(), endsWith() va replace() metodlaridan foydalanish mumkin.
//let searchString = "Hello, welcome to the JavaScript world!";
//console.log("Index of 'welcome':", searchString.indexOf("welcome"));
//console.log("Last Index of 'o':", searchString.lastIndexOf("o"));
//console.log("Includes 'JavaScript':", searchString.includes("JavaScript"));
//console.log("Starts with 'Hello':", searchString.startsWith("Hello"));
//console.log("Ends with 'world!':", searchString.endsWith("world!"));
//let replacedString = searchString.replace("JavaScript", "JS");
//console.log("Replaced String:", replacedString);
// JS da stringlarni kesish (substring) va bo'lish (split) uchun substring() va split() metodlaridan foydalanish mumkin.
//let substringString = searchString.substring(7, 14); // 7-indeksdan 14-indeksgacha bo'lgan qismни kesib oladi
//console.log("Substring (7, 14):", substringString);
//let splitString = searchString.split(" "); // Bo'sh joy bo'yicha stringни bo'lish
//console.log("Split String:", splitString);


// JS da to'qqizinchi darsimiz. Bu darsda biz JS dagi mantiqiy operatorlar bilan ishlashni o'rganamiz.
// JS da mantiqiy operatorlar - bu mantiqiy qiymatlarni (true yoki false) qaytaradigan operatorlardir. 
// Ular quyidagilarni o'z ichiga oladi: && (va), || (yoki), ! (emas).
// Quyidagi misolda, biz mantiqiy operatorlarni ishlatib, turli shartlarni tekshiramiz va natijalarni konsolga chiqaramiz.
//const isAdult = true;
//const hasPermission = false;
// Mantiqiy AND operatori (&&) - ikkala shart ham true bo'lsa, natija true bo'ladi
//console.log("isAdult && hasPermission:", isAdult && hasPermission); // false
// Mantiqiy OR operatori (||) - ikkala shartdan biri true bo'lsa, natija true bo'ladi
//console.log("isAdult || hasPermission:", isAdult || hasPermission); // true
// Mantiqiy NOT operatori (!) - shartning qiymatini teskari qiladi
//console.log("!isAdult:", !isAdult); // false
//console.log("!hasPermission:", !hasPermission); // true
// Mantiqiy operatorlar bilan bir nechta shartlarni birlashtirish mumkin
//const isStudent = true;
//const isEmployed = false;
//console.log("isAdult && isStudent:", isAdult && isStudent); // true
//console.log("isAdult || isEmployed:", isAdult || isEmployed); // true
// Mantiqiy operatorlar shartlarni tekshirishda va qaror qabul qilishda foydalidir. 
// Ular dasturlashda keng qo'llaniladi, masalan, foydalanuvchi kirish huquqlarini tekshirish, ma'lumotlarni filtr qilish va boshqa mantiqiy operatsiyalarni bajarishda ishlatiladi.
// Quyidagi misolda, biz foydalanuvchi kirish huquqlarini tekshiramiz va natijani konsolga chiqaramiz.
//const isLoggedIn = true;
//const hasAccess = false;
//console.log("isLoggedIn && hasAccess:", isLoggedIn && hasAccess); // false
//console.log("isLoggedIn || hasAccess:", isLoggedIn || hasAccess); // true
// Mantiqiy operatorlar bilan ishlashda ehtiyot bo'lish kerak, chunki ular shartlarni tekshirishda va qaror qabul qilishda muhim rol o'ynaydi.
// Endi quyidagi misolni bajaramiz: unda foydalanuvchi Bootstrap kursini boshashi uchun avval HTML va CSS kurslarini tugatgan bo'lishi kerak. Agar foydalanuvchi HTML va CSS kurslarini tugatgan bo'lsa, u Bootstrap kursini boshlashi mumkin. Agar kurslardan faqat HTML tugatgan bo'lsa, unga CSS ni tugatish haqida xabar bering. Agar ikkala kurs ni ham tugatmagan bo'lsa avval ularni tugatish kerakligi haqida xabar bering.
//const hasCompletedHTML = true; // Foydalanuvchi HTML kursini tugatganmi?
//const hasCompletedCSS = false; // Foydalanuvchi CSS kursini tugatganmi?
//let message = "";
//if (hasCompletedHTML && hasCompletedCSS) {
//    message = "Siz Bootstrap kursini boshlashingiz mumkin.";
//} else if (hasCompletedHTML && !hasCompletedCSS) {
//    message = "Siz avval CSS kursini tugatishingiz kerak.";
//} else {
//    message = "Siz avval HTML va CSS kurslarini tugatishingiz kerak.";
//}
//console.log(message);


// JS da o'ninchi darsimiz. Bu darsda biz Turni (type) o'zgartirish operatorlari bilan ishlashni o'rganamiz.
// JS da turini o'zgartirish operatorlari - bu ma'lumot turini boshqa turga o'zgartirish uchun ishlatiladigan operatorlardir.
// Ular quyidagilarni o'z ichiga oladi: Number(), String(), Boolean().
// Quyidagi misolda, biz turini o'zgartirish operatorlarini ishlatib, turli ma'lumot turlarini boshqa turlarga o'zgartiramiz va natijalarni konsolga chiqaramiz.
//let stringNumber = "123"; // String
//let convertedNumber = Number(stringNumber); // Stringni Numberga o'zgartirish
//console.log("Converted Number:", convertedNumber); // 123
//let numberValue = 456; // Number
//let convertedString = String(numberValue); // Numberни Stringga o'zgartirish
//console.log("Converted String:", convertedString); // "456"
//let booleanValue = true; // Boolean
//let convertedBooleanString = String(booleanValue); // Booleanni Stringga o'zgartirish
//console.log("Converted Boolean to String:", convertedBooleanString); // "true"
//let stringValue = "false"; // String
//let convertedBoolean = Boolean(stringValue); // Stringни Booleanga o'zgartirish
//console.log("Converted String to Boolean:", convertedBoolean); // true (har qanday bo'sh bo'lmagan string true ga o'zgartiriladi)
// Quyidagi misolda type coercion (turini avtomatik o'zgartirish) orqali turli ma'lumot turlarini birlashtiramiz va natijalarni konsolga chiqaramiz.
//let mixedValue1 = "The answer is: " + 42;
//console.log("Mixed Value 1:", mixedValue1); // "The answer is: 42"
//let mixedValue2 = 10 + " apples";
//console.log("Mixed Value 2:", mixedValue2); // "10 apples"
//let mixedValue3 = true + 1;
//console.log("Mixed Value 3:", mixedValue3); // 2 (true 1 ga o'zgartiriladi)
//let mixedValue4 = false + " is false";
//console.log("Mixed Value 4:", mixedValue4); // "false is false" (false "false" ga o'zgartiriladi)
// Type coercion (turini avtomatik o'zgartirish) dasturlashda foydalidir, lekin ehtiyot bo'lish kerak, chunki u kutilmagan natijalarga olib kelishi mumkin.
// Avto Number conversion (avtomatik raqamga o'zgartirish) orqali turli ma'lumot turlarini raqamga o'zgartirish mumkin. Quyidagi misolda, biz turli ma'lumot turlarini raqamga o'zgartiramiz va natijalarni konsolga chiqaramiz.
//let autoNumber1 = "100" - 50; // Stringни Numberga avtomatик o'zgartirish
//console.log("Auto Number 1:", autoNumber1); // 50
//let autoNumber2 = "200" * 2; // Stringни Numberga avtomatик o'zgartirish
//console.log("Auto Number 2:", autoNumber2); // 400
//let autoNumber3 = "300" / 3; // Stringни Numberga avtomatik o'zgartirish
//console.log("Auto Number 3:", autoNumber3);
// JS dagi Truthy va Falsy qiymatlar - bu mantiqiy qiymatlarni (true yoki false) qaytaradigan qiymatlardir.
// Falsy qiymatlar quyidagilarni o'z ichiga oladi: false, 0, -0, 0n, "", null, undefined, NaN.
// Boshqa barcha qiymatlar Truthy hisoblanadi. Quyidagi misolda, biz turli qiymatlarni tekshiramiz va ularning Truthy yoki Falsy ekanligini konsolga chiqaramiz.
//let falsyValues = [false, 0, -0, 0n, "", null, undefined, NaN];
//let truthyValues = [true, 1, -1, "hello", [], {}];

//falsyValues.forEach((value) => {
//    console.log(`${value} is falsy: ${Boolean(value) === false}`);
//});
//truthyValues.forEach((value) => {
//    console.log(`${value} is truthy: ${Boolean(value) === true}`);
//});
//Falsy qiymatlar
//console.log(Boolean(false)); // false
//console.log(Boolean(0)); // false
//console.log(Boolean(-0)); // false
//console.log(Boolean(0n)); // false
//console.log(Boolean("")); // false
//console.log(Boolean(null)); // false
//console.log(Boolean(undefined)); // false
//console.log(Boolean(NaN)); // false
//Truthy qiymatlar
//console.log(Boolean(true)); // true
//console.log(Boolean(1)); // true
//console.log(Boolean(-1)); // true
//console.log(Boolean("hello")); // true
//console.log(Boolean([])); // true
//console.log(Boolean({})); // true

// JS da o'n birinchi darsimiz. Bu darsda biz JS dagi funksyiya va uni e'lon qilishni ko'ramiz.
// JS da funksiyalar - bu bir yoki bir nechta amallarni bajaradigan kod bloklari bo'lib, ular kerak bo'lganda chaqiriladi.
// Funksiyalarni yaratish va chaqirish orqali kodni qayta ishlatish va modulizatsiya qilish mumkin.
// Funksiyalarni e'lon qilish uchun function kalit so'zidan foydalaniladi. Quyidagi misolda, biz oddiy funksiyani yaratamiz va uni chaqiramiz.
// function greet(name) {
// return `Hello, ${name}!`;
//}
// console.log(greet("Alice")); // Hello, Alice!
// function add(a, b) {
// return a + b;
// }
// console.log(add(5, 3)); // 8
// const multiply = function (x, y) {
//    return x * y;
//}
// console.log(multiply(4, 6)); // 24
// const divide = (m, n) => {
//    if (n === 0) {
//        return "Error: Division by zero is not allowed.";
//    }
//   return m / n;
// };
// console.log(divide(10, 2)); // 5
// console.log(divide(10, 0)); // Error: Division by zero is not allowed.
// Agar biz funksiyani chaqirmasak, u bajarilmaydi. Funksiyalarni chaqirish orqali ular bajariladi va natija qaytariladi.
// Funksiyani chaqirish bilan e'lon qilishning nima farqi bor? Funksiyani e'lon qilish (function declaration) orqali funksiyani yaratish va uni chaqirish mumkin. 
// Funksiyani chaqirish (function invocation) orqali esa funksiyani bajarish va natija olish mumkin.
// Quyidagi misolda, biz funksiyani e'lon qilamiz va uni chaqiramiz. 
// Funksiyani e'lon qilish orqali uni chaqirish mumkin, lekin funksiyani chaqirish orqali uni bajarish mumkin.
// function sayHello() {
//     console.log("Hello!");
// }
// sayHello(); // Hello!
// Funksiyani e'lon qilish turlari mavjud, masalan: function declaration, function expression va arrow function. Har bir turda funksiyani yaratish va chaqirish usuli farq qiladi.
// Function declaration orqali funksiyani yaratish va chaqirish mumkin. Function expression orqali esa funksiyani o'zgaruvchi sifatida yaratish va chaqirish mumkin. Arrow function esa qisqa sintaksis bilan funksiyani yaratish imkonini beradi.
// Quyidagi misolda, biz function declaration, function expression va arrow function turlarini ishlatib, funksiyalarni yaratamiz va chaqiramiz.
// function declarationExample() {
//     return "This is a function declaration.";
// }
// console.log(declarationExample()); // This is a function declaration.
// function murakkabFunction(a, b, c, d, e, f, g, h, i, j) {
//    return a + b + c + d + e + f + g + h + i + j;
//}
// console.log(murakkabFunction(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // 55

// JS da o'n ikkinchi darsimiz. Bu darsda biz funksiyLrni FUnction expression va arrow function orqali yaratishni ko'ramiz.
// Function expression orqali funksiyani yaratish va chaqirish mumkin.
// Function expression - bu funksiyani o'zgaruvchi sifatida yaratish va chaqirish imkonini beruvchi usuldir.
// Bu usulda, funksiyani yaratish va chaqirish uchun o'zgaruvchi nomi ishlatiladi.
// Quyidagi misolda, biz function expression orqali funksiyani yaratamiz va uni chaqiramiz.
// const expressionExample = function () {
//     return "This is a function expression.";
// };
// console.log(expressionExample()); // This is a function expression.
// let gravitationEquation = function (mass, gravity) {
//     return mass * gravity;
//}
// console.log(gravitationEquation(10, 9.8)); // 98
// console.log(gravitationEquation(5, 9.8)); // 49
// Arrow function orqali funksiyani yaratish va chaqirish mumkin.
// Arrow function - bu qisqa sintaksis bilan funksiyani yaratish imkonini beruvchi usuldir.
// Bu usulda, funksiyani yaratish va chaqirish uchun o'zgaruvchi nomi ishlatiladi.
// Arrow function orqali funksiyani yaratish uchun => belgisi ishlatiladi. 
// Arrow function orqali e'lon qilishning qulayligi shundaki, u qisqa sintaksis bilan funksiyani yaratish imkonini beradi va this kontekstini saqlaydi.
// Agar funksiya tanasi bitta ifodadan iborat bo'lsa, return kalit so'zini ishlatmasdan natijani qaytarish mumkin. Agar funksiya tana si bir nechta ifodadan iborat bo'lsa, return kalit so'zini ishlatish kerak.
// Quyidagi misolda, biz arrow function orqali funksiyani yaratamiz va uni chaqiramiz.
// const arrowExample = () => {
//    return "This is an arrow function.";
//}
// console.log(arrowExample()); // This is an arrow function.
// const square = (x) => {
//     return x * x;
// }
// console.log(square(5)); // 25
// const cube = (x) => x * x * x;
// console.log(cube(3)); // 27

// JS da o'n uchinchi darsimiz. Bu darsda biz funksiyalar bo'yicha amaliyotni bajarib ko'ramiz. 
// Bu amaliyotda biz turli funksiyalarni yaratamiz va ularni chaqiramiz.
// 1 - misol: Berilgan sonning toq yoki juft ekanligini tekshiradigan funksiya yaratish va uni chaqirish.
// Function declaration
//function isEvenOrOdd(number) {
//    if (number % 2 === 0) {
//        return `${number} is even.`;
//    } else {
//        return `${number} is odd.`;
//    }
//}
//console.log(isEvenOrOdd(10));
//console.log(isEvenOrOdd(11));
//console.log(isEvenOrOdd(111122233366999)); // 111122233366999 is odd.
// Function expression
//const isEvenOrOddExpression = function (number) {
//    if (number % 2 === 0) {
//        return `${number} is even.`;
//    } else {
//        return `${number} is odd.`;
//    }
//};
//console.log(isEvenOrOddExpression(20));
//console.log(isEvenOrOddExpression(21));
//console.log(isEvenOrOddExpression(111122233366999));
// Arrow function
//const isEvenOrOddArrow = (number) => {
//    if (number % 2 === 0) {
//        return `${number} is even.`;
//    } else {
//        return `${number} is odd.`;
//    }
//};
//console.log(isEvenOrOddArrow(30));
//console.log(isEvenOrOddArrow(31));
//console.log(isEvenOrOddArrow(111122233366999));
// 2-misol: Berilgan ikkita sondan kattasini topadigan funksiya yaratish va uni chaqirish.
// Function declaration
//function findMax(a, b) {
//    if (a > b) {
//        return a;
//    } else {
//        return b;
//    }
//}
//console.log(findMax(10, 20)); // 20
//console.log(findMax(30, 25)); // 30
// Function expression
//const findMaxExpression = function (a, b) {
//    if (a > b) {
//        return a;
//    } else {
//        return b;
//    }
//};
//console.log(findMaxExpression(10, 20)); // 20
//console.log(findMaxExpression(30, 25)); // 30
// Arrow function
//const findMaxArrow = (a, b) => {
//    if (a > b) {    
//        return a;
//    } else {
//        return b;
//    }
//};
//console.log(findMaxArrow(10, 20)); // 20
//console.log(findMaxArrow(30, 25)); // 30
// 3-misol: Berilgan sonning teskarisini hisoblaydigan funksiya yaratish va uni chaqirish.
// Function declaration
//function findInverse(number) {
//    return -number;
//}
//console.log(findInverse(10)); // -10
//console.log(findInverse(-20)); // 20
// Function expression
//const findInverseExpression = function (number) {   
//    return -number;
//}
//console.log(findInverseExpression(10)); // -10
//console.log(findInverseExpression(-20)); // 20
// Arrow function
//const findInverseArrow = (number) => -number;
//console.log(findInverseArrow(10)); // -10
//console.log(findInverseArrow(-20)); // 20
// 1-Murakkab misol: Berilgan sonning faktorialini hisoblaydigan funksiya yaratish va uni chaqirish.
// Function declaration
//function factorial(n) {
//    if (n === 0 || n === 1) {
//        return 1;
//    }
//    let result = 1;
//    for (let i = 2; i <= n; i++) {
//        result *= i;
//    }
//    return result;
//}
//console.log(factorial(5)); // 120
//console.log(factorial(0)); // 1
//console.log(factorial(1)); // 1
//    return result;
//}   
//console.log(factorial(5)); // 120
//console.log(factorial(0)); // 1
//console.log(factorial(1)); // 1
// Function expression
//const factorialExpression = function (n) {
//    if (n === 0 || n === 1) {
//        return 1;
//    }
//    let result = 1;
//    for (let i = 2; i <= n; i++) {
//        result *= i;
//    }
//    return result;
//}
//console.log(factorialExpression(5)); // 120
//console.log(factorialExpression(0)); // 1
//console.log(factorialExpression(1)); // 1
// Arrow function
//const factorialArrow = (n) => {
//    if (n === 0 || n === 1) {
//        return 1;
//    }
//    return n * factorialArrow(n - 1);
//};
//console.log(factorialArrow(5)); // 120
//console.log(factorialArrow(0)); // 1
//console.log(factorialArrow(1)); // 1
// 2-Murakkab misol: Berilgan sonning raqamlar yig'indisini hisoblaydigan funksiya yaratish va uni chaqirish.
// Function declaration
//function sumOfDigits(num) {
//    let sum = 0;
//    while (num > 0) {
//        sum += num % 10;
//        num = Math.floor(num / 10);
//    }
//    return sum;
//}
//console.log(sumOfDigits(12345)); // 15
//console.log(sumOfDigits(9876)); // 30
// Function expression
//const sumOfDigitsExpression = function (num) {
//    let sum = 0;
//    while (num > 0) {
//        sum += num % 10;
//        num = Math.floor(num / 10);
//    }
//    return sum;
//};
//console.log(sumOfDigitsExpression(12345)); // 15
//console.log(sumOfDigitsExpression(9876)); // 30
// Arrow function
//const sumOfDigitsArrow = (num) => {
//    let sum = 0;
//    while (num > 0) {
//        sum += num % 10;
//        num = Math.floor(num / 10);
//    }
//    return sum;
//};
//console.log(sumOfDigitsArrow(12345)); // 15
//console.log(sumOfDigitsArrow(9876)); // 30

// JS da o'n to'rtinchi darsimiz. Bu darsda bir JS da Array bilan ishlashni o'rganamiz.
// JS da arraylar - bu bir nechta qiymatlarni bitta o'zgaruvchi ichida saqlash imkonini beruvchi ma'lumot turidir. 
// Arraylar ikki xil usulda yaratilishi mumkin: array literal va array constructor orqali. Arraylar indekslar orqali qiymatlarga murojaat qilish imkonini beradi.
// Arraylar turli ma'lumot turlarini o'z ichiga olishi mumkin, masalan: sonlar, stringlar, boolean qiymatlar, boshqa arraylar va hatto funksiyalar. 
// Quyidagi misolda, biz arraylarni yaratamiz va ularni konsolga chiqaramiz.
//const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
//console.log("Fruits Array:", fruits);
//const numbers = [1, 2, 3, 4, 5];
//console.log("Numbers Array:", numbers);
//const mixedArray = [1, "Two", true, null, undefined, [1, 2, 3], { key: "value" }];
//console.log("Mixed Array:", mixedArray);
// Array elementlariga indekslar orqali murojaat qilish mumkin. Indekslar 0 dan boshlanadi. Quyidagi misolda, biz array elementlariga indekslar orqali murojaat qilamiz va ularни konsolga chiqaramiz.
//console.log("First Fruit:", fruits[0]);
//console.log("Second Fruit:", fruits[1]);
//console.log("Third Fruit:", fruits[2]);
//console.log("Fourth Fruit:", fruits[3]);
//console.log("Fifth Fruit:", fruits[4]);
// Arrayga yangi element qo'shish uchun push() va unshift() metodidan foydalanish mumkin. Bu metod array oxiriga yangi element qo'shadi. 
// Quyidagi misolda, biz arrayga yangi element qo'shamiz va natijani konsolga chiqaramiz.
//fruits.push("Fig");
//console.log("Fruits Array after push:", fruits);
//fruits.unshift("Grape");
//console.log("Fruits Array after unshift:", fruits);
// Arraydan elementni olib tashlash uchun pop() va shift() metodidan foydalanish mumkin. Bu metod array oxiridagi yoki boshidagi elementni olib tashlaydi.
// Quyidagi misolda, biz arraydan elementni olib tashlaymiz va natijani konsolga chiqaramiz.
//const deletedFruit = fruits.pop();
//console.log("Deleted Fruit:", fruits);
//console.log("Deleted Fruit:", deletedFruit);
//const deletedFirstFruit = fruits.shift();
//console.log("Deleted First Fruit:", fruits);
//console.log("Fruits Array after shift:", fruits);
// Array elementlarini o'zgartirish uchun indekslar orqali murojaat qilish mumkin. Quyidagi misolda, biz array elementlarini o'zgartiramiz va natijani konsolga chiqaramiz.
//fruits[0] = "Honeydew";
//console.log("Fruits Array after changing first element:", fruits);
// Array uzunligini olish uchun length xususiyatidan foydalanish mumkin. Quyidagi misolda, biz array uzunligini olamiz va natijani konsolga chiqaramiz.
//console.log("Length of Fruits Array:", fruits.length);
//console.log("Length of Numbers Array:", numbers.length);
//console.log("Length of Mixed Array:", mixedArray.length);
// JS da Arraylar quyidagi maqsadda ishlatiladi: ma'lumotlarni saqlash, tartiblash, qidirish, filtr qilish, xaritalash va boshqa ko'plab amallarni bajarish. 
// Arraylar dasturlashda keng qo'llaniladi va ular bilan ishlash uchun turli metodlar mavjud.


// Bugun o'n beshunchi darsimiz. Bu darsda Array metodlari haqida gaplashamiz. 
// Array metodlari - bu arraylar bilan ishlash uchun ishlatiladigan metodlardir. 
// Ular array elementlarini qo'shish, olib tashlash, tartiblash, qidirish, filtr qilish va boshqa ko'plab amallarni bajarishga imkon beradi.
// Quyidagi misolda, biz array metodlarini ishlatib, turli amallarni bajarishimiz mumkin.
// concat() metodi - bu ikki yoki undan ortiq arraylarni birlashtirish imkonini beradi. 
// Quyidagi misolda, biz contact() metodini ishlatib, ikki arrayni birlashtiramiz va natijani konsolga chiqaramiz.
//const array1 = [2, 3, 1, 7];
//const array2 = [6, 5, 4,9];
///const result = array1.concat(array2);
//console.log("Combined Array:", result); // [1, 2, 3, 4, 5, 6]
// indexOf() metodi - bu array ichida berilgan qiymatning indeksini topish imkonini beradi. Agar qiymat topilmasa, -1 qaytaradi. 
// Quyidagi misolda, biz indexOf() metodini ishlatib, array ichida berilgan qiymatning indeksini topamiz va natijani konsolga chiqaramiz.
//const freshFruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
//const indexOfCherry = freshFruits.indexOf("Cherry");
//console.log("Index of Cherry:", indexOfCherry);
// find() metodi - bu array ichida berilgan shartga mos keladigan birinchi elementni topish imkonini beradi. 
// Agar element topilmasa, undefined qaytaradi.
//const foundFruit = freshFruits.find(fruit => fruit === "Cherry");
//console.log("Found Fruit:", foundFruit); // Cherry
// filter() metodi - berilgan shartni bajargan elementlarnisaralab olib yangi massiv yaratadi.
// Quiyidagi misolda filter() metodining ishlashini ko'rishingiz mumkin.
//const filterNumber = number => number > 4;
//const filteredNumber = result.filter(filterNumber);
//console.log("Filtered Numbers as new massive:", filteredNumber); // 5, 6, 7, 9;
// map() metodi - har bir massiv elementi uchun funksiyanichaqirib yangi array yaratadi.
// Quyidagi misol yordamida map() metodining ishlashini ko'rishingiz mumkin.
//const mapNumber = number => "Son:" + number;
//const mappedNumber = result.map(mapNumber);
//console.log('Mapped numbers as new massive', mappedNumber)

// Bugun o'n oltinchi darsimiz. Bu darsda biz JS da Object bilan ishlashni o'rganamiz.
// JS da objectlar - bu kalit-qiymat juftliklarini saqlash imkonini beruvchi ma'lumot turidir.
// Objectlar turli ma'lumot turlarini o'z ichiga olishi mumkin, masalan: sonlar, stringlar, boolean qiymatlar, boshqa objectlar va hatto funksiyalar.
// Objectlar kalitlar orqali qiymatlarga murojaat qilish imkonini beradi. Kalitlar string yoki symbol bo'lishi mumkin.
// Quyidagi misolda, biz objectlarni yaratamiz va ularni konsolga chiqaramiz.
//const person = {
//    name: "John",
//    age: 30,
//    isStudent: true,
//};
//console.log("Person Object:", person);
// Object elementlariga kalitlar orqali murojaat qilish mumkin. ularni dot (nuqta) va bracket (qavs) notatsiyasi orqali chaqirish mumkin. Quyidagi misolda, biz object elementlariga kalitlar orqali murojaat qilamiz va natijani konsolga chiqaramiz.
//console.log("Person Name:", person.name); // John
//console.log("Person Age:", person.age); // 30
//console.log("Is Person a Student?:", person.isStudent); // true
//console.log("Person Name (Bracket Notation):", person["name"]); // John
//console.log("Person Age (Bracket Notation):", person["age"]); // 30
//console.log("Is Person a Student? (Bracket Notation):", person["isStudent"]); // true
// Objectga yangi element qo'shish uchun dot yoki bracket notatsiyasidan foydalanish mumkin. Quyidagi misolda, biz objectga yangi element qo'shamiz va natijani konsolga chiqaramiz.
//person.gender = "Male";
//console.log("Person Object after adding gender:", person);
//person["country"] = "USA";
//console.log("Person Object after adding country:", person); 
// Ichma-ich objectlar yaratish va ularga murojaat qilish mumkin. Quyidagi misolda, biz ichma-ich object yaratamiz va ularga murojaat qilamiz.
//const student = {
//    name: "Alice",
//    age: 22,
//    address: {
//        street: "123 Main St",
//        city: "New York",
//        country: "USA",
//    },
//};
//console.log("Student Object:", student);
//console.log("Student Name:", student.name);
//console.log("Student Address:", student.address);
//console.log("Student City:", student.address.city);
//console.log("Student Country:", student.address.country);

// Bugun o'n yettinchi darsimiz. Bu darsda biz JS da Object metodlari bilan ishlashni o'rganamiz.
// Object metodlari - bu objectlar bilan ishlash uchun ishlatiladigan metodlardir. 
// Ular object elementlarini qo'shish, olib tashlash, tartiblash, qidirish, filtr qilish va boshqa ko'plab amallarni bajarishga imkon beradi.
// object metodlarida this kalit so'zi ishlatiladi, u objectning o'ziga murojaat qilish imkonini beradi.
// 1-misol: this kalit so'zi yordamida object elementlariga murojaat qilish. Quyidagi misolda, biz this kalit so'zi yordamida object elementlariga murojaat qilamiz va natijani konsolga chiqaramiz.
//const car = {
//    brand: "Toyota",
//    model: "Camry",
//    year: 2020,
//    getCarInfo: function () {
//        return `Car: ${this.brand} ${this.model}, Year: ${this.year}`;
//    }   
//};
//console.log("Car Info:", car.getCarInfo()); // Car: Toyota Camry, Year: 2020
// Object metodlari quyidagilarni o'z ichiga oladi: Object.keys(), Object.values(), Object.entries(), Object.assign(), Object.freeze(), Object.seal() va boshqa ko'plab metodlar.
// 2-misol: Object.keys() metodi yordamida object kalitlarini olish. Quyidagi misolda, biz Object.keys() metodini ishlatib, object kalitlarini olamiz va natijani konsolga chiqaramiz.
//const personInfo = {
//    name: "Bob",
//    age: 25,
//    isStudent: false,
//};
//const keys = Object.keys(personInfo);
//console.log("Person Info Keys:", keys); // ["name", "age", "isStudent"]
// 3-misol: Object.values() metodi yordamida object qiymatlarini olish. Quyidagi misolda, biz Object.values() metodini ishlatib, object qiymatlarini olamiz va natijani konsolga chiqaramiz.
//const values = Object.values(personInfo);
//console.log("Person Info Values:", values); // ["Bob", 25, false]
// 4-misol: Object.entries() metodi yordamida object kalit-qiymat juftliklarini olish. Quyidagi misolda, biz Object.entries() metodini ishlatib, object kalit-qiymat juftliklarini olamiz va natijani konsolga chiqaramiz.
//const entries = Object.entries(personInfo);
//console.log("Person Info Entries:", entries); // [["name", "Bob"], ["age", 25], ["isStudent", false]]
// 5-misol: Object.assign() metodi yordamida objectlarni birlashtirish. Quyidagi misolda, biz Object.assign() metodini ishlatib, ikki objectni birlashtiramiz va natijani konsolga chiqaramiz.
//const target = { a: 1, b: 2 };
//const source = { b: 4, c: 5 };
//const merged = Object.assign(target, source);
//console.log("Merged Object:", merged); // { a: 1, b: 4, c: 5 }
// 6-misol: Object.freeze() metodi yordamida objectni o'zgarmas qilish. Quyidagi misolda, biz Object.freeze() metodini ishlatib, objectni o'zgarmas qilamiz va natijani konsolga chiqaramiz.
//const frozenObject = Object.freeze({ a: 1, b: 2 });
//frozenObject.a = 10; // O'zgartirish amalga oshmaydi
//console.log("Frozen Object:", frozenObject); // { a: 1, b: 2 }
// 7-misol: Object.seal() metodi yordamida objectni faqat mavjud kalitlarini o'zgartirishga ruxsat berish. Quyidagi misolda, biz Object.seal() metodini ishlatib, objectni faqat mavjud kalitlarini o'zgartirishga ruxsat beramiz va natijani konsolga chiqaramiz.
//const sealedObject = Object.seal({ a: 1, b: 2 });
//sealedObject.a = 10; // O'zgartirish amalga oshadi
//sealedObject.c = 5; // Yangi kalit qo'shish amalga oshmaydi
//console.log("Sealed Object:", sealedObject); // { a: 10, b: 2 }

// Ushbu qismda yuqoridagi object metodlari bo'yicha interaktiv demo funksiyalarini yaratish mumkin.
// Masalan:
// function demoObjectEntries(outputEl) {
//     const personInfo = { name: "Bob", age: 25, isStudent: false };
//     const entries = Object.entries(personInfo);
//     printLines(outputEl, entries.map(entry => `${entry[0]}: ${entry[1]}`));
// }
//
// function demoObjectAssign(outputEl) {
//     const target = { a: 1, b: 2 };
//     const source = { b: 4, c: 5 };
//     const merged = Object.assign(target, source);
//     printLines(outputEl, [`Merged Object: ${JSON.stringify(merged)}`]);
// }
//
// function demoObjectFreeze(outputEl) {
//     const frozenObject = Object.freeze({ a: 1, b: 2 });
//     frozenObject.a = 10; // O'zgartirish amalga oshmaydi
//     printLines(outputEl, [`Frozen Object: ${JSON.stringify(frozenObject)}`]);
// }
//
// function demoObjectSeal(outputEl) {
//     const sealedObject = Object.seal({ a: 1, b: 2 });
//     sealedObject.a = 10; // O'zgartirish amalga oshadi
//     sealedObject.c = 5; // Yangi kalit qo'shish amalga oshmaydi
//     printLines(outputEl, [`Sealed Object: ${JSON.stringify(sealedObject)}`]);
// }

// Bugun o'n sakkizinchi dars: Bu darsda biz if-else shart operatorini o'rganamiz.
// Bunda biz birinchi bo'lib JavaScript dasturlash tilidagi conditional statements, 
// ya'ni if-else shart operatorini o'rganamiz.
// Conditional statement deb - dastur bajarilishida shartga bog'liq ravishda turli yo'llarni tanlash imkonini beruvchi konstruktsiya tushuniladi.
// JavaScriptda 2 ta asosiy conditional statement mavjud: if-else va switch-case.
// if statement shart bajarilsa, kod blokini bajaradi. Agar shart bajarilmasa, kod blokini o'tkazib yuboradi.
// if statement 3 qismdan iborat: shart (condition), kod bloki (code block) va else qismi (optional).
// Misol:
// if (shart) {
//     // shart bajarilganda bajariladigan kod
// } else {
//     // shart bajarilmaganda bajariladigan kod
// }
// Ushbu misol if-else shart operatorining ishlashini ko'rsatadi.
// Endi biz ushbu if-else shart operatorini interaktiv demo sifatida ko'rib chiqamiz.
//function demoIfElse(outputEl) {
//    const age = 20;
//    let message;
//    if (age >= 18) {
//        message = "Siz kattasiz.";
//    } else {
//        message = "Siz voyaga yetmagansiz.";
//    }
//    printLines(outputEl, [message]);
//}
// Ushbu demo funksiyasi foydalanuvchining yoshiga qarab mos xabarni chiqaradi.
// Ushbu funksiyani chaqirish orqali if-else shart operatorining ishlashini interaktiv tarzda ko'rish mumkin.
// Masalan:
//demoIfElse(document.querySelector(".output"));
// Natija sahifadagi .output blokida ko'rsatiladi.
// Ushbu kod if-else shart operatorining ishlashini interaktiv tarzda ko'rsatadi.

// Bugun o'n to'qqizinchi dars: Bu darsda biz switch-case shart operatorini o'rganamiz.
// Switch-case shart operatori bir nechta shartlarni tekshirish va mos keladigan kod blokini bajarish imkonini beradi.
// Misol:
// switch (ifoda) {
//     case qiymat1:
//         // qiymat1 ga mos keladigan kod
//         break;
//     case qiymat2:
//         // qiymat2 ga mos keladigan kod
//         break;
//     default:
//         // hech qaysi case ga mos kelmasa bajariladigan kod
// }
// Ushbu misol switch-case shart operatorining ishlashini ko'rsatadi.
// Endi biz ushbu switch-case shart operatorini interaktiv demo sifatida ko'rib chiqamiz.
//function demoSwitchCase(outputEl) {
//    const day = 3;
//    let message;
//    switch (day) {
//        case 1:
//            message = "Bugun dushanba.";
//            break;
//        case 2:
//            message = "Bugun seshanba.";
//            break;
//        case 3:
//            message = "Bugun chorshanba.";
//            break;
//        default:
//            message = "Hafta kuni noma'lum.";
//    }
//    printLines(outputEl, [message]);
//}
// Ushbu demo funksiyasi haftaning kuniga qarab mos xabarni chiqaradi.
// Ushbu funksiyani chaqirish orqali switch-case shart operatorining ishlashini interaktiv tarzda ko'rish mumkin.
// Masalan:
//demoSwitchCase(document.querySelector(".output"));
// Natija sahifadagi .output blokida ko'rsatiladi.
// Ushbu kod switch-case shart operatorining ishlashini interaktiv tarzda ko'rsatadi.
// Endi biz Switch-Case shart operatori yordamida murakkab shartlarni ham tekshiradigan interaktiv demo yaratishimiz mumkin.
// Masalan, haftaning kuniga qarab turli xabarlarni chiqaradigan murakkab switch-case demo yaratishimiz mumkin.
//function complexSwitchCaseDemo(outputEl) {
//    const day = 3;
//    const isHoliday = false;
//    let message;
//    switch (day) {
//        case 1:
//            message = "Bugun dushanba.";
//            break;
//        case 2:
//            message = "Bugun seshanba.";
//            break;
//        case 3:
//            message = "Bugun chorshanba.";
//            break;
//        default:
//            message = "Hafta kuni noma'lum.";
//    }
//    if (isHoliday) {
//        message += " Bugun dam olish kuni.";
//    }
//    printLines(outputEl, [message]);
//}
// Ushbu demo funksiyasi haftaning kuniga va dam olish kuniga qarab mos xabarni chiqaradi.
// Masalan:
//complexSwitchCaseDemo(document.querySelector(".output"));



// ==========================================================================
// Quyidagi qism yuqoridagi (izohlangan / comment qilingan) darslar asosida
// tuzilgan interaktiv veb-sahifa uchun demo funksiyalardir.
// Har bir funksiya tegishli lesson bo'limidagi "Ishga tushirish" tugmasi
// bosilganda chaqiriladi va natijani sahifada .output blokiga chiqaradi.
// ==========================================================================

function printLines(outputEl, lines) {
    outputEl.textContent = lines.join("\n");
}

const demos = {
    // 3-dars: alert
    alert() {
        alert("Hello, welcome to the JavaScript example!");
        return ["alert() chaqirildi. Ekranda xabar oynasini ko'rgan bo'lishingiz kerak."];
    },

    // 4-dars: qiymatlar va o'zgaruvchilar
    variables() {
        let name = "John";
        let age = 30;
        return [
            `name = ${name}`,
            `age = ${age}`,
            `Name: ${name}, Age: ${age}`,
        ];
    },

    // 5-dars: ma'lumot turlari
    dataTypes() {
        let age = 25;
        let name = "Alice";
        let isStudent = true;
        let address = null;
        let phoneNumber;
        let uniqueId = Symbol("id");
        let bigNumber = BigInt("12345678901234567890");
        let person = { name: "Bob", age: 30 };
        let numbers = [1, 2, 3, 4, 5];
        return [
            `Age (Number): ${age}`,
            `Name (String): ${name}`,
            `Is Student (Boolean): ${isStudent}`,
            `Address (Null): ${address}`,
            `Phone Number (Undefined): ${phoneNumber}`,
            `Unique ID (Symbol): ${uniqueId.toString()}`,
            `Big Number (BigInt): ${bigNumber}`,
            `Person (Object): ${JSON.stringify(person)}`,
            `Numbers (Array): ${JSON.stringify(numbers)}`,
        ];
    },

    // 6-dars: let, const, var
    letConstVar() {
        let name = "John";
        const age = 30;
        var city = "New York";
        return [
            `let name = "John" -> ${name}`,
            `const age = 30 -> ${age}`,
            `var city = "New York" -> ${city}`,
        ];
    },

    // 7-dars: operatorlar
    operators() {
        const firstNumber = 10;
        const secondNumber = 5;
        const lines = [
            "Arifmetik operatorlar:",
            `10 + 5 = ${firstNumber + secondNumber}`,
            `10 - 5 = ${firstNumber - secondNumber}`,
            `10 * 5 = ${firstNumber * secondNumber}`,
            `10 / 5 = ${firstNumber / secondNumber}`,
            `10 % 5 = ${firstNumber % secondNumber}`,
            `10 ** 5 = ${firstNumber ** secondNumber}`,
        ];
        let postIncrementNumber = 10;
        lines.push(`postIncrementNumber++ natijasi: ${postIncrementNumber++}`, `Amaldan keyingi qiymat: ${postIncrementNumber}`);
        let preIncrementNumber = 10;
        lines.push(`++preIncrementNumber natijasi: ${++preIncrementNumber}`, `Amaldan keyingi qiymat: ${preIncrementNumber}`);

        const a = 10;
        const b = 5;
        lines.push(
            "Taqqoslash operatorlari:",
            `10 == 5: ${a == b}`,
            `10 === 5: ${a === b}`,
            `10 != 5: ${a != b}`,
            `10 !== 5: ${a !== b}`,
            `10 > 5: ${a > b}`,
            `10 < 5: ${a < b}`,
        );

        let x = 10, y = 5, z = 0;
        lines.push(
            "Tayinlash operatorlari:",
            `x += y: ${x += y}`,
            `y -= 2: ${y -= 2}`,
            `z *= x: ${z *= x}`,
            `x /= y: ${x /= y}`,
            `y %= x: ${y %= x}`,
        );
        return lines;
    },

    // 8-dars: stringlar
    strings() {
        const firstName = "John";
        const lastName = "Doe";
        const fullName = firstName + " " + lastName;
        const age = 30;
        const greeting = `Hello, my name is ${firstName} ${lastName} and I am ${age} years old.`;
        const searchString = "Hello, welcome to the JavaScript world!";
        return [
            `Full Name: ${fullName}`,
            greeting,
            `Length of Full Name: ${fullName.length}`,
            `Upper Case: ${fullName.toUpperCase()}`,
            `Lower Case: ${fullName.toLowerCase()}`,
            `Index of 'welcome': ${searchString.indexOf("welcome")}`,
            `Includes 'JavaScript': ${searchString.includes("JavaScript")}`,
            `Replaced String: ${searchString.replace("JavaScript", "JS")}`,
            `Substring (7, 14): ${searchString.substring(7, 14)}`,
            `Split String: ${JSON.stringify(searchString.split(" "))}`,
        ];
    },

    // 9-dars: mantiqiy operatorlar
    logical() {
        const isAdult = true;
        const hasPermission = false;
        const lines = [
            `isAdult && hasPermission: ${isAdult && hasPermission}`,
            `isAdult || hasPermission: ${isAdult || hasPermission}`,
            `!isAdult: ${!isAdult}`,
            `!hasPermission: ${!hasPermission}`,
        ];

        const hasCompletedHTML = true;
        const hasCompletedCSS = false;
        let message = "";
        if (hasCompletedHTML && hasCompletedCSS) {
            message = "Siz Bootstrap kursini boshlashingiz mumkin.";
        } else if (hasCompletedHTML && !hasCompletedCSS) {
            message = "Siz avval CSS kursini tugatishingiz kerak.";
        } else {
            message = "Siz avval HTML va CSS kurslarini tugatishingiz kerak.";
        }
        lines.push(message);
        return lines;
    },

    // 10-dars: turni o'zgartirish
    typeConversion() {
        const stringNumber = "123";
        const convertedNumber = Number(stringNumber);
        const numberValue = 456;
        const convertedString = String(numberValue);
        const mixedValue1 = "The answer is: " + 42;
        const mixedValue3 = true + 1;
        const falsyValues = [false, 0, -0, 0n, "", null, undefined, NaN];
        const truthyValues = [true, 1, -1, "hello", [], {}];
        const lines = [
            `Converted Number ("123" -> Number): ${convertedNumber}`,
            `Converted String (456 -> String): "${convertedString}"`,
            `Mixed Value 1: ${mixedValue1}`,
            `Mixed Value 3 (true + 1): ${mixedValue3}`,
        ];
        falsyValues.forEach((value) => lines.push(`${String(value)} is falsy: ${Boolean(value) === false}`));
        truthyValues.forEach((value) => lines.push(`${JSON.stringify(value)} is truthy: ${Boolean(value) === true}`));
        return lines;
    },

    // 11-12-dars: funksiyalar
    functions() {
        function greet(name) {
            return `Hello, ${name}!`;
        }
        function add(a, b) {
            return a + b;
        }
        const multiply = function (x, y) {
            return x * y;
        };
        const divide = (m, n) => {
            if (n === 0) {
                return "Error: Division by zero is not allowed.";
            }
            return m / n;
        };
        return [
            `greet("Alice") -> ${greet("Alice")}`,
            `add(5, 3) -> ${add(5, 3)}`,
            `multiply(4, 6) -> ${multiply(4, 6)}`,
            `divide(10, 2) -> ${divide(10, 2)}`,
            `divide(10, 0) -> ${divide(10, 0)}`,
        ];
    },

    // 13-dars: funksiyalar amaliyoti
    functionPractice() {
        function isEvenOrOdd(number) {
            return number % 2 === 0 ? `${number} is even.` : `${number} is odd.`;
        }
        function findMax(a, b) {
            return a > b ? a : b;
        }
        const findInverseArrow = (number) => -number;
        function factorial(n) {
            if (n === 0 || n === 1) return 1;
            let result = 1;
            for (let i = 2; i <= n; i++) result *= i;
            return result;
        }
        function sumOfDigits(num) {
            let sum = 0;
            while (num > 0) {
                sum += num % 10;
                num = Math.floor(num / 10);
            }
            return sum;
        }
        return [
            `isEvenOrOdd(10) -> ${isEvenOrOdd(10)}`,
            `isEvenOrOdd(11) -> ${isEvenOrOdd(11)}`,
            `findMax(10, 20) -> ${findMax(10, 20)}`,
            `findInverseArrow(10) -> ${findInverseArrow(10)}`,
            `factorial(5) -> ${factorial(5)}`,
            `sumOfDigits(12345) -> ${sumOfDigits(12345)}`,
        ];
    },

    // 14-dars: arraylar
    arrays() {
        const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
        const lines = [`Fruits Array: ${JSON.stringify(fruits)}`];
        fruits.push("Fig");
        lines.push(`Fruits Array after push: ${JSON.stringify(fruits)}`);
        fruits.unshift("Grape");
        lines.push(`Fruits Array after unshift: ${JSON.stringify(fruits)}`);
        const deletedFruit = fruits.pop();
        lines.push(`Deleted Fruit: ${deletedFruit}`, `Fruits Array after pop: ${JSON.stringify(fruits)}`);
        const deletedFirstFruit = fruits.shift();
        lines.push(`Deleted First Fruit: ${deletedFirstFruit}`, `Fruits Array after shift: ${JSON.stringify(fruits)}`);
        fruits[0] = "Honeydew";
        lines.push(`Fruits Array after changing first element: ${JSON.stringify(fruits)}`, `Length of Fruits Array: ${fruits.length}`);
        return lines;
    },

    // 15-dars: array metodlari
    arrayMethods() {
        const arr1 = [2, 3, 1, 7];
        const arr2 = [6, 5, 4, 9];
        const combined = arr1.concat(arr2);
        const freshFruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
        const indexOfCherry = freshFruits.indexOf("Cherry");
        const foundFruit = freshFruits.find(fruit => fruit === "Cherry");
        const filtered = combined.filter(number => number > 4);
        const mapped = combined.map(number => "Son:" + number);
        return [
            `Combined Array: ${JSON.stringify(combined)}`,
            `Index of Cherry: ${indexOfCherry}`,
            `Found Fruit: ${foundFruit}`,
            `Filtered Numbers: ${JSON.stringify(filtered)}`,
            `Mapped numbers: ${JSON.stringify(mapped)}`,
        ];
    },
    // 16-dars: Objectlar (Objects)
    objects() {
        const person = {
            name: "John",
            age: 30,
            isStudent: true,
        };

        const lines = [
            `Dastlabki Object (person): ${JSON.stringify(person)}`,
            "--- Dot (nuqta) notatsiyasi orqali murojaat ---",
            `person.name: ${person.name}`,
            `person.age: ${person.age}`,
            `person.isStudent: ${person.isStudent}`,
            "--- Bracket (qavs) notatsiyasi orqali murojaat ---",
            `person["name"]: ${person["name"]}`,
            `person["age"]: ${person["age"]}`,
            `person["isStudent"]: ${person["isStudent"]}`,
        ];

        // Objectga yangi xususiyat qo'shish
        person.gender = "Male";
        person["country"] = "USA";
        lines.push(
            "--- Yangi xususiyatlar qo'shilgandan keyin ---",
            `person.gender = "Male" va person["country"] = "USA"`,
            `Yangilangan person: ${JSON.stringify(person)}`
        );

        // Ichma-ich (nested) object
        const student = {
            name: "Alice",
            age: 22,
            address: {
                street: "123 Main St",
                city: "New York",
                country: "USA",
            },
        };
        lines.push(
            "--- Ichma-ich (nested) object (student) ---",
            `Student Object: ${JSON.stringify(student)}`,
            `student.name: ${student.name}`,
            `student.address: ${JSON.stringify(student.address)}`,
            `student.address.street: ${student.address.street}`,
            `student.address.city: ${student.address.city}`,
            `student.address.country: ${student.address.country}`
        );

        return lines;
    },

    // 17-dars: Object metodlari
    objectMethods() {
        // 1-misol: this kalit so'zi yordamida object metodini chaqirish
        const car = {
            brand: "Toyota",
            model: "Camry",
            year: 2020,
            getCarInfo: function () {
                return `Car: ${this.brand} ${this.model}, Year: ${this.year}`;
            }
        };

        // 2- va 3-misol: Object.keys(), Object.values(), Object.entries()
        const personInfo = {
            name: "Bob",
            age: 25,
            isStudent: false,
        };

        const keys = Object.keys(personInfo);
        const values = Object.values(personInfo);
        const entries = Object.entries(personInfo);

        // 4-misol: Object.assign() - objectlarni birlashtirish
        const target = { a: 1, b: 2 };
        const source = { b: 4, c: 5 };
        const merged = Object.assign(target, source);

        // 5-misol: Object.freeze() - objectni butunlay o'zgarmas qilish
        const frozenObject = Object.freeze({ a: 1, b: 2 });
        let freezeNote = "a = 10 qilishga urinish natija bermadi";
        try {
            frozenObject.a = 10; // O'zgartirish amalga oshmaydi ('use strict' da TypeError tashlaydi)
        } catch (err) {
            freezeNote = `a = 10 qilishga urinish xatolik berdi: ${err.constructor.name}`;
        }

        // 6-misol: Object.seal() - faqat mavjud kalitlarni o'zgartirishga ruxsat
        const sealedObject = Object.seal({ a: 1, b: 2 });
        sealedObject.a = 10; // O'zgartirish amalga oshadi
        let sealNote = "c = 5 qo'shishga urinish natija bermadi";
        try {
            sealedObject.c = 5; // Yangi kalit qo'shish amalga oshmaydi ('use strict' da TypeError tashlaydi)
        } catch (err) {
            sealNote = `c = 5 qo'shishga urinish xatolik berdi: ${err.constructor.name}`;
        }

        return [
            "--- 1-misol: Object ichida metod va this kalit so'zi ---",
            `car.getCarInfo(): ${car.getCarInfo()}`,
            "--- 2- va 3-misol: Object metodlari (personInfo) ---",
            `personInfo: ${JSON.stringify(personInfo)}`,
            `Object.keys(personInfo): ${JSON.stringify(keys)}`,
            `Object.values(personInfo): ${JSON.stringify(values)}`,
            `Object.entries(personInfo): ${JSON.stringify(entries)}`,
            "--- 4-misol: Object.assign() - objectlarni birlashtirish ---",
            `target: ${JSON.stringify({ a: 1, b: 2 })} , source: ${JSON.stringify({ b: 4, c: 5 })}`,
            `Merged Object: ${JSON.stringify(merged)}`,
            "--- 5-misol: Object.freeze() - o'zgarmas object ---",
            `Frozen Object: ${JSON.stringify(frozenObject)} (${freezeNote})`,
            "--- 6-misol: Object.seal() - faqat mavjud kalitlarni o'zgartirish ---",
            `Sealed Object: ${JSON.stringify(sealedObject)} (a o'zgardi, ${sealNote})`,
        ];
    },

    // 18-dars: if-else shart operatori
    ifElse() {
        // 1-misol: yoshga qarab xabar chiqarish
        const age = 20;
        let message;
        if (age >= 18) {
            message = "Siz kattasiz.";
        } else {
            message = "Siz voyaga yetmagansiz.";
        }

        // 2-misol: else if bilan bir nechta shartni tekshirish (baholash tizimi)
        const score = 85;
        let grade;
        if (score >= 90) {
            grade = "A'lo (5)";
        } else if (score >= 70) {
            grade = "Yaxshi (4)";
        } else if (score >= 50) {
            grade = "Qoniqarli (3)";
        } else {
            grade = "Qoniqarsiz (2)";
        }

        // 3-misol: ichma-ich (nested) if-else
        const isLoggedIn = true;
        const isAdmin = false;
        let accessMessage;
        if (isLoggedIn) {
            if (isAdmin) {
                accessMessage = "Admin panelga xush kelibsiz!";
            } else {
                accessMessage = "Oddiy foydalanuvchi sifatida kirdingiz.";
            }
        } else {
            accessMessage = "Iltimos, avval tizimga kiring.";
        }

        return [
            "--- 1-misol: if-else (age = 20) ---",
            message,
            "--- 2-misol: else if zanjiri (score = 85) ---",
            `Sizning bahoyingiz: ${grade}`,
            "--- 3-misol: ichma-ich if-else (isLoggedIn = true, isAdmin = false) ---",
            accessMessage,
        ];
    },
    // 19-dars: Switch-Case shart operatori
    // 1-misol: hafta kunini aniqlash
    switchCase() {
        const day = 5;
        let message;
        switch (day) {
            case 1:
                message = "Bugun dushanba.";
                break;
            case 2:
                message = "Bugun seshanba.";
                break;
            case 3:
                message = "Bugun chorshanba.";
                break;
            case 4:
                message = "Bugun payshanba.";
                break;
            case 5:
                message = "Bugun juma.";
                break;
            case 6:
                message = "Bugun shanba.";
                break;
            case 7:
                message = "Bugun yakshanba.";
                break;
            default:
                message = "Hafta kuni noma'lum.";
        }
        // 2-misol: vaqtni aniqlash
        const time = 12;
        let timeMessage;
        switch (time) {
            case 1:
                timeMessage = "Soat 1.";
                break;
            case 2:
                timeMessage = "Soat 2.";
                break;
            case 3:
                timeMessage = "Soat 3.";
                break;
            case 4:
                timeMessage = "Soat 4.";
                break;
            case 5:
                timeMessage = "Soat 5.";
                break;
            case 6:
                timeMessage = "Soat 6.";
                break;
            case 7:
                timeMessage = "Soat 7.";
                break;
            case 8:
                timeMessage = "Soat 8.";
                break;
            case 9:
                timeMessage = "Soat 9.";
                break;
            case 10:
                timeMessage = "Soat 10.";
                break;
            case 11:
                timeMessage = "Soat 11.";
                break;
            case 12:
                timeMessage = "Soat 12.";
                break;
            default:
                timeMessage = "Soat noma'lum.";
        }
        return [
            "--- 1-misol: hafta kunini aniqlash (day = 5) ---",
            message,
            "--- 2-misol: vaqtni aniqlash (time = 12) ---",
            timeMessage,
        ];
    }
};

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("button[data-lesson]").forEach((button) => {
        button.addEventListener("click", () => {
            const lessonKey = button.getAttribute("data-lesson");
            const outputEl = button.parentElement.querySelector(".output");
            const demoFn = demos[lessonKey];
            if (!demoFn) {
                printLines(outputEl, ["Bu dars uchun demo topilmadi."]);
                return;
            }
            const lines = demoFn();
            printLines(outputEl, lines);
        });
    });
});
