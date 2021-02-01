import { connect } from "react-redux";
import Search from "./components/Search";
import Display from "./components/Display";
import { motion } from "framer-motion";
import "./App.css";

const App = (props) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="my-2"
        id="title">
        Restaurant Search
      </motion.h1>
      <Search />
      <p>{props.errorMsg}</p>
      <Display />
    </div>
  );
};

const mapStateToProps = (state) => ({
  city: state.city,
  restaurants: state.restaurants,
  errorMsg: state.errorMsg,
});

export default connect(mapStateToProps)(App);
