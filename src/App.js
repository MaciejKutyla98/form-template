import './App.scss';
import ImagePage from "./components/ImagePage/ImagePage";
import Form from "./components/Form/Form";
import React, { useRef, useEffect } from 'react';
import {isMobile} from 'react-device-detect';

function App() {
    const setFocusOnName = useRef(null);
    const setFocusOnForm = useRef(null);

    function handleFocus() {
        if (!isMobile) {
            setFocusOnName.current?.focus?.();
        } else {
            setFocusOnForm.current?.scrollIntoView({
                behavior: "smooth",
            });
        }
    }

  return (
      <div className="formTemplate">
          <div className="formTemplate_imagePage">
              <ImagePage onClick={() => {
                  handleFocus();
              }}/>
          </div>
          <div className="formTemplate_formWrapper" ref={setFocusOnForm}>
              <Form
                  focusOnName={setFocusOnName}
              />
          </div>
      </div>
  );
}

export default App;
