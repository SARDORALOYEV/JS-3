alert("Sizda hozir random sonlar chiqishni boshleydi")
const randomson =Math.floor(Math.random() * 100);
alert (`Randomdan chiqqan son : ${randomson}`);
confirm("Biz randomdan chiqqa sonni ko'paytirmoqchi va bo'lmoqchimiz!");
alert(`Randomdan chiqqan son : ${randomson} \n Biz uni ikkiga ko'paytirganimizda: ${randomson * 2}
    Ikkiga bo'lganimizda : ${randomson / 2}
    Va shu sonni 3 ga Bo'lingandagi qoldig'i : ${randomson % 3} \n
    `)