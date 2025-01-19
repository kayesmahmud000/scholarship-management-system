# Scholarship Management System

## Purpose
The Scholarship Management System is designed to simplify and streamline the process of managing and applying for scholarships. This platform enables users to explore available scholarships, submit applications, and track their application status seamlessly.

## Live URL
You can access the live application at: [SCHOLAR TRACK PRO](https://moha-milon-projects.firebaseapp.com/)

## Key Features
- User Authentication (Login/Sign-up)
- Dashboard for Applicants
- Admin & Moderator Panel for Managing Scholarships and Applications
- Stripe Payment Integration for Application Fees
- AOS (Animate on Scroll) for Smooth Animations
- Helmet Integration for Dynamic SEO Management
- Real-time Application Status Tracking

## Technologies Used
- **Frontend:** React.js, Vite, Tailwind CSS 
- **Backend:** Node.js, Express.js, MongoDB
- **Payment Integration:** Stripe
- **Animations:** AOS (Animate on Scroll)
- **SEO:** React Helmet

## Stripe Payment Integration
Stripe has been integrated to handle secure payments for application fees. It allows users to complete transactions using their credit or debit cards. Features include:
- Secure Card Payment via Stripe Checkout
- Dynamic Amount Calculation
- Easy-to-use Payment Form

### How to Test Payments
Use Stripe's test card numbers (e.g., `4242 4242 4242 4242` for successful transactions). For more details, refer to [Stripe Testing Docs](https://stripe.com/docs/testing).

## React Helmet for SEO
React Helmet has been used to dynamically manage page titles, meta descriptions, and other head elements, improving the site's SEO performance.

## AOS (Animate on Scroll) Animations
AOS library has been integrated to provide smooth scroll-based animations, enhancing user experience and engagement.

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - `.env` for the backend
   - `.env.local` for the frontend
4. Start the development server:
   ```bash
   npm run dev
   ```

## NPM Packages Used
- `react`
- `vite`
- `tailwindcss`
- `stripe`
- `@stripe/react-stripe-js`
- `@stripe/stripe-js`
- `aos`
- `react-helmet`
- `@emotion/react`
- `@headlessui/react`
- `@tanstack/react-query`
- `axios`
- `firebase`
- `locact-spinners`
- `recharts`
- `react-awesome-reveal`
- `react-hot-toast`
- `react-hook-form`
- `sweetalert2`
- `swiper`


## Contribution
Feel free to contribute to this project by forking the repository and submitting a pull request.

---

This README provides all the necessary information for users and contributors to get started with the Scholarship Management System.
