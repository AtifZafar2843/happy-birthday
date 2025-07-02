# Happy Birthday Web App

A beautiful, interactive, and personalized birthday greeting web app designed to deliver a delightful multimedia experience. This project features animated petals, popups with personalized messages, Urdu poetry, background music, and a surprise video, all styled with a modern, responsive design.

## Features

- **Animated Petals:** Falling petal animation using HTML5 Canvas for a festive atmosphere.
- **Personalized Popups:** Interactive popups with custom messages and questions, including support for Urdu text.
- **Background Music:** Option to play a looping birthday song (`song.mp3`).
- **Urdu Poetry:** Sequential display of heartfelt Urdu lines, with options to replay or proceed to a surprise.
- **Surprise Video:** Embedded video (`video.mp4`) as a final birthday surprise.
- **Responsive Design:** Looks great on all devices, with adaptive layouts and fonts.

## File Structure

- `index.html` — Main HTML file. Loads the canvas animation, popups, music, and video. All UI interactions are managed here.
- `style.css` — Styles for the entire app, including popups, buttons, Urdu text, and responsive layouts.
- `canvas-petals.js` — JavaScript for the animated falling petals effect.
- `popup.js` — JavaScript for managing all popups, Urdu poetry sequence, music controls, and video popup logic.
- `song.mp3` — Background music file (birthday song, 12MB).
- `video.mp4` — Surprise video file (1MB).

## How It Works

1. **On Load:**
   - The canvas displays animated petals.
   - A popup asks if the user wants to play music.
2. **Personalized Questions:**
   - Series of popups with custom questions and responses.
3. **Urdu Poetry:**
   - After the questions, Urdu poetry lines are shown one by one.
   - User can replay or proceed to the surprise.
4. **Surprise Video:**
   - A video popup appears as the final greeting.

## Usage

1. **Clone or Download:**
   - Download the project files to your local machine.
2. **Open in Browser:**
   - Open `index.html` in any modern web browser.
3. **Enjoy the Experience:**
   - Interact with the popups, enjoy the music, poetry, and video.

## Customization

- **Messages & Poetry:**
  - Edit the popup messages and Urdu poetry lines in `popup.js`.
- **Music & Video:**
  - Replace `song.mp3` and `video.mp4` with your own files if desired.
- **Styling:**
  - Modify `style.css` for color, fonts, and layout changes.

## Credits

- Petal image: [Cloudfront Petal PNG](https://djjjk9bjm164h.cloudfront.net/petal.png)
- Fonts: Google Fonts (Poppins, Noto Nastaliq Urdu)
- Urdu poetry and all custom messages are personalized for the recipient.

---

**Made with ❤️ for a special birthday celebration!** 