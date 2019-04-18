console.log('BuildIt is running!');

const app = {
  title: 'Visibility Toggle'
};

let showDetail = false;

const toggleVisibility = () => {
  showDetail = !showDetail;
  renderApp();
};

const show = () => {
  if (showDetail) {
        
  }
};

const renderApp = () => {
  const template = ( 
    <div>
      <h1>{app.title}</h1>
      <button onClick={toggleVisibility}>
        {showDetail ? 'Hide Details' : 'Show Details'}
      </button>
      {showDetail && (
        <div>
          <p>Some details for you</p>
        </div>
      )}
    </div>
  );

  ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById('app');

renderApp();