document.addEventListener("DOMContentLoaded", function() {
    // Toggle content visibility
    document.getElementById("toggleContent").addEventListener("click", function() {
        var content = document.getElementById("extraContent");
        content.classList.toggle("hidden");
    });

    // Add images dynamically from the internet
    var images = [
        { src: "https://informa-rio.com/wp-content/uploads/2021/07/correr-ao-ar-livre-1024x640.jpg", alt: "Pessoa correndo ao ar livre" },
        { src: "https://img.freepik.com/fotos-premium/grupo-de-amigos-se-divertindo-na-praia-jogando-futebol_186382-781.jpg", alt: "Grupo de amigos jogando futebol" },
        { src: "https://www.tendaatacado.com.br/dicas/wp-content/uploads/2021/07/interna-como-fazer-yoga.jpg", alt: "Mulher praticando yoga" }
    ];

    var gallery = document.getElementById("imageGallery");
    images.forEach(function(image) {
        var img = document.createElement("img");
        img.src = image.src;
        img.alt = image.alt;
        img.classList.add("dynamic-image");
        gallery.appendChild(img);
    });

    // Hide header on scroll down
    var lastScrollTop = 0;
    var header = document.getElementById("mainHeader");

    window.addEventListener("scroll", function() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scrolling down
            header.classList.add("hidden");
        } else {
            // Scrolling up
            header.classList.remove("hidden");
        }
        lastScrollTop = scrollTop;
    });
});
