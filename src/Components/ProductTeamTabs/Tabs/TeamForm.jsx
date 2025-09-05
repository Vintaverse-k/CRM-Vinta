import React, { useState } from "react";
import "../../ProductTeamTabs/Tabs/TeamForm.css"

const TeamForm = ({ onAddTeam }) => {
  const [formData, setFormData] = useState({
    name: "",
    nameAvatar: "",
    manager: "",
    managerAvatar: "",
    maxTeamIcons: 1,
    teams: [],
    email: "",
    directReport: { name: "", avatar: "" },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setFormData((prev) => ({ ...prev, [field]: url }));
    }
  };

  const handleDirectReportFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setFormData((prev) => ({
        ...prev,
        directReport: { ...prev.directReport, avatar: url },
      }));
    }
  };

  const handleTeamIconChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setFormData((prev) => {
        const newTeams = [...prev.teams];
        newTeams[index] = { src: url, alt: "" };
        return { ...prev, teams: newTeams };
      });
    }
  };

  const handleMaxTeamIconsChange = (e) => {
    const count = parseInt(e.target.value);
    setFormData((prev) => ({
      ...prev,
      maxTeamIcons: count,
      teams: Array(count).fill(null),
    }));
  };

  const handleDirectReportChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      directReport: { ...prev.directReport, [name]: value },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onAddTeam) onAddTeam(formData);

    setFormData({
      name: "",
      nameAvatar: "",
      manager: "",
      managerAvatar: "",
      maxTeamIcons: 1,
      teams: [],
      email: "",
      directReport: { name: "", avatar: "" },
    });
  };

  return (
    <form className="Team-form-tab" onSubmit={handleSubmit}>
      <h3>Add New Team Member</h3>

      <div className="task-assign-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="task-assign-group">
        <label>Avatar</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleFileChange(e, "nameAvatar")}
        />
        {formData.nameAvatar && (
          <img src={formData.nameAvatar} alt="" width={40} height={40} />
        )}
      </div>

      <div className="task-assign-group">
        <label>Manager</label>
        <input
          type="text"
          name="manager"
          value={formData.manager}
          onChange={handleChange}
          required
        />
      </div>

      <div className="task-assign-group">
        <label>Manager Avatar</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleFileChange(e, "managerAvatar")}
        />
        {formData.managerAvatar && (
          <img src={formData.managerAvatar} alt="" width={40} height={40} />
        )}
      </div>

      <div className="task-assign-group">
        <label>Number of Team Icons</label>
        <select value={formData.maxTeamIcons} onChange={handleMaxTeamIconsChange}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
      </div>

      <div className="task-assign-group">
        <label>Team Icons</label>
        {Array.from({ length: formData.maxTeamIcons }).map((_, i) => (
          <div key={i} style={{ marginBottom: "5px" }}>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleTeamIconChange(e, i)}
            />
            {formData.teams[i] && (
              <img src={formData.teams[i].src} alt="" width={30} height={30} />
            )}
          </div>
        ))}
      </div>

      <div className="task-assign-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="task-assign-group">
        <label>Direct Report Name</label>
        <input
          type="text"
          name="name"
          value={formData.directReport.name}
          onChange={handleDirectReportChange}
        />
      </div>

      <div className="task-assign-group">
        <label>Direct Report Avatar</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleDirectReportFileChange}
        />
        {formData.directReport.avatar && (
          <img src={formData.directReport.avatar} alt="" width={40} height={40} />
        )}
      </div>

      <div className="task-assign-btn-container">
        <button type="submit">Add Team Member</button>
      </div>
    </form>
  );
};

export default TeamForm;
