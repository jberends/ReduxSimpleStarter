import React, {Component} from "react";
import _ from 'lodash';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCYTa9QyvGdAzFY_J-DLRZaNfn5RtzwN8Y';
const SEARCH_TERM = 'blue hole diving';


// YTSearch({key: API_KEY, term: 'surfboards'}, function (response) {
//     console.log(response)
// });

// Create a new component, this component should produce some HTML
// The most parent component is responsible for fetching data and push downstream.

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch(SEARCH_TERM)
    }

    videoSearch(term) {
        // Search for videos
        // fill the local state with an initial search
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            })
        });
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={(selectedVideo) => this.setState({selectedVideo})}
                    videos={this.state.videos}/>
            </div>
        );
    }
}

// take this component's generated HTML and put in on the page (in the DOM).
ReactDOM.render(<App />, document.querySelector('.container'));
