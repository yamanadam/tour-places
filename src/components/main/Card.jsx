const Card = ({ id, img, desc, title }) => {
  console.log(title);
  return (
    <div className="card">
      <h1>{title}</h1>
      <img src={img} alt="img" style={{ width: "400px" }} />
      <p>{desc}</p>
    </div>
  );
};

export default Card;
