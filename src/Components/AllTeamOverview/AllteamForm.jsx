import React, { useState } from "react";
import "../AllTeamOverview/AllTeamForm.css";

const TeamForm = ({ onAddTeam }) => {
  const [formData, setFormData] = useState({
    name: "",
    icon: "",
    startDate: "",
    dueDate: "",
    assignedTo: 1,
    memberImages: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "assignedTo" ? parseInt(value) : value,
      memberImages:
        name === "assignedTo" && prev.memberImages.length !== parseInt(value)
          ? Array(parseInt(value)).fill("")
          : prev.memberImages,
    }));
  };

  const handleTeamIconChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, icon: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleMemberImageChange = (index, e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedImages = [...formData.memberImages];
        updatedImages[index] = reader.result;
        setFormData((prev) => ({ ...prev, memberImages: updatedImages }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTeam(formData);
    setFormData({
      name: "",
      icon: "",
      startDate: "",
      dueDate: "",
      assignedTo: 1,
      memberImages: [],
    });
  };

  return (
    <form className="All-team-form-tab" onSubmit={handleSubmit}>
      <h3>Add New Team</h3>

      <div className="task-assign-group">
        <label>Team Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Team Name"
          onChange={handleChange}
          required
        />
      </div>

      <div className="task-assign-group">
        <label>Start Date</label>
        <input
          type="text"
          name="startDate"
          value={formData.startDate}
          placeholder="Start Date"
          onChange={handleChange}
          required
        />
      </div>

      <div className="task-assign-group">
        <label>Alias / Due</label>
        <input
          type="text"
          name="dueDate"
          value={formData.dueDate}
          placeholder="Alias / Due"
          onChange={handleChange}
          required
        />
      </div>

      <div className="task-assign-group">
        <label>Number of Members</label>
        <input
          type="number"
          name="assignedTo"
          value={formData.assignedTo}
          placeholder="Members"
          onChange={handleChange}
          min={1}
          required
        />
      </div>

      <div className="task-assign-group">
        <label>Upload Team Icon</label>
        <input type="file" accept="image/*" onChange={handleTeamIconChange} />
      </div>

      {Array.from({ length: formData.assignedTo }).map((_, index) => (
        <div className="task-assign-group" key={index}>
          <label>Upload Member {index + 1} Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleMemberImageChange(index, e)}
            required
          />
        </div>
      ))}

      <div className="task-assign-btn-container">
        <button type="submit">Add Team</button>
      </div>
    </form>
  );
};

export default TeamForm;
