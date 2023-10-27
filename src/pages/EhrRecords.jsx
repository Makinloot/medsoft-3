import React, { useEffect, useState } from "react";
import DiagnosticRecord from "../modules/diagnosticRecord/DiagnosticRecord";

export default function EhrRecords({ data }) {
  return (
    <div>
      {data?.diagnosticRecord.map((records) => (
        <DiagnosticRecord key={records.key} {...records} />
      ))}
    </div>
  );
}
