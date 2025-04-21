# BlogStack

A simple and interactive blog posting application built with React. BlogStack allows users to create, edit, and manage blog posts seamlessly with a real-time rich text editor and secure authentication.

## Visit the Website

[BlogStack Live](https://blogstack-five.vercel.app/)

## Features

- User authentication (Sign up / Sign in)
- Create, edit, and delete blog posts
- Rich text editor for writing posts
- Responsive design
- Real-time updates and smooth user experience

## Technologies Used

- **Frontend**: React
- **Backend**: Appwrite (Authentication & Database)
- **Rich Text Editor**: TinyMCE
- **Form Handling**: React Hook Form
- **Other Tools**: Tailwind CSS (for styling)

## Learnings

- Managing authentication and protected routes with Appwrite.
- Using Appwrite Database to store and retrieve posts securely.
- Integrating TinyMCE editor with React forms.
- Handling forms efficiently using React Hook Form.
- Understanding how to structure a full-stack project.
- Improving UI/UX with Tailwind CSS.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/maheshhattimare/blogstack.git
   ```
2. Navigate to the project directory:
   ```bash
   cd blogstack
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file and add your Appwrite project credentials.
5. Run the development server:
   ```bash
   npm run dev
   ```

## Usage

1. Open the application.
2. Sign up or log in.
3. Create new blog posts using the rich text editor.
4. Edit or delete your posts anytime.

## Setup Instructions

1. Create a new project in **Appwrite**.
2. Create a **Database** and a **Collection** for blog posts.
   - Add required attributes (example: `title`, `content`, `slug`, `featuredImage`, etc.).
3. Create a **Bucket** for storing blog images (optional, if uploading images).
4. Set correct **permissions** for authenticated users to **read** and **write**.
5. Copy your Appwrite credentials and create a `.env` file based on `.env.example`.
6. Run the project:
   ```bash
   npm run dev
   ```

> **Important**: Make sure your Appwrite project has CORS enabled for `http://localhost:5173` (or your live domain) to avoid access issues.
