import { CardHeader as CardHeaderOriginal, CardTitle } from "reactstrap";

interface Props {
  title: string;
}

export const CardHeader: React.FC<Props> = (props: Props) => {
  return (
    <CardHeaderOriginal>
      <CardTitle>
        <h4>{props.title}</h4>
      </CardTitle>
    </CardHeaderOriginal>
  );
};
