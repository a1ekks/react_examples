import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";


class App extends React.Component {
    state = { images: [] };

    onSearchSubmit = async term => {
        const searchResult = await unsplash.get('/search/photos', {
            params: { query: term }
        })
        // .then(r => {
            // console.log(r.data.results)
        // })
        // console.log('111', term, searchResult.data.results);

        this.setState({ images: searchResult.data.results });

    }

    render() {
        return (
        <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar onSubmit={this.onSearchSubmit}/>
            {/* Found: {this.state.images.length} images... */}
            <ImageList images={this.state.images}/>
        </div>
        )
    }
}

export default App;
