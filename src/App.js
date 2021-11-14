import './App.css';
import ImagePage from "./components/ImagePage/ImagePage";
import FormWrapper from "./components/FormWrapper/FormWrapper";

function App() {
  return (
    <div className="formTemplate">
        <div className="formTemplate_imagePage">
            <ImagePage />
        </div>
        <div className="formTemplate_formWrapper">
            <FormWrapper />
        </div>
    </div>
  );
}

export default App;
