'use strict';

// DOM elemek kijelölése
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;
const yearElement = document.getElementById('current-year');

// --- TÉMA KEZELÉSE (Sötét/Világos mód) ---

// Függvény a téma alkalmazására és mentésére
const setTheme = (theme) => {
  html.dataset.theme = theme;
  localStorage.setItem('portfolio-theme', theme); // Elmentjük a választást
};

// 1. Kezdeti beállítás ellenőrzése
const savedTheme = localStorage.getItem('portfolio-theme');
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');

if (savedTheme) {
  // Ha már van elmentett preferencia, használjuk azt
  html.dataset.theme = savedTheme;
} else if (prefersDarkMode.matches) {
  // Ha nincs mentés, de a rendszer sötét módot kér, alkalmazzuk
  html.dataset.theme = 'dark';
}
// (Alapértelmezetten a HTML 'light'-tal indul, ha a fentiek nem teljesülnek)

// 2. Kattintás eseménykezelő a gombra
themeToggle.addEventListener('click', () => {
  // Megnézzük a jelenlegi állapotot és váltunk
  const currentTheme = html.dataset.theme;
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
});


// --- DÁTUM KEZELÉSE (Lábléc éve) ---

try {
  const currentYear = new Date().getFullYear();
  if (yearElement) {
    yearElement.textContent = currentYear;
    yearElement.setAttribute('datetime', currentYear.toString());
  }
} catch (error) {
  console.error("Hiba az évszám frissítésekor:", error);
}
