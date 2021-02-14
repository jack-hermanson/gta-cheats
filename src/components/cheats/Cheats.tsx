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
          cardTitle="Cheats"
          label="Search Cheats"
          onSearchTextChange={(event) => this.handleSearchTextChange(event)}
          onClearButtonClick={(event) => this.handleClearButtonClick(event)}
        />
        <StandardCard className="mt-4" title="Results">
          <ListGroup className="list-group-flush">
            {this.state.cheats.map((cheat) => (
              <Cheat cheat={cheat} key={cheat.name} />
            ))}
          </ListGroup>
        </StandardCard>
      </Fragment>
    );
  }
}
