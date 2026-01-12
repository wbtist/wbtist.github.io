'use strict';

const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

themeToggle.addEventListener('click', () => {
  if (html.dataset.theme === 'dark') {
    html.dataset.theme = 'light';
  } else {
    html.dataset.theme = 'dark';
  }
});

const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');

if (prefersDarkMode.matches) {
  html.dataset.theme = 'dark';
}

const currentYear = new Date().getFullYear();
const yearElement = document.getElementById('current-year');
yearElement.textContent = currentYear;
yearElement.setAttribute('datetime', currentYear);
