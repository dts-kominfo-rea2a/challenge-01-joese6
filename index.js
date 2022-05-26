// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {
    name:"Monica",
    gender:"Female",
    age:17,
    email:"monica@dingdong.com",
    favoriteColor:[{
        warnaPertama:"Yellow",
        warnaKedua:"Pink",
        warnaKetiga:"White",
        warnaKeempat:"Purple"
    }],
    isHavePet:"Yes",
    education:[{
        nameEdu:"SD 01",
        city:"Jakarta",
        graduate:"2016"
    }],
    favoriteRestaurant:[{
        favoriteRestaurant1:"Bento", 
        favoriteRestaurant2:"Sushi", 
        favoriteRestaurant3:"Pancake", 
        favoriteRestaurant4:"Eggy", 
        favoriteRestaurant5:"Tempura", 
        favoriteRestaurant6:"Bento", 
        favoriteRestaurant7:"Eggy", 
        favoriteRestaurant8:"Padang", 
        favoriteRestaurant9:"Tteok", 
        favoriteRestaurant10:"Sushi", 
        favoriteRestaurant11:"Sushi"
    }]
};
const secondUser = {
    name:"Wendy",
    gender:"Male",
    age:23,
    email:"wendy@dingdong.com",
    favoriteColor:[{
        warnaPertama:"Blue",
        warnaKedua:"Black",
        warnaKetiga:"Grey"
    }],
    isHavePet:"No",
    education:[{
        nameEdu:"SD 02",
        city:"Jakarta",
        graduate:"2010"
    }],
    favoriteRestaurant:[{
        favoriteRestaurant1:"Tempura", 
        favoriteRestaurant2:"Bento", 
        favoriteRestaurant3:"Sushi", 
        favoriteRestaurant4:"Pancake", 
        favoriteRestaurant5:"Padang", 
        favoriteRestaurant6:"Katsu", 
        favoriteRestaurant7:"Geprek", 
        favoriteRestaurant8:"Pancake", 
        favoriteRestaurant9:"Eggy"
    }]
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser,secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};