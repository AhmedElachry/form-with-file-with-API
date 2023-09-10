import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import { Button, Form, Input, Upload } from "antd";

function App() {
  const [arName, setArName] = useState("");
  const [enName, setEnName] = useState("");
  const [url, setUrl] = useState("");
  const [file, setFile] = useState(null);

  const token = "152|PVSrBS1Rd4PDK6hEQSGPDQURRCrKWHPzVfkSfVPw";

  const formData = new FormData();

  formData.append("name_en", enName);
  formData.append("name_ar", arName);
  formData.append("link", url);
  formData.append("logo", file);

  const handleFormSubmit = (values) => {
    // const formData = new FormData(values);
    console.log([...formData]);
    console.log(values);
    // axios
    //   .post(
    //     "https://back-wallpaper.appssquare.com/api/admin/partners",
    //     formData,
    //     {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //     }
    //   )
    //   .then((res) => console.log(res.data))
    //   .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <Form
        onFinish={(values) => {
          handleFormSubmit(values);
        }}
        name="wrap"
        labelCol={{ flex: "110px" }}
        labelAlign="left"
        labelWrap
        wrapperCol={{ flex: 1 }}
        colon={false}
        style={{ maxWidth: 600, margin: "200px auto" }}
      >
        <Form.Item
          label="EN name"
          name="name_en"
          value={enName}
          onChange={(e) => {
            setEnName(e.target.value);
          }}
          rules={[
            { required: true, message: "please type a valid name in English" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="AR Name"
          name="name_ar"
          value={arName}
          onChange={(e) => {
            setArName(e.target.value);
          }}
          rules={[
            { required: true, message: "please type a valid name in Arabic" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="link"
          label="URL"
          value={url}
          onChange={(e) => {
            setUrl(e.target.value);
          }}
          rules={[
            {
              required: true,
              message: "please write a valid URL",
            },
            {
              type: "url",
            },
            {
              type: "string",
            },
          ]}
        >
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item
          name="logo"
          label="Upload"
          value={file}
          rules={[
            { required: true, message: "please select an image to upload " },
          ]}
        >
          <Upload
            listType="picture"
            maxCount={1}
            beforeUpload={() => false}
            onChange={(e) => setFile(e.file)}
            accept="image/jpeg, image/png, image/jpg, image/gif, image/webp"
          >
            <Button>Upload </Button>
          </Upload>
        </Form.Item>
        <Form.Item label=" ">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default App;
