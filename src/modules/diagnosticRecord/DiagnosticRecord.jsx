import { Card } from "antd";
import styles from "./DiagnosticRecord.module.css";
import Crup from "../crup/Crup";

export default function DiagnosticRecord(data) {
  const keys = Object.keys(data);

  return (
    <div>
      <Card style={{ width: "90%", margin: "2rem auto" }}>
        <h2 className={styles.title}>ჰისტოპათოლოგიური კვლევა</h2>
        <Crup />
        {keys.map((item, i) => (
          <TextGroup label={item} text={data[item]} key={i} />
        ))}
      </Card>
    </div>
  );
}

function TextGroup({ label, text }) {
  return (
    <div className={styles.text}>
      <strong>{label}: </strong>
      <span>{text}</span>
    </div>
  );
}
