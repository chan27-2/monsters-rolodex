import "./card-list.styles.css";
import { Card } from "../card/card.component";

export const MonsterCard = (props) => (
  <div className="card-list">
    {props.mns.map((m) => (
      <Card key={m.id} monster={m} />
    ))}
  </div>
);
