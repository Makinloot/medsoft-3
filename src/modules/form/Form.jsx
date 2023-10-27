import React from "react";
import { Button, Checkbox, Form as AntForm, Input, Card } from "antd";
import styles from "./Form.module.css";

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
        style={{ width: "90%", margin: "0 auto" }}
      >
        <h2 className={styles.title}>ჰისტოპათოლოგიური კვლევა</h2>

        <div className="group-container">
          <div className={styles.groupInputs}>
            <InputField />
            <InputField />
            <InputField />
            <InputField />
            <InputField />
            <InputField />
          </div>
        </div>

        {/* <AntForm.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </AntForm.Item> */}
      </AntForm>
    </div>
  );
}

function InputField({ label, name, message, required }) {
  return (
    <AntForm.Item
      label={<label>username</label>}
      name="username"
      rules={[
        {
          required: true,
          message: "Please input your username!",
        },
      ]}
      labelCol={{ span: 24 }}
    >
      <Input />
    </AntForm.Item>
  );
}
