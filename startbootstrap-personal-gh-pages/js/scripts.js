    // Load the navbar component into the page
fetch('components/navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;
    });

// Load the footer component into the page
fetch('components/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    });

    // Load the WhatsApp button component into the page
fetch('components/whatsapp.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('whatsapp').innerHTML = data;
    });