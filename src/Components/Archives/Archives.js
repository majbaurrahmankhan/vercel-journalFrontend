

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Archives.css";

const Archives = ({ refreshTrigger, adminEmail }) => {
  const [submissions, setSubmissions] = useState([]);
  const [expanded, setExpanded] = useState({});





  
  // Fetch submissions whenever refreshTrigger changes
  useEffect(() => {
    fetchData();
  }, [refreshTrigger]);

  const fetchData = async () => {
    try {
      const res = await axios.get("https://vercel-backhandjournal-7xz3.onrender.com/api/submissions");
      setSubmissions(res.data);
    } catch (err) {
      console.error("Error fetching submissions:", err);
    }
  };

  // Truncate abstract to first limit words
  const truncateWords = (text, limit) => {
    if (!text) return "";
    const clean = text.replace(/\s+/g, " ").trim();
    const words = clean.split(" ");
    return words.length > limit ? words.slice(0, limit).join(" ") + "..." : clean;
  };

  // Delete submission
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this submission?")) return;

    try {
      const res = await axios.delete(`https://vercel-backhandjournal-7xz3.onrender.com/api/submissions/${id}`);
      alert(res.data.message);
      fetchData(); // refresh list
    } catch (err) {
      console.error(err);
      alert("Failed to delete submission.");
    }
  };

  return (
    <div className="submissions-list">
      <h2>Submissions List</h2>
      <div className="table-wrapper">
  <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>University</th>
            <th>Cell</th>
            <th>Designation</th>
            <th>Email</th>
            <th>Abstract</th>
            <th>Manuscript</th>
            {adminEmail && <th>Action</th>} {/* Show delete column if admin */}
          </tr>
        </thead>
        <tbody>
          {submissions.map((sub) => (
            <tr key={sub._id}>
              <td>{sub.name || "-"}</td>
              <td>{sub.university || "-"}</td>
              <td>{sub.cell || "-"}</td>
              <td>{sub.designation || "-"}</td>
              <td>{sub.email || "-"}</td>
              <td>
                {sub.abstract ? (
                  <>
                    {expanded[sub._id] ? sub.abstract : truncateWords(sub.abstract, 20)}
                    {sub.abstract.split(" ").length > 20 && (
                      <button
                        onClick={() =>
                          setExpanded((prev) => ({ ...prev, [sub._id]: !prev[sub._id] }))
                        }
                      >
                        {expanded[sub._id] ? "View Less" : "View More"}
                      </button>
                    )}
                  </>
                ) : (
                  "No abstract"
                )}
              </td>
              <td>
                {sub.manuscriptFileId ? (
                  <a
                    href={`https://vercel-backhandjournal-7xz3.onrender.com/api/submissions/file/${sub.manuscriptFileId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View PDF
                  </a>
                ) : (
                  "No file"
                )}
              </td>

              {adminEmail && (
                <td>
                  <button onClick={() => handleDelete(sub._id)}>Delete</button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
        </table>
</div>

    </div>
  );
};

export default Archives;