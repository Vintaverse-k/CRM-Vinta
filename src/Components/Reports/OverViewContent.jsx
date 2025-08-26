import React from "react";

const OverviewContent = () => {
  return (
    <>
      {/* Summary Cards */}
      <section className="mytask-summary-cards--01">
        {[
          {
            title: "My Complete tasks",
            bgClass: "bg-purple-light--01",
            iconColor: "purple",
          },
          {
            title: "My Incomplete tasks",
            bgClass: "bg-purple-lightest--01",
            iconColor: "purple",
          },
          {
            title: "My Overdue Task",
            bgClass: "bg-cyan-light--01",
            iconColor: "cyan",
          },
          {
            title: "My Total tasks",
            bgClass: "bg-orange-light--01",
            iconColor: "orange",
          },
        ].map(({ title, bgClass, iconColor }, idx) => (
          <div key={idx} className={`mytask-card--01 ${bgClass}`}>
            <div className="mytask-card-header--01">
              <div
                className={`mytask-icon-circle--01 mytask-icon-${iconColor}--01`}
              >
                <img
                  src="assets/mycomplete.svg"
                  alt="Icon"
                  className="mytask-priority-icon--01"
                />
              </div>
              <h3 className="mytask-card-title--01">{title}</h3>
              <button className="mytask-menu-btn--01">
                {" "}
                <img src="assets/3dot.svg" alt="Icon" />
              </button>
            </div>
            <div className="mytask-card-content--01">
              <h2 className="mytask-card-number--01">12 Task</h2>
            </div>
          </div>
        ))}
      </section>

      {/* Lower Grid */}
      <section className="mytask-lower-grid--01">
        {/* status overview */}
        <div className="mytask-card--01 mytask-status-overview--01">
          <div className="mytask-card-header--01">
            <h3 className="mytask-card-title--01">
              <img src="assets/status.svg" alt="Icon" /> Status Overview
            </h3>
            <button className="mytask-menu-btn--011">
              {" "}
              Filter <img src="assets/filter.svg" alt="Icon" />
            </button>
          </div>

          <div className="mytask-status-grid--01">
            {[
              {
                img: "assets/img1.png",
                name: "Varun",
                text: "In Progress",
                bgColor: "#ede9fe",
              },
              {
                img: "assets/img2.png",
                name: "Leisha",
                text: "In Progress",
                bgColor: "#32ABB91A",
              },
              {
                img: "assets/img1.png",
                name: "Manoj",
                text: "In Progress",
                bgColor: " #dcfce7",
              },
              {
                img: "assets/img2.png",
                name: "Shubham",
                text: "In Progress",
                bgColor: "#FF692E1A",
              },
            ].map(({ img, name, text, bgColor }, idx) => (
              <div
                key={idx}
                className="mytask-status-box--01"
                style={{ backgroundColor: bgColor }}
              >
                <img src={img} alt={name} className="mytask-status-icon--01" />
                <div className="mytask-status-text-wrapper--01">
                  <span className="mytask-status-name--01">{name}</span>
                  <span className="mytask-status-desc--01">{text}</span>
                </div>
              </div>
            ))}
          </div>
          <h2 className="chart-heading">Total 12 Portfolio</h2>
          <div className="mytask-chart-placeholder--001">Chart goes here</div>
        </div>

        {/* Priority Breakdown */}
        <div className="mytask-card--01 mytask-priority-breakdown--01">
          <div className="mytask-card-header--01">
            <h3 className="mytask-card-title--01">
              <img src="assets/totaltime.svg" alt="Icon" /> Priority Breakdown
            </h3>
            <button className="mytask-menu-btn--01">...</button>
          </div>
          <div className="mytask-priority-list--01">
            {Array(3)
              .fill(0)
              .map((_, idx) => (
                <div
                  key={idx}
                  className="mytask-priority-item--01 mytask-priority-high--01"
                >
                  <div className="mytask-priority-text--01">
                    {/* content code here any extra */}
                  </div>
                </div>
              ))}
          </div>
          <div className="mytask-chart-placeholder--pi">
  <img src="assets/pichart.png" alt="Chart" className="chart-image" />
</div>

        </div>
      </section>

      {/* Bottom Grid */}
      <section className="mytask-bottom-grid--01">
        {/* Total Time Worked */}
        <div className="mytask-card--01 mytask-total-time-worked--01">
          <div className="mytask-card-header--01">
            <h3 className="mytask-card-title--01">
              <img src="assets/totaltime.svg" alt="Icon" />
              Tasks Status
            </h3>
            <button className="mytask-menu-btn--001">
              See All
              <img src="assets/downarrow.svg" alt="Icon" />
            </button>
          </div>
          <div className="mytask-buttons--01">
            <button className="mytask-btn-primary--01">
              <img src="assets/ontrack.svg" alt="Icon" />
              On Track
            </button>
            <button className="mytask-btn-outline--01">
              <img src="assets/noupdates.svg" alt="Icon" />
              No Recent Update
            </button>
          </div>
          <div className="mytask-chart-placeholder--01">Chart goes here</div>
        </div>

        {/* Task Completed */}
        <div className="mytask-card--01 mytask-total-time-worked--01">
          <div className="mytask-card-header--01">
            <h3 className="mytask-card-title--01">
              <img src="assets/totaltime.svg" alt="Icon" /> Total Task by
              assignee
            </h3>
            <button className="mytask-menu-btn--001">
              Filter
              <img src="assets/downarrow.svg" alt="Icon" />
            </button>
          </div>
          <div className="mytask-buttons--01">
            <button className="mytask-btn-primary--01">
              <img src="assets/ontrack.svg" alt="Icon" />
              This Month
            </button>
            <button className="mytask-btn-outline--01">
              <img src="assets/lastmonth.svg" alt="Icon" />
              Last Month
            </button>
          </div>

          <div className="mytask-chart-placeholder--01">Chart goes here</div>
        </div>

        {/* Task Completed */}
        <div className="mytask-card--01 mytask-task-completed--01">
          <div className="mytask-card-header--01">
            <h3 className="mytask-card-title--01">
              <img src="assets/taskassign.svg" alt="Icon" /> Goals by Status
            </h3>
            <button className="mytask-menu-btn--001">
              Filter
              <img src="assets/downarrow.svg" alt="Icon" />
            </button>
          </div>
          <div className="mytask-progress-ring-wrapper--01">
            <img src="assets/chart78%.png" alt="Progress ring" />
          </div>
          <div className="mytask-progress-breakdown--01">
            <span>
              <img src="assets/purple.svg" alt="Icon" />To DO</span>
            <span>
              <img src="assets/blue.svg" alt="Icon" />In Progress</span>
            <span>
              <img src="assets/orange.svg" alt="Icon" />Done</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default OverviewContent;
