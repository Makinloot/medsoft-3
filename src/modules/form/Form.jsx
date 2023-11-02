/* eslint-disable react/prop-types */
import { Checkbox, Form as AntForm, Input, Select, Modal, Button } from "antd";
import styles from "./Form.module.css";
import { useAppContext } from "../../context/ContextProvider";

export default function Form() {
  const { isModalOpen, setIsModalOpen } = useAppContext();

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const initialValues = {
    მიკროსკოპია: "DefaultUsername",
    ["პათოლოგ-ანატომი"]: "testtest",
  };

  return (
    <Modal
      title="Basic Modal"
      open={isModalOpen}
      onCancel={() => setIsModalOpen(false)}
      width={"90%"}
      footer={null}
    >
      <AntForm
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        initialValues={initialValues}
      >
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>ჰისტოპათოლოგიური გამოკვლევა</h2>
        </div>

        <div style={{ width: "300px" }}>
          <InputField select templateSelect label="შაბლონი" noLabel />
        </div>
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
        <InputField
          label={"მიკროსკოპია:"}
          textarea
          value={initialValues.მიკროსკოპია}
        />
        <InputField label={"ჰისტოპათოლოგიური დასკვნა:"} textarea margin />
        <InputField label={"შენიშვნა:"} textarea />
        <div className={styles.buttonsContainer}>
          <Button type="primary" htmlType="submit">
            შენახვა
          </Button>
          <Button onClick={() => setIsModalOpen(false)}>გაუქმება</Button>
        </div>
      </AntForm>
    </Modal>
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
  value,
}) {
  return (
    <AntForm.Item
      className={styles.inputFieldContainer}
      style={margin && { margin: "10px 0" }}
      name={label?.split(":")[0]}
    >
      <label>
        {noLabel ? null : <span>{label}</span>}
        {textarea ? (
          <Input.TextArea
            className={styles.inputField}
            placeholder={label?.split(":")[0]}
            defaultValue={value}
          />
        ) : select ? (
          <Select
            className={
              templateSelect ? styles.selectTemplate : styles.inputField
            }
            placeholder={label?.split(":")[0]}
            size="middle"
            defaultValue={value}
          ></Select>
        ) : (
          <Input
            placeholder={label?.split(":")[0]}
            type={type && type}
            defaultValue={value}
          />
        )}
      </label>
    </AntForm.Item>
  );
}
