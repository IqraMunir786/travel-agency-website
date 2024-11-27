document.addEventListener('DOMContentLoaded', function() {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');

    console.log(navToggle, navClose, navMenu); // Check karo agar elements sahi se select ho rahe hain

    navToggle.addEventListener('click', () => {
        console.log('Toggle button clicked');
        navMenu.classList.add('show-menu');
    });

    navClose.addEventListener('click', () => {
        console.log('Close button clicked');
        navMenu.classList.remove('show-menu');
    });
});

// Sticky Header
window.addEventListener('scroll', function(){
    header.classList.toggle("sticky", window.scrollY > 90)
});



// Search
const search = document.getElementById('search'),
searchBtn = document.getElementById('search-btn'),
searchClosen = document.getElementById('search-close')

// Search Show
searchBtn.addEventListener('click', () =>{
    search.classList.add('show-search')
})
// Search Hidden
searchClosen.addEventListener('click', () =>{
    search.classList.remove('show-search')
})

