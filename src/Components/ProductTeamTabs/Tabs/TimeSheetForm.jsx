// TimeSheetForm.jsx
import React, { useState } from "react";
import "../../ProductTeamTabs/Tabs/TimeSheetForm.css"

const TimeSheetForm = ({ onCreateTask }) => {
  const [name, setName] = useState("");
  const [hours, setHours] = useState("");
  const [date, setDate] = useState("");
  const [avatar, setAvatar] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !hours || !date) return;

    try {
      const reader = new FileReader();
      reader.onloadend = () => {
        const avatarURL = avatar ? reader.result : "assets/default-avatar.png";

        // Convert hours to 7-days array for Timesheet component
        const hoursArray = Array(7).fill(0);
        const submittedDate = new Date(date);
        const startDate = new Date(2025, 3, 20); // same as Timesheet default start
        const dayIndex = Math.floor(
          (submittedDate - startDate) / (1000 * 60 * 60 * 24)
        );
        if (dayIndex >= 0 && dayIndex < 7) hoursArray[dayIndex] = Number(hours);

        if (onCreateTask) {
          onCreateTask({
            name,
            nameAvatar: avatarURL,
            hours: hoursArray,
          });
        }

        // Reset form
        setName("");
        setHours("");
        setDate("");
        setAvatar(null);
      };

      if (avatar) reader.readAsDataURL(avatar);
      else reader.onloadend();
    } catch (err) {
      console.error("Failed to add timesheet:", err);
    }
  };

  return (
    <form
      className="time-sheet-form-tab"
      onSubmit={handleSubmit}
    >
      <div className="task-assign-group">
        <label>Name</label>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="task-assign-group">
        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

      <div className="task-assign-group">
        <label>Hours</label>
        <input
          type="number"
          placeholder="Hours"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          required
          min={0}
        />
      </div>

      <div className="task-assign-group">
        <label>Avatar</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
        />
      </div>

      <div className="task-assign-btn-container">
        <button type="submit">Add TimeSheet</button>
      </div>
    </form>
  );
};

export default TimeSheetForm;
