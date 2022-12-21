import React from "react";

class Birthday extends React.Component {
    render() {
      return (
        <div className='person' >
          <img src={this.props.person.avatar_url} alt='avatar_img'/>
          <div>
            <h2> {this.props.person.name} </h2>
            <p> {this.props.person.age} </p>
          </div>
        </div>
      )
    }
}

export default Birthday;