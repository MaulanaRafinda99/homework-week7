// @Maulana Rafinda 

const fs = require('fs');

const calc = require('./calc');

// Menghitung luas persegi :
console.log('Luas Persegi :', calc.luasPersegi(10, 10),'\n');

// Menghitung keliling persegi :
console.log('Keliling Persegi :', calc.kelilingPersegi(8), '\n');

// Menghitung luas persegi panjang :
console.log('Luas Persegi Panjang :', calc.luarpersegiPanjang(10, 7), '\n'); 

// Menghitung keliling persegi panjang :
console.log('Keliling Persegi Panjang :', calc.keliliingpersegiPanjang(120, 85), '\n');