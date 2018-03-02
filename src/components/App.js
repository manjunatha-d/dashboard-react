import React from 'react';
import Item from './Item';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-3">
            <Item title="Boom" minWords={500} maxWords={1000} />
          </div>
          <div className="col-md-3">
            <Item title="Boom" minWords={500} maxWords={1000} />
          </div>
          <div className="col-md-3">
            <Item title="Boom" minWords={500} maxWords={1000} />
          </div>
          <div className="col-md-3">
            <Item title="Boom" minWords={500} maxWords={1000} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <Item title="Boom" minWords={500} maxWords={1000} />
          </div>
          <div className="col-md-3">
            <Item title="Boom" minWords={500} maxWords={1000} />
          </div>
          <div className="col-md-3">
            <Item title="Boom" minWords={500} maxWords={1000} />
          </div>
          <div className="col-md-3">
            <Item title="Boom" minWords={500} maxWords={1000} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <Item title="Boom" minWords={500} maxWords={1000} />
          </div>
          <div className="col-md-3">
            <Item title="Boom" minWords={500} maxWords={1000} />
          </div>
          <div className="col-md-3">
            <Item title="Boom" minWords={500} maxWords={1000} />
          </div>
          <div className="col-md-3">
            <Item title="Boom" minWords={500} maxWords={1000} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <Item title="Boom" minWords={500} maxWords={1000} />
          </div>
          <div className="col-md-6">
            <Item title="Boom" minWords={500} maxWords={1000} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
