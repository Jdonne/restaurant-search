const Card = (props) => {
  return (
    <li className="border rounded resCard m-2 p-2 d-flex flex-column ">
      <img
        className="cardImg border rounded w-100  mt-1"
        src={props.resImg}
        alt={props.resName}
      />
      <span className="d-flex py-2 border-bottom">
        <div className="subhead name fw-bold">Restaurant: </div>
        <div className="">{props.resName}</div>
      </span>

      <span className="d-flex py-2 border-bottom">
        <div className="subhead fw-bold">Address: </div>
        <div className="">{props.resAddr}</div>
      </span>

      <span className="d-flex py-2 mb-2 border-bottom">
        <div className="subhead fw-bold">Cuisine: </div>
        <div className="">{props.resCuis}</div>
      </span>
      <span className="d-flex py-2 mb-2">
        <div className="subhead fw-bold">Rating: </div>
        <div className="">{props.resRating}&#9733;</div>
      </span>
    </li>
  );
};

export default Card;
