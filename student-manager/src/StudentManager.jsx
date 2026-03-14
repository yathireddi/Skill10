import React, { useState } from 'react';
import './StudentManager.css';

const initialStudents = [
  { id: '101', name: 'Ananya Sharma', course: 'B.Tech CSE' },
  { id: '102', name: 'Rohan Mehta', course: 'BCA' },
  { id: '103', name: 'Priya Nair', course: 'M.Sc Data Science' },
  { id: '104', name: 'Kiran Reddy', course: 'MBA Tech' },
  { id: '105', name: 'Siddharth Rao', course: 'B.Tech ECE' },
];

const emptyStudent = { id: '', name: '', course: '' };

export default function StudentManager() {
  const [students, setStudents] = useState(initialStudents);
  const [newStudent, setNewStudent] = useState(emptyStudent);
  const [error, setError] = useState('');
  const [highlight, setHighlight] = useState(null);

  // Update newStudent fields on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewStudent((prev) => ({ ...prev, [name]: value }));
    setError('');
  };

  // Add student to list
  const handleAdd = () => {
    const { id, name, course } = newStudent;

    if (!id.trim() || !name.trim() || !course.trim()) {
      setError('⚠ All fields are required.');
      return;
    }

    if (students.some((s) => s.id === id.trim())) {
      setError('⚠ A student with this ID already exists.');
      return;
    }

    const added = { id: id.trim(), name: name.trim(), course: course.trim() };
    setStudents((prev) => [added, ...prev]);
    setNewStudent(emptyStudent);
    setHighlight(added.id);
    setTimeout(() => setHighlight(null), 1500);
  };

  // Delete student by id
  const handleDelete = (id) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-tag">ACADEMIC PORTAL</div>
        <h1 className="header-title">Student Manager</h1>
        <p className="header-sub">Manage enrollment records in real time</p>
      </header>

      {/* Add Student Form */}
      <section className="form-section">
        <h2 className="section-label">// ADD NEW STUDENT</h2>
        <div className="form-grid">
          <div className="field">
            <label htmlFor="id">Student ID</label>
            <input
              id="id"
              name="id"
              type="text"
              placeholder="e.g. 106"
              value={newStudent.id}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="e.g. Arjun Kumar"
              value={newStudent.name}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label htmlFor="course">Course</label>
            <input
              id="course"
              name="course"
              type="text"
              placeholder="e.g. B.Tech CSE"
              value={newStudent.course}
              onChange={handleChange}
            />
          </div>
        </div>

        {error && <p className="error-msg">{error}</p>}

        <button className="btn-add" onClick={handleAdd}>
          <span>+</span> Add Student
        </button>
      </section>

      {/* Student List */}
      <section className="list-section">
        <div className="list-header">
          <h2 className="section-label">// ENROLLED STUDENTS</h2>
          <span className="count-badge">{students.length} record{students.length !== 1 ? 's' : ''}</span>
        </div>

        {students.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">◎</div>
            <p>No students available</p>
          </div>
        ) : (
          <div className="table-wrapper">
            <table className="student-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Course</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr
                    key={student.id}
                    className={highlight === student.id ? 'row-highlight' : ''}
                  >
                    <td className="cell-id">#{student.id}</td>
                    <td className="cell-name">{student.name}</td>
                    <td className="cell-course">
                      <span className="course-pill">{student.course}</span>
                    </td>
                    <td>
                      <button
                        className="btn-delete"
                        onClick={() => handleDelete(student.id)}
                        title="Remove student"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}
