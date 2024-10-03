# Laravel Vue Inertia Project

This project is a web application built using Laravel as the backend framework and Vue.js with Inertia.js for the frontend. It provides an authentication flow with a login feature. Below is an explanation of the code structure and key decisions made during the development process.

## Project Structure

### 1. **Routes (web.php)**
- Located in `routes/web.php`, this file defines the application's routing.
- **Routes Defined:**
  - `GET /`: Displays the home page.
  - `GET /login`: Renders the login page.
  - `POST /login`: Handles the login logic.
  - `GET /Dashboard`: Displays the dashboard after successful login.
  
### 2. **Controllers**
- The primary controller for handling authentication is located at `app/Http/Controllers/AuthController.php`.

#### AuthController.php
- **Methods:**
  - `home()`: Renders the login view using Inertia.js.
  - `login(Request $request)`: Handles the login logic, checks user credentials, and redirects accordingly.
- **Key Decisions:**
  - The login method directly compares the provided password with the stored password in the database. Consideration for implementing password hashing (e.g., using Laravel's `Hash` facade) for security is needed in production.
  
### 3. **Views**
- The main layout file for the application is `resources/views/app.blade.php`, which is the entry point for Inertia.js.
  
#### app.blade.php
- **Includes:**
  - Meta tags, styles, and scripts necessary for the application.
  - The `@inertia` directive, which acts as a placeholder for Inertia.js to render the specific page component.
  
### 4. **JavaScript Setup (app.js)**
- Located in `resources/js/app.js`, this file initializes the Vue.js application and integrates Inertia.js.
  
#### app.js
- **Features:**
  - Imports necessary libraries and styles.
  - Sets up the Inertia.js application, resolving components dynamically.
  - Global filters for formatting and date manipulation using Moment.js.
  - Registering a custom directive for input masking using `v-mask`.
  
### 5. **Login Page (Login.vue)**
- The login page is located at `resources/js/Pages/Auth/Login.vue`.
  
#### Login.vue
- **Components Used:**
  - Reusable components for input fields, buttons, and error handling.
  - Authentication card component to wrap the login form.
- **Form Handling:**
  - Utilizes `useForm` from Inertia.js for managing form data and submissions.
  - Submits the login form with the `submit` method and handles the response appropriately.
  
### 6. **Styling and Assets**
- CSS is imported from `../css/app.css` in `app.js`.
- Assets such as images and fonts are included in the `app.blade.php` file.

## Key Decisions and Considerations
- **Security:** Passwords are compared in plaintext, which is not secure for production. Implement password hashing using Laravel's built-in `Hash` facade.
- **Separation of Concerns:** The project adheres to the MVC pattern by separating routes, controllers, views, and components, making the application easier to maintain and scale.
- **Inertia.js Usage:** Inertia.js provides a smooth SPA experience without a full API, allowing for a modern approach to building applications with Laravel and Vue.js.

## Getting Started
1. Clone the repository to your local machine.
2. Run `composer install` to install PHP dependencies.
3. Run `npm install` to install JavaScript dependencies.
4. Set up your `.env` file with your database and other configurations.
5. Run migrations with `php artisan migrate`.
6. Start the local server using `php artisan serve`.

## Future Improvements
- Implement user registration and password reset functionalities.
- Enhance error handling and user feedback on the login form.
- Improve the overall UI/UX with additional styling and components.

## License
This project is open-source and available under the [MIT License](LICENSE).
