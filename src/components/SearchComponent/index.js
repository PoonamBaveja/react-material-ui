import SearchBar from "material-ui-search-bar";
import SearchIcon from "@material-ui/icons";

const SearchComponent = () => {
    return(
        <SearchBar
            placeholder="search dimension/field"
            // value={this.state.value}
            // onChange={(newValue) => this.setState({ value: newValue })}
            // onRequestSearch={() => doSomethingWith(this.state.value)}
        />
        
    )
}
export default SearchComponent;