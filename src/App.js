import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Techs from "./components/Techs";
import UserInput from "./components/UserInput";
import UserCard from "./components/UserCard";
import Colors from "./components/Colors";
import User from "./components/User";
import UserContact from "./components/UserContact";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      <Techs />
      <UserInput />
      <UserCard />
      <Colors />
      <User
        firstName="MukhammadBobur"
        lastName="Pakhriev"
        country="South Korea"
      />
      <UserContact
        email="bobpakhriev@gmail.com"
        phone="010-4303-4443"
        linkedin="mukhammadboburpakhriev"
        github="Bobstyle023"
      />
    </div>
  );
}

export default App;
