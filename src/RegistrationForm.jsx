import React, { useState } from 'react';


const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    mobile: '',
    email: '',
    gender: '',
    dob: '',
    course: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (Object.values(formData).some(field => !field)) {
      alert("Please fill out all fields.");
      return;
    }
    alert(`Data stored successfully:\nName: ${formData.name}\nAddress: ${formData.address}\nMobile: ${formData.mobile}\nEmail: ${formData.email}\nGender: ${formData.gender}\nDOB: ${formData.dob}\nCourse: ${formData.course}`);
    setFormData({ name: '', address: '', mobile: '', email: '', gender: '', dob: '', course: '' });
  };

  const handleCancel = () => {
    setFormData({ name: '', address: '', mobile: '', email: '', gender: '', dob: '', course: '' });
  };

  return (
    <form onSubmit={handleRegister} style={{ maxWidth: '400px', margin: 'auto' }}>
      <h3>Registration Form</h3>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      /><br /><br />
      <textarea
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
      ></textarea><br /><br />
      <input
        type="text"
        name="mobile"
        placeholder="Mobile"
        value={formData.mobile}
        onChange={handleChange}
      /><br /><br />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      /><br /><br />
      <div>
        Gender: 
        <label><input type="radio" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={handleChange} /> Male</label>
        <label><input type="radio" name="gender" value="Female" checked={formData.gender === 'Female'} onChange={handleChange} /> Female</label>
      </div><br />
      <input
        type="date"
        name="dob"
        value={formData.dob}
        onChange={handleChange}
      /><br /><br />
      <select name="course" value={formData.course} onChange={handleChange}>
        
        <option value="">Select Course</option>
        <option value="Biology">Biology</option>
        <option value="Computer Science">Computer Science</option>
        <option value="Commerce">Commerce</option>
        <option value="Humanities">Humanities</option>
      </select><br /><br />
      <button type="submit">Register</button>
      <button type="button" onClick={handleCancel} style={{ marginLeft: '10px' }}>Cancel</button>
    </form>
  );
};

export default RegistrationForm;
