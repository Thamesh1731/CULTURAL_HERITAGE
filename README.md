# South Indian Heritage Website

This project is a responsive website built with React and Vite that showcases the cultural heritage of South India.

## Features

*   **Responsive Design:** The website is designed to work on all devices, from mobile phones to desktops.
*   **Multiple Pages:** Includes pages for Home, Festivals, Timeline, Phrases, and About.
*   **Interactive Elements:** Features a responsive navigation bar, animations, and placeholder audio buttons.

## How to Run the Project

To run this project locally, please follow these steps:

1.  **Install Dependencies:**

    Open a terminal in the project's root directory and run the following command to install the necessary packages:

    ```bash
    npm install
    ```

2.  **Build the Application:**

    This command will bundle the application into static files for production. The files will be placed in a `dist` folder.

    ```bash
    npm run build
    ```

3.  **Run a Local Server:**

    Due to browser security restrictions with local files, you need to serve the files from a local server. If you have Python installed, you can use its built-in HTTP server.

    First, navigate into the `dist` directory:

    ```bash
    cd dist
    ```

    Then, start the server:

    ```bash
    python -m http.server
    ```

4.  **View the Website:**

    Open your web browser and go to the following address:

    [http://localhost:8000](http://localhost:8000)

---

# React + Vite (Original README)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh