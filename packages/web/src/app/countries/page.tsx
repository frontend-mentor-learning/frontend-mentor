import SearchBar from "./components/searchbar";
import Select from "./components/select";
import Topbar from "./components/topbar";

const countriesPage = () => {
    return (
        <div className="flex flex-col h-screen">
            <Topbar />
            <div className="my-8 mx-8 flex justify-between items-center  flex-wrap">
                <SearchBar />
                <Select />
            </div>
        </div>
    );
}

export default countriesPage;