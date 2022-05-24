import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay  from "./SeasonDisplay";
import Spinner from "./Spinner";

// old style
// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         position => console.log(position),
//         err => console.log(err)
//     );
//     return <div>Hi there!</div>;
// };


// class style
class App extends React.Component {
    // we dont need this code because bable
    // constructor(props){
    //     super(props);
    //     this.state = { lat: null, errorMessage: '' };
    // }
    // we need this code without constructor
    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }

    remderContent() {
        if (!this.state.lat && this.state.errorMessage) {
            return <div>Error: {this.state.errorMessage }</div>;
        }
        if (!this.state.errorMessage && this.state.lat) {
            // return <div>Latitude: {this.state.lat }</div>;
            return <SeasonDisplay lat={this.state.lat}/>;
        }
        // return <Spinner />;
        return <Spinner message="Please accept location request"/>;
    }

    render() {
        return <div className="border red">{this.remderContent()}</div>;
    }
}


ReactDOM.render(
    <App />,
    document.querySelector('#root')
)