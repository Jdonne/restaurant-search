import { connect } from "react-redux";
import { motion } from "framer-motion";

const Search = (props) => {
  let zomatoRes;
  let zomatoCity;
  let cityRes;
  let cityId;
  let citySearch;
  let refSearch;

  // tracks city input to state
  const handleCityChange = (e) => {
    citySearch = e.target.value;
    props.dispatch({ type: "CHANGE_CITY_INPUT", citySearch });
  };
  // tracks refine input to state
  const handleRefChange = (e) => {
    refSearch = e.target.value;
    props.dispatch({ type: "CHANGE_REF_INPUT", refSearch });
  };

  // fetches restaurants within city, with refine inputs (nested), according to rating
  async function cityFetch(e) {
    try {
      const zomatoAPI = await fetch(
        "https://developers.zomato.com/api/v2.1/cities?q=" + props.cityInput,
        { headers: { "user-key": "4f42c5284bfce5f27f00f8bebf22082d" } }
      );
      zomatoCity = await zomatoAPI.json();
      if (zomatoCity.location_suggestions !== []) {
        props.dispatch({ type: "CHANGE_NO_ERROR", cityRes });
        cityId = zomatoCity.location_suggestions[0].id;
        resFetch();
        props.dispatch({ type: "CHANGE_HIDDEN", display: "visibile" });
      }
    } catch {
      console.log("error");
      props.dispatch({
        type: "CHANGE_ERROR",
        msg: "No City Matches",
        error: "",
      });
    }
  }
  // fetching restaurants according to refine
  async function resFetch() {
    try {
      const zomatoAPI = await fetch(
        "https://developers.zomato.com/api/v2.1/search?entity_id=" +
          cityId +
          "&entity_type=city&q=" +
          props.refInput +
          "&sort=rating&order=desc",
        { headers: { "user-key": "4f42c5284bfce5f27f00f8bebf22082d" } }
      );
      zomatoRes = await zomatoAPI.json();
      if (zomatoRes.restaurants !== []) {
        cityRes = zomatoRes.restaurants;
        props.dispatch({ type: "CHANGE_RESTAURANTS", cityRes });
      }
    } catch {
      console.log("error");
    }
  }
  const handleCity = (e) => {
    e.preventDefault();
    cityFetch();
  };
  const handleRefine = (e) => {
    e.preventDefault();
    cityFetch();
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="searchBar px-2 pt-2">
      <form onSubmit={handleCity}>
        <div className="sr-only">
          Updating input and clicking search will change results
        </div>
        <div className="input-group mb-3 ">
          <div className="input-group-prepend">
            <span id="cityspan" className="input-group-text">
              City
            </span>
          </div>

          <input
            aria-label="Enter a City Name"
            id="cityInput"
            className="form-control"
            type="text"
            placeholder="Enter a City Name"
            aria-describedby="cityspan"
            onChange={handleCityChange}></input>

          <div className="input-group-append">
            <button
              aria-label="Click to search for restaurants in city"
              className="btn btn-light text-dark btn-outline-secondary"
              onClick={handleCity}
              type="button"
              id="btn1">
              Search
            </button>
          </div>
        </div>
      </form>

      <form onSubmit={handleRefine}>
        <div className="sr-only">
          Updating input and clicking search will change results
        </div>
        <div className={"input-group mb-3 " + props.refDisplay}>
          <div className="input-group-prepend">
            <span id="refinespan" className="input-group-text">
              Refine
            </span>
          </div>
          <input
            aria-label="Enter Keyword to Refine Search"
            className="form-control"
            type="text"
            placeholder="Enter Keyword to Refine Search"
            aria-describedby="refinespan"
            onChange={handleRefChange}></input>

          <div className="input-group-append">
            <button
              aria-label="Click to refine restaurant search with keyword"
              className="btn btn-light text-dark btn-outline-secondary"
              onClick={handleRefine}
              type="button"
              id="btn2">
              Refine
            </button>
          </div>
        </div>
      </form>
    </motion.section>
  );
};

const mapStateToProps = (state) => ({
  refInput: state.refInput,
  cityInput: state.cityInput,
  restaurants: state.restaurants,
  refDisplay: state.refDisplay,
});

export default connect(mapStateToProps)(Search);
