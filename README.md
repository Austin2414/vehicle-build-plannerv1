# Vehicle Build Planner

A simple interactive vehicle build planner that validates part compatibility based on a selected turbo setup.

## Project Overview

The Vehicle Build Planner allows a user to select major engine components (intake, exhaust, turbocharger, injectors, fuel pump) and validates whether the selected combination is compatible.

The frontend collects the selected part IDs and sends them to a backend API.
The backend resolves the parts, applies validation rules, and returns a set of boolean findings.
The frontend then translates those findings into user-friendly messages with severity levels.

This project was built to practice end-to-end full stack fundamentals, from request handling and validation logic to frontend state management and UI feedback.

## Tech Stack

-**Frontend**
- HTML
- CSS
- JavaScript (vanilla)

-**Backend**
- Node.js
- Express

## Features
- Interactive part selection using dropdowns
- Client-side validation to ensure all required parts are selected
- Backend validation based on turbo flow requirements
- Clear compatibility feedback with severity levels:
    ✅ OK
    ⚠️ Warning
    ❌ Error
- Clean dark-themed UI with visual severity indicators

## Running the Project Locally
Backend
1. Clone the repository:

    git clone git@github.com:Austin2414/vehicle-build-plannerv1.git


2. Navigate into the backend folder:

    cd vehicle-build-plannerv1/backend


3. Install dependencies:

    npm install


4. Start the server:

    npm start

    The backend will run on http://localhost:3000.

Frontend

1. Navigate to the frontend folder:

    cd vehicle-build-plannerv1/frontend


2. Open index.html in your browser.

    No build step or framework is required.

## What I Learned
- How to design and implement a simple REST API
- How to validate incoming request data safely using guard clauses
- How to resolve IDs into usable objects on the backend
- How to separate business logic (validation rules) from request handling
- How to structure frontend code to handle async API responses
- How to translate backend validation results into clear user feedback
- How to manage UI state and severity without overcomplicating the frontend
- How to keep frontend and backend responsibilities cleanly separated

This project helped solidify how data flows through a full stack application from user input to backend logic and back to the UI.

## Future Improvements
- Add more validation rules (fuel type, drivetrain limits, airflow math)
- Persist builds and allow users to save/load configurations
- Add unit tests for backend validation logic
- Deploy the app so it can be used without running locally
- Improve accessibility and keyboard navigation