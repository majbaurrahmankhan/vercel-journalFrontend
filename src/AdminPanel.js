
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminPanel = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    fetchSubmissions();
  }, []);

  // <-- Add the handleDelete function here
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this submission?")) return;

    try {
      const res = await axios.delete(`https://vercel-backhandjournal-7xz3.onrender.com/api/submissions/${id}`);
      alert(res.data.message);
      fetchSubmissions(); // refresh list
    } catch (err) {
      console.error(err);
      alert("Failed to delete submission.");
    }
  };

  const fetchSubmissions = async () => {
    try {
      const res = await axios.get('https://vercel-backhandjournal-7xz3.onrender.com/api/submissions');
      setSubmissions(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Admin Panel - Submissions</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Title</th>
            <th>Manuscript</th>
            <th>Action</th> {/* delete button */}
          </tr>
        </thead>
        <tbody>
          {submissions.map(sub => (
            <tr key={sub._id}>
              <td>{sub.name}</td>
              <td>{sub.title}</td>
              <td>
                {sub.manuscriptFileId ? (
                  <a
                    href={`https://vercel-backhandjournal-7xz3.onrender.com/api/submissions/file/${sub.manuscriptFileId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View PDF
                  </a>
                ) : 'No file'}
              </td>
              <td>
                <button onClick={() => handleDelete(sub._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;