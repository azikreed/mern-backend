[1-video: Mern Stack Project | Ecommerce Website | Flipkart Clone User And Admin Rest Api - 02
](https://youtu.be/kXfRQ0NiyLI)

**Branch name: `main`**

Bu projectning har bir qismi uchun alohida branch ochib olishni to'g'ri deb bildim. 1 - branchim esa: **user_and_main** 
> Ushbu videoda tushunganlarim va ketma-ketliklar:

1. ***npm init*** orqali initialize qilib oldim.
2. Kerakli packagelarni ya'ni ***express, express-validator, mongoose, bcrypt, dotenv, body-parser*** va ***nodemon*** larni install qilib oldim.
3. *package.json* da **main** file ni *index.server.js* deb olib **src** papka ochib uning ichida ***index.server.js*** ni yaratib oldim.
4. Uning ichida kerakli packagelarni ya'ni ***express, dotenv, body-parser, mongoose*** kabi packagelarni **require** orqali chaqirib oldim.
5. **app.listen** orqali PORT ni yoqib oldim. PORT ni esa alohida o'zgaruvchiga olib unga qiymatni **.env** file orqali kiritdim. **.env** file ishlashi uchun esa ***dotenv*** package orqali ***require('dotenv').config()*** ni kiritdim.
6. ***body-parser*** package ni ishlatish uchun ***app.use(bodyParser())*** ni kiritdim. Body parserning vazifasi JSON ga o'girib berish ekanligini chundim.
7. **MongoDB** orqali bir cluster yaratib uni ***index.server.js*** file bilan **connect** qilib oldim.
8. **src** papkaning ichida **controller, models, routes** kabi papkalarni yaratib oldim.
9. **routes** papkani ichida **auth.js** file ni yaratib oldim va uning ichida kerakli package larni **require** qilb olib **2 ta** `signin` va `signup` (post) methodlarini yaratib oldim.
10. **controller** papkani ichida **auth.js** file ni yaratdim va uning ichida **models** papkasining ichidagi ***userSchema*** ni **require** orqali chaqirib oldim. Undan so'ng `signup` function yaratdim va uni export qilib yubordim. `signup` function ning vazifasi unga jo'natilgan har bir **User** ni **email** orqali bor yoki yo'qligini tekshirib, agar bor bo'lsa ***User already registered*** deb, agar yo'q bo'lsa uni ma'lumotlar bazasiga saqlab qoyishi kerak. Uni saqlash uchun esa **save** functiondan foydalandim.
11. **controller** papkadagi **auth.js** fileni ichida export qilingan `signup` functionni **routes** papkasidagi **auth.js** dagi `signup` **router** iga import qilgan holda joylashtirdim.
12. **models** papkasini ichida esa yuqorida aytib o'tganimdek **user.js** file ni yaratdim. Uning ichida ***mongoose*** package orqali **userSchema** nomli **Schema** yaratib oldim. Uning ichida `firstName, lastName, username, email, hash_password, role, contactNumber, profilePicture` kabi **definition** lar mavjud.
13. User rostan ham yaratilayaptimi yoki xatolik bor yo'qligini **Postman** orqali tekshirib ko'rdim va ijobiy natijaga erishdim. 😊
