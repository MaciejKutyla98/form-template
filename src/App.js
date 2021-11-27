import './App.scss';
import ImagePage from "./components/ImagePage/ImagePage";
import Form from "./components/Form/Form";
import React, { useRef, useEffect } from 'react';
import {isMobile} from 'react-device-detect';

function App() {
    const setFocusOnName = useRef(null);
    const setFocusOnCustomerID = useRef(null);

    function handleFocus() {
        if (!isMobile) {
            setFocusOnName.current?.focus?.();
        } else {
            setFocusOnCustomerID.current?.focus?.();
        }
    }

  return (
      <div className="formTemplate">
          <div className="formTemplate_imagePage">
              <ImagePage onClick={() => {
                  handleFocus();
              }}/>
          </div>
          <div className="formTemplate_formWrapper">
              <Form
                  focusOnName={setFocusOnName}
                  focusOnCustomerID={setFocusOnCustomerID}
              />
          </div>
      </div>
  );
}

export default App;
