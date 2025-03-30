import React from "react";

import styles from "./JobResponsibilities.module.css";

export const JobResponsibilities = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Resposibilities Job Description</h1>
        <p className={styles.heading}>Project Design:</p>
        <p className={styles.description}>
          {" "}
          Review FEED, schematic, and detailed designs, ensuring compliance with
          quality, safety, and project timelines. Respond to RFIs.
        </p>
        <p className={styles.heading}>Onsite Review & Supervision:</p>
        <p className={styles.description}>
          {" "}
          Inspect engineering deliverables, shop drawings, material submittals,
          and installation/testing procedures. Conduct site supervision and
          factory visits.
        </p>
        <p className={styles.heading}>Electrical Calculations:</p>
        <p className={styles.description}>
          {" "}
          Perform load flow, short circuit, voltage drop, earthing, harmonics,
          and power quality studies using ETAP and AMTECH.
        </p>
        <p className={styles.heading}>Regulatory Compliance:</p>
        <p className={styles.description}>
          {" "}
          Prepare approval documents and ensure adherence to local/international
          standards (ADDC, DEWA, NEC, IEEE, NFPA, IEC).
        </p>
        <p className={styles.heading}>Team Leadership:</p>
        <p className={styles.description}>
          {" "}
          Lead and manage a team of 12 electrical engineers and inspectors.
          Installation & Commissioning: Oversee design, installation, and
          commissioning of HV (132kV), MV (33kV, 13.8kV), UPS, SCMS,
          transformers, MCCs, VFDs, and protection relays.
        </p>
        <p className={styles.heading}> Instrumentation & Control:</p>
        <p className={styles.description}>
          {" "}
          Review P&IDs, hook-up drawings, and loop diagrams. Conduct instrument
          calibration, loop testing, and HAZOP analysis.
        </p>
        <p className={styles.heading}> Infrastructure Works:</p>
        <p className={styles.description}>
          {" "}
          Supervise the installation of MV cables, substations, street lighting,
          feeder pillars, and fiber optic networks.
        </p>
        <p className={styles.heading}> ICT/ELV Systems: </p>
        <p className={styles.description}>
          {" "}
          Review and oversee shop drawings, installations, and commissioning of
          structured cabling, CCTV, BMS, access control, fire alarms, and
          lightning protection.
        </p>
        <p className={styles.heading}> Data Center Design: </p>
        <p className={styles.description}>
          {" "}
          Design and supervise Tier 3 & 4 data centers, ensuring redundancy in
          power and ICT networks. Project Management: Ensure project delivery
          through risk management, quality control, resource allocation, and
          stakeholder coordination.
        </p>
      </div>

      {/* <div className={styles.topBlur} />
      <div className={styles.bottomBlur} /> */}
    </section>
  );
};
