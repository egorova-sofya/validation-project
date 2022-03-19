import logo from "./logo.svg";
import "./App.css";
import YoutubeForm from "./copmonents/YoutubeForm/YoutubeForm";
import FormikContainer from "./copmonents/FormikContainer";
import OldYoutubeForm from "./copmonents/YoutubeForm/OldYoutubeForm";

function App() {
  return (
    <div className="App">
      {/* <OldYoutubeForm /> */}
      {/* <YoutubeForm /> */}
      <FormikContainer />
    </div>
  );
}

export default App;
