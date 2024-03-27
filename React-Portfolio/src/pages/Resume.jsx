import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from '@mui/icons-material/Work'

function Resume() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#13a16a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2003 - 2007"
          iconStyle={{ background: "#13a16a", colo: "fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            New Britain High School, New Britian, Connecticut
          </h3>
          <p>Highschool Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023 - 2024"
          iconStyle={{ background: "#13a16a", colo: "fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Rutgers University Bootcamp, New Brunswick, New Jersey
          </h3>
          <p>Degree Pending</p>
        </VerticalTimelineElement>  <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2013 - Current"
          iconStyle={{ background: "#13a16a", colo: "fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Handyman, Manhattan, New York
          </h3>
          <p>Job</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Resume;
