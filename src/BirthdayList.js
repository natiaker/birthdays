import React from "react";
import Birthday from "./Birthday";


class BirthdayList extends React.Component {
    render() {
      return(
        <div className='container'>
          <h1> {this.props.people.length} birthdays today </h1>
          <div className='birthdayList'>
            {this.props.people.map((person) => {
              return (
                <Birthday key={person.id} person={person} />
              )
            })}
          </div>
          <button onClick={this.props.onClick}>Clear All</button>
        </div>
      )
    }
}

export default BirthdayList;