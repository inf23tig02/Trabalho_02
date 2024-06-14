document.addEventListener("DOMContentLoaded", function() {
    // Toggle content visibility
    document.getElementById("toggleContent").addEventListener("click", function() {
        var content = document.getElementById("extraContent");
        content.classList.toggle("hidden");
    });

    // Add images dynamically from the internet
    var images = [
        { src: "https://via.placeholder.com/600x400?text=Desporto+1", alt: "Pessoa correndo ao ar livre" },
        { src: "https://via.placeholder.com/600x400?text=Desporto+2", alt: "Grupo de amigos jogando futebol" },
        { src: "https://via.placeholder.com/600x400?text=Desporto+3", alt: "Mulher praticando yoga" }
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
