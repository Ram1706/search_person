import React, { Component } from 'react';
import person from '../person';
//import { Card, CardHeader, CardBody, CardFooter } from "react-simple-card";
import { Table,Modal,Button } from 'react-bootstrap';
import InnerCard from './InnerCard';
import Pagination from './Pagination';


class SubCard extends Component {
  constructor(props) {
    super(props);
    this.handleClick=this.handleClick.bind(this);
    this.state={viewDetails:false};
    this.showModalPanel=this.showModalPanel.bind(this);
    this.handleClickView=this.handleClickView.bind(this);
     // an example array of 150 items to be paged
     var exampleItems = [...Array(150).keys()].map(i => ({ id: (i+1), name: 'Item ' + (i+1) }));
     
         this.state = {
             exampleItems: exampleItems,
             pageOfItems: []
         };
     
         // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
         this.onChangePage = this.onChangePage.bind(this);
     
  }

  handleClick=() =>
  {
    this.setState({
      viewDetails:true
    });
    this.showModalPanel();
    console.log("viewDetails"+this.state.viewDetails);
  }

  showModalPanel()
  {
    let table=[];
    console.log("Inside viewDetailsValue"+this.state.viewDetails);
    if(this.state.viewDetails)
    {
      console.log("viewDetailsValue"+this.state.viewDetails);
      table.push (<InnerCard/>);
    }
    return table;
  }

  handleClickView=()=>
  {
    this.setState({
      viewDetails:false
    });
  }

  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
}

  
  render() {
    return (
      <div>
          <div className="container">
              <div className="text-center">
                  <h1>React - Pagination Example with logic like Google</h1>
                  {this.state.pageOfItems.map(item =>
                      <div key={item.id}>{item.name}</div>
                  )}
                  <Pagination items={this.state.exampleItems} onChangePage={this.onChangePage} />
              </div>
          </div>
          <hr />
          <div className="credits text-center">
              <p>
                  <a href="http://jasonwatmore.com" target="_top">JasonWatmore.com</a>
              </p>
          </div>
      </div>
  );
  }
}

export default SubCard;
