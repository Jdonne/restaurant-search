import { connect } from "react-redux";

const Search = (props) => {
  let zomatoRes;
  let zomatoCity;
  let cityRes;
  let cityId;
  let citySearch;
  let refSearch;

  const handleCityChange = (e) => {
    citySearch = e.target.value;
    props.dispatch({ type: "CHANGE_CITY_INPUT", citySearch });
  };
  const handleRefChange = (e) => {
    refSearch = e.target.value;
    props.dispatch({ type: "CHANGE_REF_INPUT", refSearch });
  };
  async function cityFetch(e) {
    try {
      const zomatoAPI = await fetch(
        "https://developers.zomato.com/api/v2.1/cities?q=" + props.cityInput,
        { headers: { "user-key": "4f42c5284bfce5f27f00f8bebf22082d" } }
      );
      zomatoCity = await zomatoAPI.json();
      if (zomatoCity.location_suggestions !== []) {
        cityId = zomatoCity.location_suggestions[0].id;
        console.log(cityId);
        resFetch();
      }
    } catch {
      console.log("error");
    }
  }
  async function resFetch() {
    try {
      const zomatoAPI = await fetch(
        "https://developers.zomato.com/api/v2.1/search?entity_id=" +
          cityId +
          "&entity_type=city&q=" +
          props.refInput +
          // "&q=" +
          "&sort=rating&order=desc",
        { headers: { "user-key": "4f42c5284bfce5f27f00f8bebf22082d" } }
      );
      zomatoRes = await zomatoAPI.json();
      if (zomatoRes.restaurants !== []) {
        cityRes = zomatoRes.restaurants;
        props.dispatch({ type: "CHANGE_RESTAURANTS", cityRes });
        console.log(props.restaurants);
      }
    } catch {
      console.log("error");
    }
  }
  const handleCity = () => {
    cityFetch();

    console.log(props.restaurants);
  };
  const handleRefine = () => {
    cityFetch();
  };

  return (
    <div className="searchBar px-1">
      <div className="input-group mb-3 ">
        <div class="input-group-prepend">
          <span class="input-group-text">City</span>
        </div>
        <input
          aria-label="Enter a City Name"
          id="cityInput"
          className="form-control"
          type="text"
          placeholder="Enter a City Name"
          aria-describedby="button-addon1"
          onChange={handleCityChange}></input>

        <div className="input-group-append">
          <button
            className="btn btn-light btn-outline-secondary"
            onClick={handleCity}
            type="button"
            id="button-addon1">
            Search
          </button>
        </div>
      </div>
      <div className="input-group mb-3 ">
        <div class="input-group-prepend">
          <span class="input-group-text">Refine</span>
        </div>
        <input
          aria-label="Enter Keyword to Refine Search"
          className="form-control"
          type="text"
          placeholder="Enter Keyword to Refine Search"
          aria-describedby="button-addon2"
          onChange={handleRefChange}></input>

        <div className="input-group-append">
          <button
            className="btn btn-light btn-outline-secondary"
            onClick={handleRefine}
            type="button"
            id="button-addon2">
            Refine
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  refInput: state.refInput,
  cityInput: state.cityInput,
  restaurants: state.restaurants,
});

export default connect(mapStateToProps)(Search);