# Student Manager — React useState Lab

A React component demonstrating **useState** with object arrays for managing student records dynamically.

## Features

- ✅ Add students with ID, Name, and Course fields
- ✅ Displays all students in a styled table
- ✅ Delete any student record instantly
- ✅ Shows "No students available" when list is empty
- ✅ Input validation (required fields, duplicate ID check)
- ✅ New row highlight animation on add
- ✅ Fully responsive layout

## Tech Stack

- React 18 (Hooks: `useState`)
- CSS (custom properties, CSS Grid, animations)
- Google Fonts (Syne + DM Mono)

## Getting Started

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Key Concepts

| Concept | Implementation |
|---|---|
| `useState` with object | `newStudent` state holds `{ id, name, course }` |
| `useState` with array | `students` state holds array of student objects |
| Controlled inputs | `onChange` updates `newStudent` fields |
| Adding to array | Spread operator: `[added, ...prev]` |
| Deleting from array | `.filter()` to exclude by id |
| Conditional render | Empty state message when `students.length === 0` |

## Component: `StudentManager`

```
src/
├── index.js            # React root entry
├── index.css           # Global CSS variables
├── StudentManager.jsx  # Main component
└── StudentManager.css  # Component styles
```

## GitHub

Push with:
```bash
git init
git add .
git commit -m "feat: student manager using React useState"
git remote add origin <your-repo-url>
git push -u origin main
```
