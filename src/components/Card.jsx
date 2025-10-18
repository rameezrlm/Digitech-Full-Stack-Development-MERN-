import "../Styles/Card.css";

const Card = ({url,title,description,btn1="Get Details",btn2="Add Items"}) => {
  return (
    <div className="card">
      <div className="img-div">
        <img
        src={url}
        alt=""
      />
      </div>
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
        <button>{btn1}</button>
        <button>{btn2}</button>
      </div>
    </div>
  );
};

export default Card;
