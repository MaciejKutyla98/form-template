import './App.scss';
import ImagePage from "./components/ImagePage/ImagePage";
import Form from "./components/Form/Form";

function App() {
  return (
      <div className="formTemplate">
          <div className="formTemplate_imagePage">
              <ImagePage />
          </div>
          <div className="formTemplate_formWrapper">
              <Form />
          </div>
      </div>
  );
}

export default App;
