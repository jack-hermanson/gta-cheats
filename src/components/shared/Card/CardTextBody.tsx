import { CardText } from "reactstrap";

interface Props {
  paragraph?: string;
}

export const CardTextBody: React.FC<Props> = (props: Props) => {
  return <CardText className="lead">{props.paragraph}</CardText>;
};
