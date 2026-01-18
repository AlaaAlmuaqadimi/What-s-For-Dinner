# 🍴 What's For Dinner: A Daily Recipe Inspiration App

This is a simple, interactive front-end web application designed to inspire users with a new, detailed dinner recipe every day. The project focuses on core web development skills, primarily **Vanilla JavaScript** for handling application logic and dynamic content updates.

## ✨ Features

* **Unique Random Recipe Display:** Fetches a random recipe from the structured `meals` data array upon page load and button click.
* **No Consecutive Repeats:** Implements custom JavaScript logic to ensure the new recipe displayed is never the same as the previous one, enhancing user experience.
* **Comprehensive Recipe Card:** Displays all crucial information in a clean, scrollable layout:
    * Ratings, Prep/Cook Times, and Serving Sizes.
    * Detailed Ingredients and Step-by-Step Instructions.
    * Full Nutrition Facts (Calories, Protein, Fat, etc.).
    * Chef's Tips.
* **Dynamic Styling:** The UI dynamically adjusts elements like the `Time Warning` badge based on the recipe's data.
* **Responsive Design:** Utilizes Bootstrap and custom Media Queries for optimal viewing on mobile, tablet, and desktop screens.

## 🚀 Tech Stack

* **HTML5** (Semantic Structure)
* **CSS3** (Styling and Custom CSS Variables for Theming)
* **Bootstrap 5** (Layout and Components)
* **Vanilla JavaScript (ES6+)** (DOM Manipulation and Application Logic)
* **Font Awesome** (Icons)

## ⚙️ Project Setup

To get a copy of this project up and running on your local machine for development and testing, follow these simple steps.

### Prerequisites

You only need a modern web browser (like Chrome, Firefox, or Edge).

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/YOUR_USERNAME/whats-for-dinner.git] (https://github.com/MohamedMahmoudHasan/What-s-For-Dinner.git)
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd whats-for-dinner
    ```
3.  **Open the file:** Open `index.html` directly in your web browser.

## 💡 Improvements and Learnings

The project successfully demonstrates strong data binding and DOM manipulation. Key areas learned and applied include:

* Maintaining state across function calls (`lastRandomNumber`).
* Efficiently generating dynamic lists using template literals.
* Controlling element visibility using `classList.toggle()`.
* Using CSS variables for easy theming (as seen in `style.css`).

## 🤝 Contribution

Feel free to fork this repository, submit Pull Requests, or open Issues if you have suggestions for new features, bug fixes, or performance enhancements!

---
