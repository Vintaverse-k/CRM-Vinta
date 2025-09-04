import React, { useState } from "react";
import "../../styles/Allteam/AllTeam.css";

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
          ? Array(parseInt(value)).fill("") // reset member images array
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
    <form className="add-team-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        placeholder="Team Name"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="startDate"
        value={formData.startDate}
        placeholder="Start Date"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="dueDate"
        value={formData.dueDate}
        placeholder="Alias / Due"
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="assignedTo"
        value={formData.assignedTo}
        placeholder="Members"
        onChange={handleChange}
        min={1}
        required
      />

      {/* Team Icon Upload */}
      <label>Upload Team Icon:</label>
      <input type="file" accept="image/*" onChange={handleTeamIconChange} />

      {/* Member Images Upload */}
      {Array.from({ length: formData.assignedTo }).map((_, index) => (
        <div key={index}>
          <label>Upload Member {index + 1} Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleMemberImageChange(index, e)}
            required
          />
        </div>
      ))}

      <button type="submit">Add Team</button>
    </form>
  );
};

export default TeamForm;
