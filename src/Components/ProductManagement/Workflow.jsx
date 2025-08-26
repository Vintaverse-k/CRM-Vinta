"use client";
import React from "react";
import "../../styles/Product/Product.css";

const ProjectBoard = () => {
  return (
    <div className="board-container-01">
      {/* Top Section */}
      <div className="task-source-01">
        <h3>How are tasks being added to this <br />project?</h3>
        <div className="source-item-01">
          <img src="assets/manual.svg" alt="manual" className="icon-18" /> Manually
        </div>
        <p className="source-ptag">Task Templates</p>
        <div className="source-item-01">
          <img src="assets/chrome.svg" alt="ai-ui-kit" className="icon-18" /> Matex AI Meeting Assistance UI Kit
        </div>
        <div className="source-item-01 add-source-01">
          <img src="assets/intakeplus.svg" alt="add" className="icon-18" /> Intake source
        </div>
      </div>
<div className="centered-image-container">
  <img src="assets/leftrightarrow.png" alt="Centered Image" />
</div>

      {/* Sections Row */}
      <div className="sections-row-01">
        {/* To do */}
        <div className="section-card-01">
          <h4>Section
             <img src="assets/3dot.svg" alt="ai-ui-kit" className="workflow-icons" />
          </h4>
          
          <div className="title-tasks-row-01">
            <div className="title-section-01">
              <span className="dot purple"></span> To do
            </div>
            <p className="tasks-01">
               <img src="assets/projectchek.svg" alt="manual" className="workflow-icons-01" />
              3 incomplete tasks</p>
          </div>
          <div className="task-02">
          <p>When tasks move to this section, do this automatically:</p>
          </div>
              <div className="automation-box-01">
  <span>
    <img src="assets/manual.svg" alt="arrow" className="workflow-icons" /> When Task is moved to a section 
    <img src="assets/3dot.svg" alt="arrow" className="workflow-icons" />
  </span>
  <div className="status-row-01">
    <p className="extra-text-01">Your left side text</p>
    <p className="status-01">Active</p>
  </div>
</div>
          <div className="add-action-01">
            <img src="assets/intakeplus.svg" alt="add-action" className="workflow-icons20" /> More actions
          </div>
        </div>

        {/* In Progress */}
        <div className="section-card-01">
          <h4>Section</h4>
          <div className="title-tasks-row-01">
            <div className="title-section-01">
              <span className="dot purple"></span> In Progress
            </div>
            <p className="tasks-01">
               <img src="assets/projectchek.svg" alt="manual" className="workflow-icons-01" />
              incomplete tasks</p>
          </div>

          <div className="task-02">
          <p>When tasks move to this section, do this automatically:</p>
          </div>
             <div className="automation-box-01">
  <span>
    <img src="assets/manual.svg" alt="arrow" className="workflow-icons" /> When Task is moved to a section

    <img src="assets/3dot.svg" alt="arrow" className="workflow-icons" />
  </span>
  <div className="status-row-01">
    <p className="extra-text-01">Your left side text</p>
    <p className="status-01">Active</p>
  </div>
</div>
          <div className="add-action-01">
            <img src="assets/intakeplus.svg" alt="add-action" className="workflow-icons20" /> More actions
          </div>
        </div>

        {/* Done */}
        <div className="section-card-01">
          <h4>Section</h4>
          <div className="title-tasks-row-01">
            <div className="title-section-01">
              <span className="dot blue"></span> Done
            </div>
            <p className="tasks-01">
              <img src="assets/projectchek.svg" alt="manual" className="workflow-icons-01" />
              3 incomplete tasks</p>
          </div>

          <div className="task-02">
          <p>When tasks move to this section, do this automatically:</p>
          </div>
         <div className="automation-box-01">
  <span>
    <img src="assets/manual.svg" alt="arrow" className="workflow-icons" /> When Task is moved to a section

    <img src="assets/3dot.svg" alt="arrow" className="workflow-icons" />
  </span>
  <div className="status-row-01">
    <p className="extra-text-01">Your left side text</p>
    <p className="status-01">Active</p>
  </div>
</div>

          <div className="add-action-01">
            <img src="assets/intakeplus.svg" alt="add-action" className="workflow-icons20" /> More actions
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBoard;
