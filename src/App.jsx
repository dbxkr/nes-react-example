import React, { useCallback, useEffect, useState } from "react";
import {
  Button,
  Input,
  Progress,
  setDarkModeActivation,
  Toast,
} from "nes-ui-react";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = useCallback(() => {
    setDarkMode(!darkMode);
  }, [darkMode]);

  useEffect(() => setDarkModeActivation(darkMode), [darkMode]);

  return (
    <div>
      <Button color="warning" borderInverted onClick={toggleDarkMode}>
        Dark mode on/off
      </Button>
      <div style={{ width: "50%", margin: "auto" }}>
        <Input style={{ height: "65px", fontSize: "35px" }} />
        <Progress value={40} max={100} color={"success"} />
        <Toast>안녕하세요</Toast>
        <Button style={{ marginLeft: "15px" }} color="primary">
          정보 수정
        </Button>
        <Button style={{ marginLeft: "15px" }} color="error">
          회원 탈퇴
        </Button>
      </div>
    </div>
  );
}

export default App;
