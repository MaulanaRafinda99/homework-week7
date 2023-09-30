// @Maulana Rafinda 

// Menghitung luas persegi. Rumus : L = s * s.
exports.luasPersegi = function(sisi1, sisi2) { 
    return sisi1 * sisi2;
}

// Menghitung keliling persegi. Rumus : K = s * s * s *    atau    L = 4 * s
exports.kelilingPersegi = function(sisi) {
    return sisi * 4;
}

// Menghitung luas persegi panjang. Rumus : L = p(panjang) * l(lebar) 
exports.luarpersegiPanjang = function(panjang, lebar) {
    return panjang * lebar;
}

// Menghitung keliling persegi panjang. Rumus : K = 2 * (panjang + lebar)
exports.keliliingpersegiPanjang = function(panjang, lebar) { 
    return 2 * (panjang + lebar);
}

