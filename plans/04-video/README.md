[4-video: Mern Stack Project | Ecommerce Website | Categories and Sub Categories Rest Api](https://youtu.be/dRQYJUN4hk0)

**Branch name: `category`**

> Ushbu videoda tushunganlarim va ketma-ketliklar:
1. **src** papkasining ichida **common-middleware** nomli papka yaratdim va uning ichida ***index.js*** file yaratdim.
2. ***index.js*** fileni ichiga **controller** papkasidagi **auth.js** filedan **requireSignin** function ni ko'chirib o'tkazdim.
3. **bodyParser** ni **index.server.js** dan o'chirib tashladim va uning o'rniga **app.use(express.json())** ni yozdib qo'ydim.
4. **models** papkani ichida ***category.js*** file yaratdim va uning ichida ***categorySchema*** nomli Schema yaratdim. Uning ichida ***name, slug, parentId*** kabi definition lar mavjud.
5. **routes** papkani ichida ***category.js*** file yaratdim va uning ichida `addCategory` nomli post methodi yaratdim.
6. Ushbu routerni **index.server.js** filega chaqirib e'lon qilib qoydim.
7. **controller** papkani ichida ***category.js*** file yaratdim va uning ichiga **routes** papkasidagi ***category.js*** file uchun **addCategory** functionni yaratib export qilib yubordim.
8. So'ng xuddi shu **controller** papkani ichida **getCategory** functionni ham yaratdim.
9. **common-middleware** papkasi ichidagi **index.js** file da **userMiddleware** va **adminMiddleware** kabi function lar yaratib oldim. Ularning vazifasi foydalanuvchi **user** yoki **admin** ligiga qarab sharoit yaratish.
10. category larni bir birini ichiga o'zini **parentId** si orqali joylashtirish uchun **createCategories** function yaratildi va **Postman** orqali tekshirib ko'rildi.