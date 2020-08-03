class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props)
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
    this.state = {
      visibility: false
    }
  }
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    })
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>{this.state.visibility ? "Hide details" : "Show details"}</button>
        {this.state.visibility && <h2>Here are some details</h2>}
      </div>
    )
  }
}
ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))


// JSX Solution

/* const app = {
  title: "Visibility Toggle",
  options: "Here are the details",
};

const appRoot = document.getElementById("app");
let visible = false;
const toggleVisibility = () => {
  visible = !visible;
  renderApp();
};

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={toggleVisibility}>
        v
      </button>
      {visible && (
        <div>
          <p>Here are some details</p>
        </div>
      )}
    </div>
  );
  ReactDOM.render(template, appRoot);
};
renderApp(); */
