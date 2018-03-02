import React from 'react';
import Item from './Item';

class App extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <h2 className="dashboard__page-title">Dashboard</h2>
        <div className="row">
          <div className="col-md-3">
            <Item title="Blog Post" subtitle="400-500 Words" icon="fa-clipboard" />
          </div>
          <div className="col-md-3">
            <Item title="White Paper" subtitle="2500-3000 Words" icon="fa-sticky-note" />
          </div>
          <div className="col-md-3">
            <Item title="Website Content" subtitle="400-500 Words" icon="fa-laptop" />
          </div>
          <div className="col-md-3">
            <Item title="Press Release" subtitle="400-500 Words" icon="fa-newspaper" />
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <Item title="Product Description" subtitle="400-500 Words" icon="fa-align-center" />
          </div>
          <div className="col-md-3">
            <Item title="Social Media" subtitle="400-500 Words" icon="fa-tablet-alt" />
          </div>
          <div className="col-md-3">
            <Item title="Book/Story Writing" subtitle="400-500 Words" icon="fa-book" />
          </div>
          <div className="col-md-3">
            <Item title="Video Script" subtitle="400-500 Words" icon="fa-video" />
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <Item title="Newsletter" subtitle="400-500 Words" icon="fa-newspaper" />
          </div>
          <div className="col-md-3">
            <Item title="Brochure Content" subtitle="400-500 Words" icon="fa-address-book" />
          </div>
          <div className="col-md-3">
            <Item title="Custom Content" subtitle="400-500 Words" icon="fa-wrench" />
          </div>
          <div className="col-md-3">
            <Item title="Contest" subtitle="400-500 Words" icon="fa-trophy" />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <Item
              title="Order from Template"
              subtitle="You can give an order from templates"
              icon="fa-bookmark"
            />
          </div>
          <div className="col-md-6">
            <Item
              title="Orde via Spreadsheets"
              subtitle="It's useful when giving Bulk Orders"
              icon="fa-table"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
