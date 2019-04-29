import React from 'react';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation';
import Logo from './components/Logo';
import ImageLinkForm from './components/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Rank from './components/Rank';
import './App.css';
import particles from './particles';


const app = new Clarifai.App({
 apiKey: 'e7b53fd3ca4b4645b06e62571da4f415'
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      box: '',
      route: 'signIn',
      isSignedIn: false
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/')
      .then(res => res.json())
      .then(console.log);
  }

  onInputChange = (e) => {
    const imgUrl = e.target.value;
    this.setState({input: imgUrl});
  }

  calculateFaceLocation = data => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftColumn: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightColumn: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayDetectbox = boxData => {
    this.setState({box: boxData});
  }

  onSubmit = () => {
    app.models.predict(
      "a403429f2ddf4b49b307e318f00e528b",
      this.state.input)
    .then(res => this.displayDetectbox(this.calculateFaceLocation(res)))
    .catch(err => {
      console.error(err);
    })
  }

  onRouteChange = (route) => {
    if (route === 'home') {
      this.setState({isSignedIn: true})
    } else {
      this.setState({isSignedIn:false})
    } 
    this.setState({route});
  }
  render() {
    return (
      <div >
        <Particles
          className="particles" 
          params={particles}
        />
        <Navigation 
          isSignedIn={this.state. isSignedIn}
          onRouteChange={this.onRouteChange} />
      {/*<SignUp />*/}
      {
        this.state.route === 'signIn'
          ? <SignIn 
              onRouteChange={this.onRouteChange}
              currentRoute={this.state.route} />
          : ( this.state.route === 'home'
                ? <div>
                    <Logo />
                    <Rank />
                    <ImageLinkForm 
                      onInputChange={this.onInputChange}
                      onButtonClick={this.onSubmit}/>
                    <FaceRecognition 
                      imgUrl={this.state.input}
                      box={this.state.box} />
                  </div>
                : <SignUp onRouteChange={this.onRouteChange}/>)
      }
      </div>
    );
  }
}

export default App;
