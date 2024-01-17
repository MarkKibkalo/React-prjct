import { Card } from "react-bootstrap";

const CatDetails = ({ catDetails }) => {
  return (
    <div className="h-100">
      <div className="h-100">
        <Card.Img
          src={catDetails.url}
          alt={`Cat photo, breed ${catDetails.name}`}
          className="card-img"
        />
      </div>
    </div>
  );
};

export default CatDetails;