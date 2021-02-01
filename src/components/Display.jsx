import { connect } from "react-redux";
import Card from "./Card";

const Display = (props) => {
  return (
    <ul className="list-unstyled d-flex p-0 flex-wrap justify-content-center display">
      {props.restaurants.map((res, index) => (
        <Card
          resImg={res.restaurant.featured_image}
          resName={res.restaurant.name}
          resAddr={res.restaurant.location.address}
          resCuis={res.restaurant.cuisines}
          key={index}
        />
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  city: state.city,
  restaurants: state.restaurants,
});

export default connect(mapStateToProps)(Display);
