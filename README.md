# ACSIS-2026 Conference Website

Pure React.js website for the ACSIS-2026 International Conference at ALIET Vijayawada.

## Tech Stack
- React 18 + Vite
- React Router v6
- EmailJS (confirmation emails)
- No backend, no database — Google Form handles all submissions

## Quick Start

```bash
npm install
npm run dev
```
Open http://localhost:5173

## Build for Production
```bash
npm run build
```
Upload the `dist/` folder to any static host (Netlify, Vercel, GitHub Pages).

## EmailJS Setup (for confirmation emails)

1. Go to https://emailjs.com and create a free account
2. Add an Email Service (Gmail recommended)
3. Create an Email Template with these variables:
   - `{{to_name}}` — author name
   - `{{to_email}}` — author email
   - `{{author_track}}` — selected track
   - `{{author_category}}` — UG/PG/Researcher
   - `{{author_college}}` — institution
   - `{{submission_date}}` — date of submission
   - `{{conference_date}}` — April 10, 2026
4. Copy your Service ID, Template ID, and Public Key
5. Open `src/pages/Submit.jsx` and replace:
   ```js
   const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
   const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
   const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';
   ```

## Sample EmailJS Template (copy this into EmailJS)

Subject: ACSIS-2026 | Paper Submission Received — {{to_name}}

Body:
```
Dear {{to_name}},

Thank you for submitting your research paper to ACSIS-2026!

We have received your submission details:
- Track: {{author_track}}
- Category: {{author_category}}
- Institution: {{author_college}}
- Submission Date: {{submission_date}}

Please ensure you have uploaded your paper (Word document) via the Google Form.

Important Dates:
- Submission Closes: April 2, 2026
- Notification of Acceptance: April 4, 2026
- Registration Deadline: April 6, 2026
- Conference Day: April 10, 2026

For any queries, contact us at acsis2k26@aliet.ac.in

Best regards,
ACSIS-2026 Organizing Committee
Andhra Loyola Institute of Engineering & Technology
Vijayawada – 520008
```

## Deployment on Netlify (Free)

1. Run `npm run build`
2. Go to https://netlify.com
3. Drag and drop the `dist/` folder
4. Done! You get a free URL like `acsis2026.netlify.app`

## Google Form
The paper submission redirects to:
https://docs.google.com/forms/d/e/1FAIpQLSe3I9UxHME0HRxBDemJSp3BOA2qyVR4cURpco1uJdebubu6og/viewform

All responses are automatically stored in Google Sheets linked to the form.
