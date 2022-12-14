import SearchComponent from "../SearchComponent";
import { Switch } from "@material-ui/core";

const Header = () => {
    return(
        <>
            <h3>
            UWTA PROFILE UI DESIGN
            </h3>
            <h1>
            Employee Profile UI: Default View (SAVED Mode)
            </h1>

            <div className="topSection">
                <div className="logoHeaderWrapper">
                    <img className="logo" src="/logo.png" alt="profile-logo"/>
                    <h2>
                        work assignment dimensions for
                        <span>John Smith</span>
                    </h2>
                </div>
                <div className="switchSearchWrapper">
                    <Switch />
                    <SearchComponent />
                </div>

            </div>

        </>
    )
}
export default Header;