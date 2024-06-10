import "./App.css";
import Cards from "./Components/Cards";

function App() {
  return (
    <>
      <h1 className="heading">My Contacts</h1>
      <Cards
        img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        tel="+123 456 789"
        mail="b@beyonce.com"
        name="beyonce"
      />

      <Cards
        name="Jack Bauer"
        img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
        tel="+987 654 321"
        mail="jack@nowhere.com"
      />

      <Cards
        img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        tel="+123 456 789"
        mail="b@beyonce.com"
        name="beyonce"
      />

      <Cards
        name="Chuck Norris"
        img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
        tel="+918 372 574"
        mail="gmail@chucknorris.com"
      />
    </>
  );
}

export default App;
