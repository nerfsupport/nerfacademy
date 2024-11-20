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
    let query = document.getElementById('search-input').value.toLowerCase();
    
    // Get all the articles
    let articles = document.querySelectorAll('.article');
    
    // Loop through all articles and check if their titles contain the search query
    articles.forEach(function(article) {
        let title = article.getAttribute('data-title').toLowerCase(); // Use data-title for easier access
        if (title.includes(query)) {
            article.style.display = 'block';  // Show article if title matches
        } else {
            article.style.display = 'none';   // Hide article if title doesn't match
        }
    });
}