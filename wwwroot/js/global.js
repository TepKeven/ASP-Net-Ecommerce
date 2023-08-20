const categories = [
    { id: 1, name: "Computers & Laptops"},
    { id: 2, name: "Phones" },
    { id: 3, name: "Ipods" },
    { id: 4, name: "Cameras" },
    // { id: 5, name: "Featured" },
    // { id: 6, name: "BestSeller" },
    // { id: 7, name: "Recent" },
    // { id: 8, name: "All Products" },
]

const products = [
    { id: 1, name: "Apple Cinema 30", desc: "Lorem ipsum dolor sit amet, sit ex solet euismod apeirian, id per wisi antiopam definitiones. Quo ei timeam quaerendum..", price: "$200.00", img: "../img/products/apple_cinema.jpg", resolution: [200, 158], category_id: 1 },
    { id: 2, name: "Canon EOS 5D", desc: "Lorem ipsum dolor sit amet, sit ex solet euismod apeirian, id per wisi antiopam definitiones. Quo ei timeam quaerendum..", price: "$100.00", img: "../img/products/canon_eos_5d.jpg", resolution: [200, 158], category_id: 4},
    { id: 3, name: "HP Laptop", desc: "Lorem ipsum dolor sit amet, sit ex solet euismod apeirian, id per wisi antiopam definitiones. Quo ei timeam quaerendum..", price: "$321.00", img: "../img/products/hp.jpg", resolution: [200, 158], category_id: 1},
    { id: 4, name: "HTC Touch HD", desc: "Lorem ipsum dolor sit amet, sit ex solet euismod apeirian, id per wisi antiopam definitiones. Quo ei timeam quaerendum..", price: "$410.00", img: "../img/products/htc_touch_hd.jpg", resolution: [200, 158], category_id: 2},
    { id: 5, name: "Imac", desc: "Lorem ipsum dolor sit amet, sit ex solet euismod apeirian, id per wisi antiopam definitiones. Quo ei timeam quaerendum..", price: "$250.00", img: "../img/products/imac.jpg", resolution: [230, 158], category_id: 1},
    { id: 6, name: "Iphone", desc: "Lorem ipsum dolor sit amet, sit ex solet euismod apeirian, id per wisi antiopam definitiones. Quo ei timeam quaerendum..", price: "$600.00", img: "../img/products/iphone.jpg", resolution: [100, 158], category_id: 2},
    { id: 7, name: "Ipod Classic", desc: "Lorem ipsum dolor sit amet, sit ex solet euismod apeirian, id per wisi antiopam definitiones. Quo ei timeam quaerendum..", price: "$220.00", img: "../img/products/ipod_classic.jpg", resolution: [160, 158], category_id: 3},
    { id: 8, name: "Ipod Nano", desc: "Lorem ipsum dolor sit amet, sit ex solet euismod apeirian, id per wisi antiopam definitiones. Quo ei timeam quaerendum..", price: "$200.00", img: "../img/products/ipod_nano.jpg", resolution: [150, 158], category_id: 3},
    { id: 9, name: "Ipod Shuffle", desc: "Lorem ipsum dolor sit amet, sit ex solet euismod apeirian, id per wisi antiopam definitiones. Quo ei timeam quaerendum..", price: "$150.00", img: "../img/products/ipod_shuffle.jpg", resolution: [200, 158], category_id: 3},
    { id: 10, name: "MacBook Air", desc: "Lorem ipsum dolor sit amet, sit ex solet euismod apeirian, id per wisi antiopam definitiones. Quo ei timeamquaerendum..", price: "$300.00", img: "../img/products/macbook_air.jpg", resolution: [200, 158], category_id: 1},
    { id: 11, name: "MacBook Pro", desc: "Lorem ipsum dolor sit amet, sit ex solet euismod apeirian, id per wisi antiopam definitiones. Quo ei timeamquaerendum..", price: "$851.00", img: "../img/products/macbook_pro.jpg", resolution: [200, 158], category_id: 1 },
    { id: 12, name: "Nikon D300", desc: "Lorem ipsum dolor sit amet, sit ex solet euismod apeirian, id per wisi antiopam definitiones. Quo ei timeamquaerendum..", price: "$310.00", img: "../img/products/nikon_d300.jpg", resolution: [200, 158], category_id: 4},
    { id: 13, name: "Palm Treo Pro", desc: "Lorem ipsum dolor sit amet, sit ex solet euismod apeirian, id per wisi antiopam definitiones. Quo ei timeamquaerendum..", price: "$400.00", img: "../img/products/palm_treo_pro.jpg", resolution: [150, 158], category_id: 2},
    { id: 14, name: "Samsung Tab", desc: "Lorem ipsum dolor sit amet, sit ex solet euismod apeirian, id per wisi antiopam definitiones. Quo ei timeamquaerendum..", price: "$350.00", img: "../img/products/samsung_tab.jpg", resolution: [200, 158], category_id: 2},
    { id: 15, name: "Sony Vaio", desc: "Lorem ipsum dolor sit amet, sit ex solet euismod apeirian, id per wisi antiopam definitiones. Quo ei timeamquaerendum..", price: "$210.00", img: "../img/products/sony_vaio.jpg", resolution: [190, 158], category_id: 1}
]

const featured_products = [
    1,2,3,4,5,6,7,8
];

const bestseller_products = [
    9,10,11,12,5,13,14,15
]

const recent_products = [
    15,11,5,12,13,2,14,8
]
