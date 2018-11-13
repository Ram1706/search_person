import React, { Component } from 'react';
import person from '../person';
import SubCard from './SubCard';
import {Button} from 'react-bootstrap';


class MainCard extends Component {
    constructor(props) {
        super(props);
        this.state={searchPerson:"",searchDetailsEnable:false};
        this.handleClick = this.handleClick.bind(this);
        this.handleInputChange=this.handleInputChange.bind(this);
        this.getsearchDetails=this.getsearchDetails.bind(this);
    }

    handleInputChange = () => {
        this.setState({
            searchPerson: this.search.value
        })
      }

    handleClick() {
        this.getsearchDetails();
      }

      getsearchDetails()
      {
        let table = [];
        if(this.state.searchPerson)
        {
        let personDetailsDisplay=[];
        person.forEach((personDetail)=>{
            if(personDetail.name.includes(this.state.searchPerson))
            {
                personDetailsDisplay.push(personDetail);
            }
            //table.push(<SubCard name={personDetail.name} ></SubCard>)
            })
            table.push(<SubCard nameDetails={personDetailsDisplay} ></SubCard>)
        }
        return table;
      }

  render() {
    return (
     <div>
         <input type="text" placeholder="Search for..."  ref={input => this.search = input} 
         onChange={this.handleInputChange}></input>
         <Button bsStyle="primary" onClick={this.handleClick}>Search</Button>
         <div>
             {this.getsearchDetails()}
        </div>
     </div>
    );
  }
}

export default MainCard;
