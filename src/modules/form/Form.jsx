/* eslint-disable react/prop-types */
import { Button, Checkbox, Form as AntForm, Input, Select } from "antd";
import styles from "./Form.module.css";
import { AiOutlineClose } from "react-icons/ai";

export default function Form() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <AntForm
        name="basic"
        // initialValues={{
        //   remember: true,
        // }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        style={{
          width: "90%",
          margin: "0 auto",
          border: "2px solid #ccc",
          padding: "1rem",
          borderRadius: "4px",
        }}
      >
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>ჰისტოპათოლოგიური კვლევა</h2>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <AiOutlineClose size={20} />
          </div>
        </div>

        <InputField select templateSelect label="შაბლონი" noLabel />
        <div className={styles.groupContainer}>
          <div className={styles.groupInputs}>
            <InputField label={"პათოლოგ-ანატომი:"} select />
            <InputField label={"მასალის შემოსვლის თარიღი:"} type={"date"} />
            <InputField label={"განყოფილება:"} margin />
            <InputField
              label={"დიაგნოზის გაცემის თარიღი:"}
              margin
              type={"date"}
            />
            <InputField label={"მკურნალი ექიმის სახელი, გვარი:"} />
            <InputField label={"გამომგზავნი დაწესებულება:"} />
          </div>
          <div className={styles.groupCheckbox}>
            <Checkbox>ფაქსიმილი</Checkbox>
            <Checkbox>დაბლოკე ჩანაწერი</Checkbox>
            <InputField label={"კვლევის N:"} />
          </div>
        </div>
        <InputField label={"LAB კოდი და დასახელება:"} select margin />
        <InputField label={"კლინიკური დიაგნოზი:"} textarea margin />
        <div className={styles.doubleInput} style={{ margin: "10px 0" }}>
          <InputField label={"მასალის სახე:"} />
          <InputField label={"ორგანო:"} />
        </div>
        <InputField label={"მიკროსკოპია:"} textarea />
        <InputField label={"ჰისტოპათოლოგიური დასკვნა:"} textarea margin />
        <InputField label={"შენიშვნა:"} textarea />
        <div className={styles.buttonsContainer}>
          <Button type="primary" htmlType="submit">
            შენახვა
          </Button>
          <Button>გაუქმება</Button>
        </div>
      </AntForm>
    </div>
  );
}

function InputField({
  label,
  noLabel,
  textarea,
  select,
  templateSelect,
  margin,
  type,
}) {
  return (
    <div
      className={styles.selectLabContainer}
      style={margin && { margin: "10px 0" }}
    >
      <label>
        {noLabel ? null : label}
        {textarea ? (
          <Input.TextArea
            className={styles.selectLab}
            placeholder={label?.split(":")[0]}
          />
        ) : select ? (
          <Select
            className={
              templateSelect ? styles.selectTemplate : styles.selectLab
            }
            placeholder={label?.split(":")[0]}
            size="middle"
          ></Select>
        ) : (
          <Input placeholder={label?.split(":")[0]} type={type && type} />
        )}
      </label>
    </div>
  );
}
