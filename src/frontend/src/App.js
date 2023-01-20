import { useEffect, useState } from 'react';
import { getAllStudents } from './client';

import './App.css';

function App() {
  const [students, setStudents] = useState([]);

  const fetchStudents = () => {
    getAllStudents()
    .then(response => response.json())
    .then(data => setStudents(data));
  }
  useEffect(() => {
    console.log("App mounted");
    fetchStudents();
  }, []);

  if (students.length === 0) {
    return <div>Loading...</div>
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Students</h1>
        <ul>
          {students.map(student => (
            <li key={student.id}>{student.name} - {student.email}</li>
          ))}
        </ul>
      </header>
    </div>
  )
}

export default App;
