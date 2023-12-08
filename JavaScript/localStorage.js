

document.addEventListener('DOMContentLoaded', function () {


    let listaProductos = [
        {
            id: 1,
            name: "Gaban Negra",
            stock: 10,
            price: 120000,
            description: "Un gabán de cuero negro con cinturón ajustable y cadenas también ajustables en negro, sirve como un accesorio destacado. Disponible en diversas tallas, este artículo presenta elementos populares como las cadenas, perteneciendo a la clasificación de estilo gótico. Diseñado para un público unisex",
            image: "../assets/imgProductos/gabardinaNegra/darkCoat1.jpg"
        },
        {
            id: 2,
            name: "Anillo Rojo",
            stock: 5,
            price: 70000,
            description: "Un anillo rojo de acero, una joya llamativa en sí misma, destaca por su tamaño de apertura ajustable. Con elementos populares como la joya, se clasifica dentro de la tendencia de personalidad en el mundo de la moda. Diseñado para un público unisex",
            image: "../assets/imgProductos/anilloRed/AnilloRed.jpg"
        },
        {
            id: 3,
            name: "Vicera Negra",
            stock: 8,
            price: 90000,
            description: "Una visera versátil de color negro, diseñada para adaptarse a diversos usos, destaca por su tamaño ajustable para un ajuste cómodo. Este artículo, sin elementos populares específicos, se clasifica en la categoría de estilo de seguridad. Dirigida a un público unisex",
            image: "../assets/imgProductos/viceraNegra/vicNegra.jpg"
        },
        {
            id: 4,
            name: "Cadenas",
            stock: 2,
            price: 50000,
            description: "Accesorio esencial para Halloween, estas cadenas plateadas están disponibles en distintas tallas para adaptarse a todos. Destacan por su popularidad en elementos de cadenas y se clasifican dentro del estilo gótico. Dirigidas a un público unisex",
            image: "../assets/imgProductos/cadenasCuerpo/cadenaCuerpo1.jpg"
        },
        {
            id: 5,
            name: "Vestido Color Hueso",
            stock: 5,
            price: 100000,
            description: "Un refinado vestido formal en tono hueso, disponible en diversas tallas para garantizar un ajuste perfecto. Este atuendo destaca por su elegancia atemporal, sin necesidad de elementos adicionales llamativos",
            image: "../assets/imgProductos/vestidos/vestidoElegante.jpg"
        },
        {
            id: 6,
            name: "Pin Escarabajo",
            stock: 20,
            price: 20000,
            description: "Un pequeño pin con la forma de un insecto, con dimensiones de 12x10 cm, que lo convierten en un accesorio discreto y encantador. Este pin destaca por su clasificación de estilo natural, fusionando la estética del mundo insecto con la elegancia de un accesorio sutil",
            image: "../assets/imgProductos/pinInsecto/pinInsecto.jpg"
        },
        {
            id: 7,
            name: "Botas Negras Cuerina",
            stock: 2,
            price: 150000,
            description: "Un elegante zapato de cuerina disponible en diversas tallas para asegurar el ajuste perfecto. Este calzado destaca por su clasificación de estilo gótico, fusionando la durabilidad y versatilidad de la cuerina con elementos distintivos del estilo gótico.",
            image: "../assets/imgProductos/botasNegras/botasnegras1.jpg"
        },
        {
            id: 8,
            name: "Collar Azul",
            stock: 12,
            price: 55000,
            description: "Un refinado collar de acero en tono azul, con ajuste adaptable para garantizar la comodidad. Este accesorio destaca por su clasificación de estilo elegante, fusionando la resistencia del acero con la sofisticación del color azul.",
            image: "../assets/imgProductos/collarAzul/collarAzul.jpg"
        },
        {
            id: 9,
            name: "Collar Estrella",
            stock: 15,
            price: 45000,
            description: "UUn encantador collar de estrella en acero, con un diámetro de 28 cm, que aporta un toque casual y distendido a tu estilo. Este accesorio, popular por su diseño atractivo, se clasifica dentro del estilo casual, combinando la durabilidad del acero con un elemento lúdico como la estrella",
            image: "../assets/imgProductos/collarEstrella/collarEstrella.jpg"
        },
        {
            id: 10,
            name: "Collar Jade Refinado",
            stock: 3,
            price: 260000,
            description: "Un refinado collar que combina jade con acero inoxidable, con un ajuste adaptable para garantizar la comodidad. Este accesorio, popular por su diseño atractivo, se clasifica dentro del estilo natural, fusionando la belleza del jade con la durabilidad del acero inoxidable.",
            image: "../assets/imgProductos/collarJade/collarJade.jpg"
        },
        {
            id: 11,
            name: "Cuadros para el hogar",
            stock: 10,
            price: 80000,
            description: "Cuadros personalizables para el hogar, con dimensiones de 30x30 cm, que añaden un toque decorativo a cualquier espacio. Estos elementos populares de decoración se clasifican dentro del estilo casual, ofreciendo la posibilidad de personalizar tu entorno con un toque relajado y acogedor.",
            image: "../assets/imgProductos/decoracion/cuadros1.jpg"
        },
        {
            id: 12,
            name: "Parche Navy Perro",
            stock: 15,
            price: 8000,
            description: "Un parche para pegar en la ropa con dimensiones de 10x10 cm, diseñado como un accesorio popular que se clasifica dentro del estilo militar (Army). Este elemento ofrece una manera única y audaz de personalizar tu vestimenta, infundiendo un toque militar y robusto a tu estilo.",
            image: "../assets/imgProductos/patchDog/patchPerro1.jpg"
        },
        {
            id: 13,
            name: "Reloj de Bolsillo",
            stock: 4,
            price: 70000,
            description: "Un encantador reloj de bolsillo en acero, con un radio de 15 cm, que se destaca como un accesorio popular dentro de la clasificación de estilo Oldie",
            image: "../assets/imgProductos/reloj/pocketReloj.jpg"
        },
        {
            id: 14,
            name: "Reloj Rosa",
            stock: 20,
            price: 80000,
            description: "Un encantador reloj en tono rosa, con ajuste adaptable para garantizar comodidad. Este accesorio, popular por su diseño encantador, se clasifica dentro del estilo Cutecore, fusionando la dulzura del color rosa con la tendencia adorable y entrañable.",
            image: "../assets/imgProductos/relojRosa/relojRosa.jpg"
        },
        {
            id: 15,
            name: "Disfraz: Sacerdote",
            stock: 3,
            price: 150000,
            description: "Un disfraz de sacerdote diseñado, disponible en diversas tallas para un ajuste perfecto. Este atuendo destaca por ser popular en el mundo del cosplay y se clasifica dentro del estilo gótico, ofreciendo una combinación única de elementos religiosos y estéticas oscuras...Tiene una etiqueta que dice 'Faith' ",
            image: "../assets/imgProductos/Cosplay/FaithThings/trajeSacerdote.jpg"
        },
        {
            id: 16,
            name: "Collar De Cruz",
            stock: 5,
            price: 100000,
            description: "Un sublime collar con cruz en acero inoxidable, bendecido con un diseño ajustable para mayor comodidad. Este accesorio, popular por su esencia celestial, se clasifica dentro del estilo Celestial, fusionando la durabilidad del acero inoxidable con la simbología divina de la cruz. Tiene una marca por detras, dice 'Faith' ",
            image: "../assets/imgProductos/Cosplay/FaithThings/crux.jpg"
        },
        {
            id: 17,
            name: "Mochila My Little Bee",
            stock: 18,
            price: 65000,
            description: "Una encantadora mochila con diseño de abeja, con dimensiones que varían entre 20 cm y 40 cm, perfecta para adaptarse a diversas necesidades. Este accesorio, popular por su estilo escolar, se clasifica dentro de la categoría natural, fusionando la funcionalidad escolar con un diseño inspirado en la naturaleza. ",
            image: "../assets/imgProductos/mochilas/mochilaAbeja.jpg"
        },
        {
            id: 18,
            name: "Mochila Delfin",
            stock: 12,
            price: 40000,
            description: "Una adorable mochila pequeña con dimensiones de 20x30 cm, ideal para los más pequeños. Este accesorio, popular por su enfoque escolar, se clasifica dentro del estilo infantil, destacando su diseño pensado para la comodidad y estilo de los niños. ",
            image: "../assets/imgProductos/mochilas/mochilaDelfin.jpg"
        },
        {
            id: 19,
            name: "Zapato Rosas Sanrio",
            stock: 4,
            price: 120000,
            description: "Un encantador par de zapatos Hello Kitty de Sanrio, disponibles en diversas tallas para garantizar un ajuste perfecto. Estos accesorios, populares por su diseño adorable, se clasifican dentro del estilo Cutecore, fusionando la icónica marca Sanrio con la tendencia de moda lúdica y encantadora. ",
            image: "../assets/imgProductos/zapatos/zapatoRosa.jpg"
        },
        {
            id: 20,
            name: "Zapato Hombre Elegante",
            stock: 10,
            price: 120000,
            description: "Un clásico par de zapatos para hombre, disponible en varias tallas para asegurar el ajuste perfecto. Este calzado, reconocido por su diseño atemporal, se clasifica dentro del estilo Clásico, resaltando la elegancia y la simplicidad que trasciende las tendencias de moda efímeras. ",
            image: "../assets/imgProductos/zapatos/zapatosHombreEleg.jpg"
        },
        {
            id: 21,
            name: "Zapato Verde",
            stock: 16,
            price: 100000,
            description: "Un confortable par de zapatos en color verde, disponible en diversas tallas para asegurar un ajuste perfecto. Estos zapatos, populares como calzado, se clasifican dentro del estilo Natural, fusionando la comodidad con una estética relajada y conectada con la naturaleza. ",
            image: "../assets/imgProductos/zapatos/zapatosVerdes.jpg"
        },
        {
            id: 22,
            name: "Dizfras: Fantasma",
            stock: 5,
            price: 50000,
            description: "Un espeluznante disfraz de fantasma en talla grande, ideal para destacar en eventos temáticos de Halloween. Este atuendo, popular en el mundo del cosplay, se clasifica dentro del estilo específico de Halloween, ofreciendo una opción perfecta para aquellos que buscan crear un ambiente espeluznante y misterioso.",
            image: "../assets/imgProductos/Cosplay/fantasmaScaryahh.jpg"
        },
        {
            id: 23,
            name: "Zapatos de Ballet",
            stock: 8,
            price: 70000,
            description: "Un encantador par de zapatos de ballet, disponibles en diversas tallas para asegurar el ajuste perfecto. Estos zapatos, populares como calzado, se clasifican dentro del estilo Cutecore",
            image: "../assets/imgProductos/zapatos/zapatosBallet.jpg"
        },
        {
            id: 24,
            name: "Disfraz: Caballero",
            stock: 1,
            price: 250000,
            description: "Un imponente disfraz de Caballero Medieval, disponible en diversas tallas para asegurar un ajuste perfecto. Este atuendo, popular en el mundo del cosplay, se clasifica dentro del estilo específico de Halloween, ofreciendo una opción perfecta para aquellos que buscan recrear la atmósfera medieval y darle un toque épico a sus celebraciones",
            image: "../assets/imgProductos/Cosplay/DarkS/darsoulTraje.jpg"
        },
        {
            id: 25,
            name: "Vestido Victoriano",
            stock: 3,
            price: 120000,
            description: "Un refinado vestido elegante, disponible en diversas tallas para asegurar un ajuste perfecto. Este vestido, reconocido por su elegancia atemporal, se clasifica dentro del estilo Oldie, destacando la sofisticación que trasciende las tendencias contemporáneas.",
            image: "../assets/imgProductos/vestidos/vestidoVicto.jpg"
        },
        {
            id: 26,
            name: "Casco soldado Espacial",
            stock: 5,
            price: 120000,
            description: "Un impresionante casco de soldado de Halo Espacial, con dimensiones de 30x50 cm de radio, rindiendo homenaje al popular videojuego.",
            image: "../assets/imgProductos/Cosplay/halo/haloCasco.jpg"
        },
        {
            id: 27,
            name: "Peluche de Perro",
            stock: 10,
            price: 50000,
            description: "Un adorable peluche de perro con dimensiones de 20x30 cm, destacando como un elemento popular dentro del estilo Cutecore. Este tierno peluche no solo ofrece un tamaño compacto perfecto para abrazar",
            image: "../assets/imgProductos/peluches/perro.jpg"
        },
        {
            id: 28,
            name: "Peluche de Pulpo",
            stock: 20,
            price: 50000,
            description: "Un adorable peluche de pulpo con dimensiones de 50x60 cm, destacando como un elemento popular dentro del estilo lindo",
            image: "../assets/imgProductos/peluches/pulpo.jpg"
        },
        {
            id: 29,
            name: "Anillo de Abeja",
            stock: 2,
            price: 90000,
            description: "Un fascinante anillo con diseño de insecto, con un radio de 11 cm, que destaca como un accesorio popular dentro de la clasificación de estilo Natural",
            image: "../assets/imgProductos/anilloRed/anilloIns.jpg"
        },
        {
            id: 30,
            name: "Hormiga Estatua",
            stock: 20,
            price: 90000,
            description: "Una cautivadora estatua de hormiga en acero inoxidable, con dimensiones de 18x20 cm, que destaca como elemento popular dentro de la clasificación de estilo Natural",
            image: "../assets/imgProductos/anilloRed/decoracionPeque.jpg"
        },

    ];

    localStorage.setItem("listaProductos", JSON.stringify(listaProductos))

    listaProductos.forEach(element => {
        let containerCards = document.querySelector(".containerCards");
        let card = document.createElement("div");
        card.classList.add("item");
        card.id = "product" + element.id;
        card.innerHTML = `
        <div class="item-images" onclick="openPopup('${element.image}')">
            <img src="${element.image}">
        </div>
        <div class="organizer">
            <div class="item-title">
                <h4>${element.name}</h4>
            </div>
            <div class="item-amount">
                <h4>Existencias: </h4>
                <p id="amount-item${element.stock}">${element.stock}</p>
            </div>
            <div class="item-price" id="price-product${element.id}">
                <p>${element.price}</p>
            </div>        
            <div class="item-description">
                <p>${element.description}</p>
            </div>
            <div class="buyButton">
            <button class="buyButtonE" onclick="updateCartAndEvents()">¡Agregar Producto!</button>
            </div>
        </div>`;
        containerCards.appendChild(card);
    });


});





