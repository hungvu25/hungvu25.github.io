# Portfolio Site

This repository contains the source for a small personal portfolio. The main page is [`portfolio.html`](portfolio.html).

## Running the site

1. Clone or download this repository.
2. Open `portfolio.html` directly in your browser or serve the directory with any static web server.

The site expects the folders `css`, `js` and `assets` to be present. Assets include a background video/audio, images and a downloadable CV. External libraries such as Google Fonts, Font Awesome, AOS, Typed.js and EmailJS are loaded from their CDNs.

## Translation

Language data for English and Vietnamese is defined in `js/i18n.js`. Use the **EN** and **VI** buttons at the top of the page to switch languages. Your choice is saved in the browser so it persists on reload.

## Contact form

At the bottom of the page is a contact form powered by EmailJS. Fill in your name, email and message then press **Send**. A status message will indicate whether the request succeeded. An active internet connection is required for sending.
