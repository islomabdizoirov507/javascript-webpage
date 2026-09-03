# JavaScript darslari

JavaScript asoslarini amaliy misollar orqali o'rganish uchun yaratilgan interaktiv veb-sahifa. Loyiha 3-darsdan 18-darsgacha bo'lgan mavzularni qamrab oladi: har bir bo'limdagi **Ishga tushirish** tugmasi tegishli JavaScript kodini bajaradi va natijani sahifaning o'zida ko'rsatadi.

## Loyiha haqida

`script.js` faylining birinchi qismida darslarga oid nazariya va konsolda bajariladigan kod namunalari komment ko'rinishida saqlangan. Faylning keyingi qismidagi `demos` obyekti shu misollarni interaktiv funksiyalarga aylantiradi. Sahifa yuklangach, `DOMContentLoaded` hodisasi barcha dars tugmalariga hodisa tinglovchilarini biriktiradi va natijalarni `.output` bloklariga chiqaradi.

## Mavzular

- 3-dars - `alert()` orqali xabar chiqarish
- 4-dars - qiymatlar va o'zgaruvchilar
- 5-dars - ma'lumot turlari: `Number`, `String`, `Boolean`, `Null`, `Undefined`, `Symbol`, `BigInt`, `Object` va `Array`
- 6-dars - `let`, `const` va `var`
- 7-dars - arifmetik, taqqoslash va tayinlash operatorlari
- 8-dars - stringlar va ularning metodlari
- 9-dars - mantiqiy operatorlar va shartli tekshiruvlar
- 10-dars - type conversion, type coercion, truthy va falsy qiymatlar
- 11-12-darslar - function declaration, function expression va arrow function
- 13-dars - juft/toq son, maksimum qiymat, teskari son, faktorial va raqamlar yig'indisi
- 14-dars - massiv yaratish, element qo'shish, o'chirish va o'zgartirish
- 15-dars - `concat()`, `indexOf()`, `find()`, `filter()` va `map()` metodlari
- 16-dars - obyektlar, dot/bracket notatsiyasi va ichma-ich obyektlar
- 17-dars - obyekt metodlari, `this`, `Object.keys()`, `Object.values()`, `Object.entries()`, `Object.assign()`, `Object.freeze()` va `Object.seal()`
- 18-dars - `if`, `else if`, `else` va ichma-ich shart operatorlari

## Texnologiyalar

- HTML5
- CSS3
- Vanilla JavaScript
- Bootstrap 5.3.8 (CDN orqali)

Interfeys moslashuvchan Bootstrap grid tizimi va CSS'dagi glassmorphism uslubi asosida qurilgan.

## Fayllar tuzilishi

```text
javascript-webpage/
|-- javascript.html  # Sahifa tuzilishi va dars bo'limlari
|-- script.js        # Kommentlangan nazariya va interaktiv demo funksiyalari
|-- style.css        # Ranglar, glassmorphism va komponent stillari
|-- .hintrc          # Webhint development konfiguratsiyasi
`-- README.md        # Loyiha hujjati
```

## Ishga tushirish

Loyiha build jarayoni yoki paket o'rnatishni talab qilmaydi.

1. Repository'ni yuklab oling yoki klonlang:

   ```bash
   git clone https://github.com/islomabdizoirov507/javascript-webpage.git
   ```

2. Loyiha papkasiga o'ting:

   ```bash
   cd javascript-webpage
   ```

3. `javascript.html` faylini brauzerda oching.

4. Kerakli darsdagi **Ishga tushirish** tugmasini bosing va natijani shu bo'lim ostida ko'ring.

> Bootstrap CDN orqali yuklanadi, shuning uchun sahifaning to'liq dizaynini ko'rish uchun internet aloqasi kerak.

## Kodni o'rganish tartibi

1. `javascript.html` ichidan dars bo'limi va uning `data-lesson` qiymatini toping.
2. `script.js`ning kommentlangan qismidan mavzuga oid tushuntirish va konsol misollarini o'qing.
3. `demos` obyektidan xuddi shu kalitga ega interaktiv funksiyani ko'rib chiqing.
4. Brauzerda tugmani bosib natijani tekshiring.

## Muallif

[Islom Abdizoirov](https://github.com/islomabdizoirov507)
