import React, { useCallback, useEffect, useState } from "react";
import {
  Button,
  IconButton,
  Input,
  PixelIcon,
  Progress,
  setDarkModeActivation,
  Toast,
} from "nes-ui-react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
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
        <Progress value={70} max={100} color={"error"} />
        <Toast>안녕하세요</Toast>
        <Button style={{ marginLeft: "15px" }} color="primary">
          정보 수정
        </Button>
        <Button style={{ marginLeft: "15px" }} color="error">
          회원 탈퇴
        </Button>
        <IconButton />
        <section className="icon-list">
          <i className="nes-icon twitter is-large"></i>
          <i className="nes-icon facebook is-large"></i>
          <i className="nes-icon instagram is-large"></i>
          <i className="nes-icon github is-large"></i>
          <i className="nes-icon google is-large"></i>
          <i className="nes-icon gmail is-large"></i>
          <i className="nes-icon medium is-large"></i>
          <i className="nes-icon linkedin is-large"></i>
          <i className="nes-icon twitch is-large"></i>
          <i className="nes-icon youtube is-large"></i>
          <i className="nes-icon reddit is-large"></i>
          <i className="nes-icon whatsapp is-large"></i>
        </section>
      </div>
    </div>
  );
}

export default App;
