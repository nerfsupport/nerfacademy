// mobile menu
function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    const overlay = document.getElementById("overlay");
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
}

// load more function
document.addEventListener('DOMContentLoaded', function () {
    const articles = document.querySelectorAll('.article-card');
    const loadMoreBtn = document.getElementById('load-more');
    const articlesToShow = 6; // Number of articles to show initially
    let currentCount = articlesToShow;

    // Function to hide all articles initially
    function hideAllArticles() {
        articles.forEach((article, index) => {
            if (index >= articlesToShow) {
                article.style.display = 'none';
            }
        });
    }

    // Initial setup
    hideAllArticles();

    // "Load More" button functionality
    loadMoreBtn.addEventListener('click', function () {
        const totalArticles = articles.length;

        // Reveal the next set of articles
        for (let i = currentCount; i < currentCount + articlesToShow; i++) {
            if (i < totalArticles) {
                articles[i].style.display = 'block';
            }
        }

        // Update the count of currently visible articles
        currentCount += articlesToShow;

        // Hide the button if all articles are displayed
        if (currentCount >= totalArticles) {
            loadMoreBtn.style.display = 'none';
        }
    });
});


// search function
function searchArticles() {
    // Get the search input value
    const query = document.getElementById('search-input').value.toLowerCase().trim();

    // Get all article cards
    const articles = document.querySelectorAll('.article-card');

    // Loop through all articles and check if their titles contain the search query
    articles.forEach((article, index) => {
        // Get the article title from the data-title attribute in the article-details
        const title = article.querySelector('.article-details').getAttribute('data-title').toLowerCase();

        // Check if the title contains the search query
        if (title.includes(query)) {
            article.style.display = 'block'; // Show the entire article card
        } else {
            article.style.display = 'none'; // Hide the entire article card
        }
    });
}


function handleSearch(event) {
    event.preventDefault();  
    searchArticles();  
}