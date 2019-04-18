class VisibilityToggle extends React.Component {
  constructor(props) {
  super(props);
  this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
  this.state = {
    title: "Visbility Toggle",
    showDetail: false
  };
  }
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        showDetail: !prevState.showDetail
      }
    })
  }
  render() {
    return (
      <div>
          <h1>{this.state.title}</h1>
          <button onClick={this.handleToggleVisibility}>
          {this.state.showDetail ? 'Hide Details' : 'Show Details'}
          </button>
          {this.state.showDetail && (
            <div>
              <p>Some details for you</p>
            </div>)}
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle /> , document.getElementById('app'))
