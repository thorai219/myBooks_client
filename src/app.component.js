import Nav from "./components/nav/nav.component";
import AuthPage from "./pages/auth/auth.page";

import "./app.styles.css";

const App = () => {
  return (
    <div className="app-container">
      <Nav />
      <AuthPage />
    </div>
  );
};

export default App;
