A simple MERN stack application demonstrating Razorpay payment gateway integration for online payments.

🚀 Features

Secure payment checkout using Razorpay

Backend order creation with Node.js & Express

Payment verification using Razorpay signature

Simple React UI for initiating payments

MongoDB support for storing payment details

🛠 Tech Stack

Frontend: React (Vite)

Backend: Node.js, Express

Database: MongoDB

Payments: Razorpay API

⚙️ Setup
# Install dependencies
npm install

# Start backend
npm run server

# Start frontend
npm run dev

🔐 Environment Variables

Create a .env file in the backend:

RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret

📌 Notes

node_modules is ignored using .gitignore

package.json should NOT be hidden

Do not expose Razorpay secret keys on the frontend

✅ Status

✔️ Payment flow working
✔️ Ready for portfolio / demo use
