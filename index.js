import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

// Componenta principala este App, it is a class based component meaning it has to extend the React.Component
//and must define render 
class App extends React.Component {
// the component must have a construcor and super, but we can use only state because babel will
//put a constructor and super for us
    state = { lat: null, errorMessage: "" };

//compoonentDidMount is a data loader, we put inside something that needs to load
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }),
            (err) => this.setState({errorMessage: err.message })
        )
    }

//In renderCotent we cover all the posibilities of the site (not loading,acepting position,not acepting etc..)
    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat
            ={this.state.lat} />
        }

        return <Spinner message = "Aceptati localizarea!" />
    }

    // React says we have to define render!
  render() {

    return <div className = "border red">{this.renderContent()}</div>
  }
} //here the component ends


// This is where the component is being sent to the html page.
ReactDOM.render(<App />, document.querySelector('#root'));