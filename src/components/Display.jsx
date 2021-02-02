import { connect } from "react-redux";
import Card from "./Card";
import { motion } from "framer-motion";

const Display = (props) => {
  return (
    <motion.ul
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
      className="list-unstyled d-flex p-0 flex-wrap justify-content-center display px-2">
      {props.restaurants.map((res, index) => (
        <Card
          resImg={res.restaurant.featured_image}
          resName={res.restaurant.name}
          resAddr={res.restaurant.location.address}
          resCuis={res.restaurant.cuisines}
          resRating={res.restaurant.user_rating.aggregate_rating}
          key={index}
        />
      ))}
    </motion.ul>
  );
};

const mapStateToProps = (state) => ({
  city: state.city,
  restaurants: state.restaurants,
});

export default connect(mapStateToProps)(Display);
