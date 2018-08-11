class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: window.exampleVideoData
    };
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            {/* <div><h5><em>videoPlayer</em> view goes here</h5></div> */}
            <VideoPlayer video={this.state.videos[0]} />
          </div>
          <div className="col-md-5">
            {/* <div><h5><em>videoList</em> view goes here</h5></div> */}
            <VideoList videos={this.state.videos} />
          </div>
        </div>
      </div>
    );
  }
}

// class GroceryListItem extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       hover: false
//     }
//   }

//   onHover() {
//     this.setState({
//       hover: !this.state.hover
//     })
//   }

//   render() {
//     var style = {
//       fontWeight: this.state.hover ? 'bold' : 'normal'
//     }

//     return (
//       <li style = {style} onMouseEnter={this.onHover.bind(this)} onMouseLeave={this.onHover.bind(this)}>{this.props.list}</li>
//     )
//   }
// }

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
