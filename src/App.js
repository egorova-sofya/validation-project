import logo from "./logo.svg";
import "./App.css";
import YoutubeForm from "./copmonents/YoutubeForm/YoutubeForm";
import FormikContainer from "./copmonents/FormikContainer";
import OldYoutubeForm from "./copmonents/YoutubeForm/OldYoutubeForm";
import LoginForm from "./copmonents/AuthForms/LoginForm";
import RegistrationForm from "./copmonents/AuthForms/RegistrationForm";
import EnrollmentForm from "./copmonents/EnrollmentForm/EnrollmentForm";

function App() {
  return (
    <div className="App">
      <EnrollmentForm />
      {/* <RegistrationForm /> */}
      {/* <LoginForm /> */}
      {/* <OldYoutubeForm /> */}
      {/* <YoutubeForm /> */}
      {/* <FormikContainer /> */}
    </div>
  );
}

export default App;
