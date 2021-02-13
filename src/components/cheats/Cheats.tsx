import { stringify } from "querystring";
import { ChangeEvent, Component, Fragment } from "react";
import { SearchCard } from "../search/SearchCard";
import { StandardCard } from "../shared/Card/StandardCard";

interface Props {}

interface State {
  cheats: Array<string>;
  cheatsCounter: number;
  searchText: string;
}

export class Cheats extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      cheats: ["test"],
      cheatsCounter: 0,
      searchText: "",
    };

    this.props = props;
  }

  state: State;
  props: Props;

  handleSearchTextChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ searchText: event.target.value });
  }

  render() {
    return (
      <Fragment>
        <SearchCard
          label="Search Cheats"
          onSearchTextChange={(event) => this.handleSearchTextChange(event)}
        />
        <StandardCard className="mt-4" title="Results">
          <p>{this.state.searchText}</p>
        </StandardCard>
      </Fragment>
    );
  }
}
