// Check for saved theme preference, otherwise use system preference
// const theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');


const theme = "light";
document.documentElement.setAttribute('data-theme', theme);

const themeToggle = document.getElementById('theme-toggle');
const moonIcon = themeToggle.querySelector('i');

// Update icon based on current theme
if (theme === 'dark') {
    moonIcon.classList.remove('fa-moon');
    moonIcon.classList.add('fa-sun');
}

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Toggle icon
    moonIcon.classList.toggle('fa-moon');
    moonIcon.classList.toggle('fa-sun');
});
