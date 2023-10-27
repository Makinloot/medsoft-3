import React, { useEffect, useState } from "react";
import DiagnosticRecord from "../modules/diagnosticRecord/DiagnosticRecord";

export default function EhrRecords() {
  const TEST_DATA = {
    diagnosticRecord: [
      {
        key: 2,
        recordMainTypeID: 29,
        recordID: 15219,
        recordDate: "10.27.2023 14:46:00",
        personalFullName: null,
        documentNo: "",
        comment: "",
        mGy: 0,
        cGycm2: 0,
        mSv: 0,
        µGym2: 0,
        conclusion: "",
        ncspResult: null,
        recordName: "დიაგნოსტიკური კვლევა",
        speciality: null,
        creatorUserID: 5184,
      },
      {
        key: 4,
        recordMainTypeID: 29,
        recordID: 15219,
        recordDate: "10.27.2023 14:46:00",
        personalFullName: null,
        documentNo: "",
        comment: "",
        mGy: 0,
        cGycm2: 0,
        mSv: 0,
        µGym2: 0,
        conclusion: "",
        ncspResult: null,
        recordName: "დიაგნოსტიკური კვლევა",
        speciality: null,
        creatorUserID: 5184,
      },
    ],
  };
  return (
    <div>
      {TEST_DATA.diagnosticRecord.map((item) => (
        <DiagnosticRecord key={item.key} {...item} />
      ))}
    </div>
  );
}
