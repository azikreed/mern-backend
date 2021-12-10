[2-video: Mern Stack Project | Ecommerce Flipkart Clone | Admin Login Rest Api - 03](https://youtu.be/lig_s3gJngc)

**Branch name: `user_and_admin`**

> Ushbu videoda tushunganlarim va ketma-ketliklar:
1. Userlar haqida ma'lumotlar saqlash uchun **MongoDB** dagi clusterni ichida ***users*** nomli *collection* yaratib oldim.
2. So'ng **controller** papkani ichidagi **auth.js** file da `signin` function yaratib oldim va uni export qilib **routes** papkasidagi **auth.js** file da import qilib oldim.
3. `signin` qilganda ham xuddi `signup` qilgandek **email** orqali tekshirishini so'radim agar **email** yo'q bo'lsa ya'ni *error* chiqsa **400 status** bilan *error* ni qaytarishini so'radim. Agar **email** bor bo'lsa **user** haqidagi ma'lumotlarini **models** papkasi ichidagi **user.js** Schemadagi **authenticate** methodi orqali chiqarishini so'radim.
4. Chiqarilganda unda token ham bo'lishi kerak. Tokenni chiqarish uchun ***jsonwebtoken*** package dan foydalandim. U har bir user uchun token yaratib beruvchi package. Token bizga authorization qilishimiz uchun kerak bo'ladi.
5. **controller** papkasi ichidagi **auth.js** file da **requireSignin** function yaratdim va uni export qilib **routes** papkasidagi **auth.js** file da import qilib oldim.
6. **routes** va **controller** papkalarida adminlar uchun alohida **admin** papkasini yaratdim va uning ichida xuddi oddiy user larnikidek funksiyalarni yaratdim. Faqat ularning **role** nomli definitioniga **admin** degan qiymat berib qo'ydim.