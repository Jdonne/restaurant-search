import { connect } from "react-redux";
import Search from "./components/Search";
import Display from "./components/Display";
import "./App.css";

const App = (props) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h1 className="my-2" id="title">
        Restaurant Search
      </h1>
      <Search />
      <Display />
    </div>
  );
};

const mapStateToProps = (state) => ({
  city: state.city,
  restaurants: state.restaurants,
});

export default connect(mapStateToProps)(App);
