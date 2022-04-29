import { useState } from "react";
import "./style.scss";
import Search from "./components/search/Search";
import ApiItem from "./components/ApiItem";
import Alert from "./components/Alert";
import getApis from "./apis.json";

function App() {
  const [search, setSearch] = useState("");
  const [apis, setApis] = useState(getApis);
  const bookmarks = apis.filter(api => api.bookmark ===true);
  const filteredApis = apis.filter(api =>api.name.toLowerCase().includes(search.toLowerCase())
  );

  const toogleBookmark = (id => {
   setApis( apis.map(api =>{
    if (api.id === id) {
      api.bookmark = !api.bookmark;
    }
    return api;
  }))
  })
  

  return (
    <div className="App">
      <h3>
        A collective list of free APIs for use in software and web development.
      </h3>

      <Search
        search={search}
        setSearch={setSearch}
        placeholder="Find development,games ,images APIs"
      />

      <div className="container">
        <h4>Featured APIs of this week</h4>
        <div className="api-list">
          {filteredApis.map((api) => (
            <ApiItem toogleBookmark={toogleBookmark} key={api.id} data={api} />
          ))}
          {filteredApis.length === 0 && (<Alert message="API not found." /> )}
        </div>
      </div>

      <div className="container">
         <h4>Your Bookmarks</h4>
         <div className="api-list">
          {bookmarks.map((api) => (
            <ApiItem toogleBookmark={toogleBookmark} key={api.id} data={api} />
          ))}
          {bookmarks.length === 0 && (<Alert message="There is no item on your bookmark." /> )}
        </div>
      </div>
    </div>
  );
}

export default App;
