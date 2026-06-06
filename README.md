# InterviewIQ - AI Interview Agent

InterviewIQ is an AI-powered smart mock interview preparation platform designed to help job seekers practice realistic interviews, receive detailed performance metrics, and improve their technical knowledge, communication, and confidence.

---

## 🚀 Key Features

* **Resume-Based Contextual Interviews:** Upload a resume PDF to automatically extract job roles, experience level, key projects, and skills to tailor questions.
* **AI Question Generation:** Automatically generate 5 level-graded questions (easy, medium, hard) tailored to the candidate's background using the OpenRouter AI integration (GPT-4o-mini).
* **Interactive AI Voice & Video Interview:** 
  * Real-time browser-based speech-to-text (Web Speech API) transcription.
  * Voice synthesis response (text-to-speech) mimicking an AI interviewer.
  * Simulated video avatar that plays/pauses during speech.
* **Granular Grading & Feedback:** Score answers out of 10 across three domains: *Confidence*, *Communication*, and *Correctness*, along with actionable feedback from the AI.
* **Performance Dashboard & PDF Reports:** View progress graphs, score breakdowns, and export professional performance reports using `jsPDF`.
* **Razorpay Credits System:** Integrated checkout flow allowing users to purchase packages using Razorpay to top up credits needed to run AI interviews.
* **Firebase Google Authentication:** Quick and secure sign-in with Google.

---

## 🛠️ Tech Stack

### Frontend (Client)
* **Framework:** React 19 (built with Vite)
* **State Management:** Redux Toolkit
* **Styling:** Tailwind CSS v4 & Motion (framer-motion) for premium micro-animations
* **Icons:** React Icons
* **Charts & Analytics:** Recharts & React Circular Progressbar
* **PDF Export:** jsPDF & jsPDF-Autotable

### Backend (Server)
* **Framework:** Node.js with Express.js (ES Modules)
* **Database:** MongoDB (using Mongoose schemas)
* **AI Integration:** OpenRouter API (GPT-4o-mini model)
* **PDF Parsing:** pdfjs-dist (legacy worker stream reader)
* **Payments:** Razorpay Node SDK & Crypto signature verification
* **Auth:** JSON Web Tokens (JWT) & Cookie Parser middleware
* **File Uploads:** Multer disk storage

---

## 📂 Project Structure

```text
AI-Interview-Agent/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── assets/         # Images, illustrations, and video avatar files
│   │   ├── components/     # UI components (Navbar, Footer, Steps 1-3, Timer)
│   │   ├── pages/          # Pages (Home, Auth, Pricing, History, Report, InterviewPage)
│   │   ├── redux/          # Redux Toolkit store and user slice
│   │   ├── utils/          # Firebase and external client utilities
│   │   ├── App.jsx         # App router and central layout
│   │   └── main.jsx        # App entry point
│   ├── vite.config.js
│   └── package.json
│
├── server/                 # Backend Node/Express application
│   ├── src/
│   │   ├── config/         # Database and JWT token setup configs
│   │   ├── controllers/    # Request controllers (auth, user, payment, interview)
│   │   ├── middlewares/    # Custom middlewares (isAuth, multer upload)
│   │   ├── models/         # MongoDB schemas (User, Interview, Payment)
│   │   ├── routes/         # Express router endpoints
│   │   └── services/       # External API integrations (OpenRouter, Razorpay)
│   ├── index.js            # Server entry point
│   └── package.json
└── README.md
```

---

## ⚙️ Setup & Configuration

To run the application locally, you will need to set up environment files (`.env`) in both the client and server directories.

### 1. Server Configuration (`server/.env`)
Create a `.env` file inside the `server/` directory and configure the following variables:

```env
PORT=5001
MONGO_URI=mongodb://localhost:27017/ai_interview_agent
JWT_SECRET=your_jwt_secret_key_here

# Razorpay Developer Credentials
RAZORPAY_KEY_ID=rzp_test_xxxxxx
RAZORPAY_KEY_SECRET=xxxxxxxxxxxx

# OpenRouter API Key for AI generation
OPENROUTER_API_KEY=sk-or-v1-xxxxxx
```

### 2. Client Configuration (`client/.env`)
Create a `.env` file inside the `client/` directory and configure the following variables:

```env
# Razorpay Client-Side Key ID (must match backend RAZORPAY_KEY_ID)
VITE_RAZORPAY_KEY_ID=rzp_test_xxxxxx

# Firebase Web App Config API Key
VITE_FIREBASE_APIKEY=AIzaSyxxxxxxxx
```

---

## 🏃 Run the Application

Follow these steps to spin up the development environment:

### Step 1: Start the Backend Server
```bash
cd server
npm install
npm run dev
```
The server will boot up and listen on port `5001`.

### Step 2: Start the Frontend Client
```bash
cd client
npm install
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.
