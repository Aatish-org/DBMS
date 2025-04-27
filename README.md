# DBMS
# MyStore Web Application

MyStore is a web-based application designed to manage wholesale operations, including products, suppliers, orders, reports, and user settings. The application features a responsive design and includes a dark mode toggle for user convenience.

## Features

- **Dashboard**: Overview of key metrics and quick access to features.
- **Products Management**: Add, edit, and manage product inventory.
- **Suppliers Management**: Track and manage supplier information.
- **Orders Management**: View and manage customer orders.
- **Reports**: Generate and view business reports.
- **Settings**: Update account details, change passwords, and manage preferences.
- **Dark Mode**: Toggle between light and dark themes.
- **Security**: Enable two-factor authentication and logout functionality.

## Technologies Used

- **Frontend**: HTML, CSS (TailwindCSS), JavaScript
- **Backend**: Python
- **Frameworks**: React (for frontend components)
- **Database**: SQL
- **Build Tools**: npm
- **Other**: LocalStorage for temporary data storage

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Aatish-org/mystore.git
   cd mystore
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open the application in your browser at `http://localhost:3000`.

## File Structure

- `index.html`: Entry point for the application.
- `settings.html`: Settings page for managing user preferences.
- `darkMode.js`: Script for enabling/disabling dark mode.
- `auth.js`: Script for handling authentication logic.
- `styles/`: Contains custom CSS files.
- `components/`: React components for the application.
- `backend/`: Python scripts for backend logic.
- `database/`: SQL scripts for database setup.

## Usage

1. **Login**: Use the login page to access the application.
2. **Dashboard**: Navigate through the top navigation bar to access features.
3. **Settings**: Update your username, password, and preferences.
4. **Dark Mode**: Use the toggle switch in the settings to enable/disable dark mode.

## Scripts

- **Start Development Server**:
  ```bash
  npm start
  ```
- **Build for Production**:
  ```bash
  npm run build
  ```
- **Run Backend**:
  ```bash
  python backend/server.py
  ```

## Contributing

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature description"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact

For questions or support, please contact [Aatish-org](https://github.com/Aatish-org).
