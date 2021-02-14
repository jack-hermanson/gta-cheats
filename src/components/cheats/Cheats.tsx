import { ChangeEvent, Component, Fragment, MouseEvent } from "react";
import { SearchCard } from "../shared/Search/SearchCard";
import { StandardCard } from "../shared/Card/StandardCard";
import { Cheat } from "./Cheat";
import cheatData from "../../data/cheats.json";
import { ListGroup, ListGroupItem } from "reactstrap";

interface Props {}

interface State {
  cheats: Array<{ name: string; code: string }>;
  searchText: string;
}

export class Cheats extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      cheats: cheatData.sort(this.sortCheatsList),
      searchText: "",
    };

    this.props = props;
  }

  state: State;
  props: Props;

  resetCheatsList() {
    this.setState({ cheats: cheatData.sort(this.sortCheatsList) });
  }

  handleSearchTextChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ searchText: event.target.value });
    this.filterCheatsBySearch(event.target.value);
  }

  handleClearButtonClick(event?: MouseEvent<HTMLButtonElement>) {
    this.setState({ searchText: "" });
    this.resetCheatsList();
  }

  filterCheatsBySearch(query: string) {
    this.setState({
      cheats: cheatData
        .filter((cheat) => {
          if (cheat.name.toLowerCase().includes(query.toLowerCase()))
            return cheat;
          return null;
        })
        .sort(this.sortCheatsList),
    });
  }

  sortCheatsList = (
    cheat1: { name: string; code: string },
    cheat2: { name: string; code: string }
  ) => {
    return cheat1.name > cheat2.name ? 1 : -1;
  };

  render() {
    return (
      <Fragment>
        <SearchCard
          cardTitle="Cheats"
          label="Search Cheats"
          onSearchTextChange={(event) => this.handleSearchTextChange(event)}
          onClearButtonClick={(event?) => this.handleClearButtonClick(event)}
        />
        <StandardCard className="my-4" title="Results">
          <ListGroup className="list-group-flush">
            {this.state.cheats.map((cheat) => (
              <Cheat cheat={cheat} key={cheat.name} />
            ))}
            {this.state.cheats.length > 0 ? (
              ""
            ) : (
              <ListGroupItem className="px-0">
                No results found for "{this.state.searchText}".
              </ListGroupItem>
            )}
          </ListGroup>
        </StandardCard>
      </Fragment>
    );
  }
}
