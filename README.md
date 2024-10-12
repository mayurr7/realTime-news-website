# React News App

This is a simple news app built with React that fetches the latest news using an API.

## Getting Started

To get a local copy of this project up and running, follow these steps:

### Prerequisites

- **Node.js**: Make sure you have Node.js installed on your machine.
- **Text Editor**: You can use any text editor like Visual Studio Code, Sublime Text, etc.

### Installation

Follow these steps to set up the project locally:

1. **Fork the Repository**

   - Click the "Fork" button at the top-right of this repository to create a copy of the project under your own GitHub account.

2. **Clone the Forked Repository**

   - Clone the forked repository to your local machine using the command:

     ```bash
     git clone https://github.com/your-username/your-repo-name.git
     ```

     Replace `your-username` with your GitHub username and `your-repo-name` with the name of your forked repository.

3. **Navigate to the Project Directory**

   After cloning the repository, navigate into the project directory:

   ```bash
   cd news-app

4. **Install Dependencies**

Run the following command to install all the project dependencies:

 ```bash
npm install
```
This will install all the packages listed in the package.json file.

5. **Create a .env File**

In the root directory of your project, create a .env file. This file will be used to store your API key securely:


REACT_APP_NEWS_API_KEY=your-api-key-here
Replace your-api-key-here with the actual API key you receive from the news API provider (e.g., NewsAPI).

6. **Add .env to .gitignore**

It is important to ensure that the .env file, which contains sensitive data (like your API key), is not committed to version control.

Open or create a .gitignore file in the root of your project.

Add the following line to the .gitignore file to prevent the .env file from being tracked by Git:


.env
This ensures the .env file remains private.

7. **Start the Application**

Once the dependencies are installed and the .env file is set up, start the development server with the following command:

 ```bash
npm start
```
This will launch the application at http://localhost:3000/. Open this URL in your browser to view the app.