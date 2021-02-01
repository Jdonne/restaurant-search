const Card = (props) => {
  return (
    <li className="border rounded resCard m-2 p-2 d-flex flex-column ">
      <img
        className="cardImg border rounded w-100  mt-1"
        src={props.resImg}
        alt={props.resName}
      />
      <span className="d-flex pt-2">
        <div className="address name">Restaurant: </div>
        <div className="">{"  " + props.resName}</div>
      </span>

      <span className="d-flex pt-2">
        <div className="address">Address: </div>
        <div className="">{"  " + props.resAddr}</div>
      </span>

      <span className="d-flex pt-2 mb-2">
        <div className="address">Cuisine: </div>
        <div className="">{"  " + props.resCuis}</div>
      </span>
    </li>
  );
};

export default Card;
