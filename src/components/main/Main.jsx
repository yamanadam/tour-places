import "./Main.css";
import "../../helper/data";
import { data } from "../../helper/data";
import Card from "./Card";

const Main = () => {
  return (
    <div>
      <h1 className="tour">POPULAR TOUR PLACES</h1>
      <div className="containerCard">
        {data.map((item) => {
          const { id, title, desc, image } = item;
          return <Card key={id} title={title} desc={desc} img={image} />;
        })}
        ;
      </div>
    </div>
  );
};

export default Main;
