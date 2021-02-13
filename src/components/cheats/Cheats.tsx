import { ChangeEvent, Component, Fragment, MouseEvent } from "react";
import { SearchCard } from "../search/SearchCard";
import { StandardCard } from "../shared/Card/StandardCard";
import cheatData from "../../data/cheats.json";

interface Props {}

interface State {
  cheats: Array<{ name: string; code: string }>;
  searchText: string;
}

export class Cheats extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      cheats: cheatData,
      searchText: "",
    };

    this.props = props;
  }

  state: State;
  props: Props;

  handleSearchTextChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ searchText: event.target.value });
  }

  handleClearButtonClick(event?: MouseEvent<HTMLButtonElement>) {
    this.setState({ searchText: "" });
  }

  render() {
    console.log(this.state.cheats);
    return (
      <Fragment>
        <SearchCard
          label="Search Cheats"
          onSearchTextChange={(event) => this.handleSearchTextChange(event)}
          onClearButtonClick={(event) => this.handleClearButtonClick(event)}
        />
        <StandardCard className="mt-4" title="Results">
          <p>{this.state.searchText}</p>
        </StandardCard>
      </Fragment>
    );
  }
}
