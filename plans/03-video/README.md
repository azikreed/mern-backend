[3-video: Mern Stack Project | Ecommerce Website | Api Request Validation](https://youtu.be/bOozLR747Jo)

**Branch name: `validation`**

> Ushbu videoda tushunganlarim va ketma-ketliklar:
1. Project boshlanishida ya'ni 1-videoda ***express-validator*** nomli package install qilgandim, lekin hali uni ishlatmagan edim. Uning vazifasi User tomonidan kiritilgan ma'lumotlarni (***firstName, lastName, email, password***) bor yoki yo'qligini qa'tiy tekshiradi. Ulardan 1 tasini ham kiritmasa kiritishini talab qiladi.
2. **src** papkasining ichida **validators** degan papka yaratib oldim. Uning ichida esa **auth.js** degan file yaratdim
3. Uning ichida esa `signin` va `signup` post method larini validate qilishi uchun **validateSignupRequest, validateSigninRequest, isRequestValidated** kabi function lar yaratdim.
4. **validateSignupRequest** function `signup` uchun ***firstName, lastName, email, password*** larni borligiga ishonch hosil qilgan holidagina **User** yoki **Admin** yaratib beradi.
5. **validateSigninRequest** function `signin` uchun ***email, password*** larni borligiga va to'g'rligiga ishonch hosil qilgan holidagina **User** yoki **Admin** larga authorization qilishiga ruxsat beradi.
6. **isRequestValidated** `singup` va `signin` lar validate qilindimi yoki yo'qmi aniqlab beruvchi function hisoblanadi.