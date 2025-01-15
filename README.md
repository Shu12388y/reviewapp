# InterviewPrep Platform

A platform where software engineers can share and browse real interview questions asked by top tech companies. Built with **Next.js 14**, **React 18**, and **Tailwind CSS**.

## Features

- **Submit Questions**: Users can submit interview questions they were asked.
- **Browse Questions**: Users can browse questions submitted by others.
- **User Dashboard**: Users can view, edit, and delete their own posts.
- **Authentication**: Users can log in and log out securely.

## Tech Stack

- **Frontend**: Next.js 14, React 18, Tailwind CSS
- **Backend**: Node.js, Express.js (or your preferred backend framework)
- **Database**: MongoDB (or your preferred database)
- **Authentication**: JWT (JSON Web Tokens)

## Setup Instructions

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MongoDB (or your preferred database)

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/interviewprep.git
cd interviewprep

```
### Step 2: Install Dependencies
```bash
npm install
# or
yarn install
```

### Step 3: Set Up Environment Variables 
```bash
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```


### Step 4: Run the Development Server
```bash
npm run dev
# or
yarn dev
```

### Step 5: Build for Production
```bash
npm run build
# or
yarn build
```

### Test

```bash
Test User
email: test1234@gmail.com
password: test1234
```
