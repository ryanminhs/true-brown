document.addEventListener('DOMContentLoaded', function() {
    const searchBox = document.querySelector('input[type="search"]');
    searchBox.addEventListener('input', function() {
        console.log("Searching for:", searchBox.value);
    });
});

