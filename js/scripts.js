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

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("sportImportanceForm").addEventListener("submit", function(event) {
        event.preventDefault();
        
        // Collect form data
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var importance = document.getElementById("importance").value;
        var comments = document.getElementById("comments").value;

        // For demonstration, log the data to the console
        console.log("Form Submission:");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Importance:", importance);
        console.log("Comments:", comments);

        // Clear the form
        this.reset();

        // Provide feedback to the user
        alert("Obrigado pelo seu feedback!");
    });
});
