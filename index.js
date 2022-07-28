const beli = require("./beli");

beli(20000, {item: "Permen", harga: 2000, waktu: 1000}, (sisaUang) => {
    beli(sisaUang, {item: "Roti", harga: 1000, waktu: 2000}, (sisaUang2) => {
        beli(sisaUang2, {item: "Rokok", harga: 5000, waktu: 2000}, (sisaUang3) => {
            beli(sisaUang3, {item: "Baju", harga: 500, waktu: 2000}, (sisaUang4) => {
                beli(sisaUang4, {item: "Buku", harga: 20000, waktu: 2000}, (sisaUang5) => {
                    return sisaUang5git 
                })
            })
        })
    })
})
