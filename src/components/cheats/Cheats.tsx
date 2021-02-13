import { ChangeEvent, Component, Fragment } from "react";
import { SearchCard } from "../search/SearchCard";
import { StandardCard } from "../shared/Card/StandardCard";

interface Props {}

interface State {
  cheats: Array<string>;
}

export class Cheats extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      cheats: ["test"],
    };

    this.props = props;
  }

  state: State;
  props: Props;

  handleSearchTextChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ cheats: [...this.state.cheats, event.target.value] });
    console.log(this.state.cheats);
  }

  render() {
    return (
      <Fragment>
        <SearchCard
          label="Search Cheats"
          onSearchTextChange={(event) => this.handleSearchTextChange(event)}
        />
        <StandardCard className="mt-4" title="Results">
          <p>{this.state.cheats}</p>
        </StandardCard>
      </Fragment>
    );
  }
}
