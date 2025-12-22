# Landing page Clipboard by Gabriela Rincón 👩‍🦱

![Design preview for the Blogr landing page coding challenge](/assets/design/Mockup_Landing.png)

## Welcome! 👋

Nexcent Landing Page - Performance Test

This project is a professional landing page built for Nexcent, a community management platform. It was developed as a performance test to demonstrate advanced skills in semantic HTML, modern CSS layouts (Grid and Flexbox), and responsive web design with Vanilla JavaScript.

* Author: Gabriela Rincon

* Status: Completed

### 🚀 Features
* Fully Responsive Design: The site adapts fluidly to desktop, tablet, and mobile screens.

* Interactive Navigation: A custom-built mobile hamburger menu.

* Modern Layouts: Intensive use of CSS Grid for complex sections and Flexbox for alignment.

* Semantic Structure: Coded with accessibility and SEO best practices in mind.

* Hover States: Interactive elements like buttons and links feature smooth transitions and visual feedback.

### 🛠️ Built With
* HTML5: Semantic markup ```(<header>, <section>, <footer>, etc.) ```

* CSS3: Custom properties, Flexbox, and CSS Grid.

* Vanilla JavaScript: Document Object Model (DOM) manipulation for UI interactivity.

* Google Fonts: Inter and Segoe UI for a modern look.

### 📐 Technical Implementation Details
* CSS Grid & Flexbox
I utilized a hybrid approach to layout design:

- CSS Grid: Used for the main structure of the Hero, Manage, and Stats sections. It allowed for easy column management (e.g., grid-template-columns: repeat(3, 1fr)) and precise control over the 2x2 grid in the statistics area.

* Flexbox: Employed in the Header and Footer to manage space distribution (using justify-content: space-between) and vertical alignment of icons and text.

* Responsive Strategy
The project follows a "Desktop-First" approach with comprehensive breakpoints:

- 1024px: Transition from multi-column layouts to single-column stacks for tablets.

- 768px/480px: Adjustments to font sizes and padding to ensure readability on small smartphones.

* JavaScript Logic
The mobile menu is controlled by a lightweight script that toggles an .active class. This triggers a CSS transition that moves the menu from right: -100% to right: 0, ensuring a smooth user experience without using heavy libraries.

### 📂 Project Structure
Plaintext

```


├── assets/
│   ├── imagenes/          # Optimized images and icons
│   └── clients_logos/     # Brand assets
├── css/
│   └── style.css          # Main stylesheet with variables and media queries
├── js/
│   └── script.js          # Mobile menu logic
└── index.html             # Main entry point


```

### 📝 Key Learnings
During this project, I strengthened my understanding of:

Semantic HTML: Avoiding "div-itis" by using the correct descriptive tags.

Fractional Units (fr): Managing flexible spacing in Grids without overflow issues.

Refactoring: Organizing CSS into logical blocks (Reset, Globals, Sections, Responsive) to improve maintenance.

### 🏁 How to Run
- [x] Clone the repository.
- [x] Open index.html in any modern web browser.
- [x] To view the mobile version, use the Browser Developer Tools (F12) and toggle the device toolbar.


### Autora ✒️


* **Gabriela Rincón** - 👩‍🦱 *Desarrollo* y *Documentación* 
