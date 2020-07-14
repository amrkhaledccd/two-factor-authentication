import React from "react";
import { Button, Typography } from "antd";
import { DingtalkOutlined } from "@ant-design/icons";
import "./QrCode.css";

const QrCode = (props) => {
  const { Title } = Typography;

  return (
    <div className="qrcode-container">
      <DingtalkOutlined style={{ fontSize: 50 }} />
      <Title level={4}>Scan the QrCode using authenticator app</Title>
      <img src={props.location.state.imageUrl} />
      <Button
        onClick={() => props.history.push("/")}
        shape="round"
        className="login-form-button"
        size="large"
      >
        Continue to login
      </Button>
    </div>
  );
};

export default QrCode;
