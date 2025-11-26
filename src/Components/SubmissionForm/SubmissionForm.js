
import React, { useState } from 'react';
import axios from 'axios';
import './SubmissionForm.css';

const SubmissionForm = ({ onSubmitSuccess }) => {
    const [formData, setFormData] = useState({
        name: '', university: '', cell: '', designation: '', email: '', title: '', authors: '', abstract: '', manuscriptFile: null
    });

    const handleChange = e => {
        const { name, value, files } = e.target;
        setFormData({ ...formData, [name]: files ? files[0] : value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const data = new FormData();
            for (let key in formData) if (formData[key]) data.append(key, formData[key]);

            const res = await axios.post('https://vercel-backhandjournal-7xz3.onrender.com/api/submissions', data);
            alert(res.data.message);

            setFormData({ name: '', university: '', cell: '', designation: '', email: '', title: '', authors: '', abstract: '', manuscriptFile: null });
            onSubmitSuccess();
        } catch (err) {
            console.error(err);
            alert('Submission failed');
        }
    };

    return (
        <form onSubmit={handleSubmit} encType="multipart/form-data">
            <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
            <input name="university" placeholder="University" value={formData.university} onChange={handleChange} required />
            <input name="cell" type='number' placeholder="Cell" value={formData.cell} onChange={handleChange} required />
            <input name="designation" placeholder="Designation" value={formData.designation} onChange={handleChange} required />
            <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
            <input name="authors" placeholder="Authors" value={formData.authors} onChange={handleChange} required />
            <textarea name="abstract" placeholder="Abstract" value={formData.abstract} onChange={handleChange} required></textarea>
            <input type="file" name="manuscriptFile" onChange={handleChange} required />
            <button type="submit">Submit</button>
        </form>
    );
};

export default SubmissionForm;