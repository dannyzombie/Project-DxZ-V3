# Project-DxZ-V3
My Gaming Website
# Project DxZ V3 - YouTube Channel Website

## Overview

**Project DxZ V3** is a custom-built website designed to showcase my YouTube channel, [Danny Zombie's Channel](https://www.youtube.com/channel/UCJGtHu4d7wUZmPxrtDYmotA), and dynamically display videos from my channel. This version of the project uses **HTML, JavaScript**, and the **YouTube Data API** to provide a seamless experience for visitors to view a random video from my channel or select one from a playlist panel. The video player is sized at 1080x1920, and the site features a clean, light background for better readability and visual appeal.

## Features

- **Random Video Player:** A video from my YouTube channel is randomly displayed upon page load.
- **Playlist Panel:** Users can select other videos from a sidebar playlist panel.
- **Mobile-Friendly:** The video player is optimized to fit 1080x1920 for mobile and desktop users.
- **API Key Security:** The YouTube API key is managed securely using JavaScript without hardcoding it directly into the GitHub repository.

## How It Was Built

### 1. **YouTube Data API Integration**
   - I wanted to use the YouTube Data API to fetch my channel’s videos dynamically. This allows for an up-to-date video list to be displayed at any time.
   - During development, GPT-4 helped generate the code required to interact with the YouTube Data API, retrieve video data, and embed it in the HTML file. Specifically, the API key is passed securely without being exposed in the source code.

### 2. **Security Considerations**
   - To ensure the safety of my YouTube API key, I used an approach that involved moving sensitive data to a **JavaScript environment** while keeping it out of the source files uploaded to GitHub.
   - GPT-4 assisted in refactoring the code to **exclude hardcoded API keys** in the HTML, ensuring the website can be hosted publicly without security risks.
   
### 3. **GitHub Upload Process**
   - Once the code was finalized, GPT-4 guided me through preparing it for upload to GitHub by ensuring no sensitive data would be included.
   - I used an iterated version of the code, which avoided any direct inclusion of the YouTube API key, for the final deployment.

### 4. **Deployment**
   - The site is now live on GitHub Pages at [Project DxZ V3](https://dannyzombie.github.io/Project-DxZ-V3/).

## Tools and Technologies

- **HTML5 & CSS3:** For building the structure and layout of the website.
- **JavaScript (ES6+):** Used to implement the random video selection and interaction with the YouTube API.
- **YouTube Data API v3:** For fetching my channel's video content and dynamically displaying it on the site.
- **GitHub Pages:** For hosting the website.
- **GPT-4 (ChatGPT):** Helped in generating and refining the code, improving API security, and providing guidance on the best practices for securely deploying the project on GitHub.

## How GPT Helped

Throughout the development process, I collaborated closely with GPT-4, which played a significant role in:

- **YouTube API Integration:** GPT generated JavaScript code to fetch video data, display it in a randomized player, and ensure it works seamlessly with the playlist feature.
- **API Key Security:** GPT recommended techniques to manage the API key safely and helped in restructuring the code to keep sensitive information out of the public repository.
- **Troubleshooting and Refactoring:** GPT helped debug issues, optimize the code for better performance, and ensure the design met my vision.
- **Documentation:** GPT provided guidance on best practices for writing the README and documenting the development process clearly.

## Future Improvements

- Implementing a back-end server to securely handle the YouTube API key.
- Adding more advanced video filtering options for users to sort through content.
- Expanding the design with more interactive features and better responsiveness for different screen sizes.

## Acknowledgments

A special thanks to GPT-4 (ChatGPT) for providing detailed assistance throughout the coding process, from API integration to securing sensitive data and preparing the site for GitHub deployment.
