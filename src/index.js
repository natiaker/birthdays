import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import BirthdayList from './BirthdayList';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [
        {id: 1, name: "Bertie Yates", age: "29 years", avatar_url: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg'},
        {id: 2, name: "Hester Hogan", age: "32 years", avatar_url: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg'},
        {id: 3, name: "Larry Little", age: "36 years", avatar_url: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg'},
        {id: 4, name: "Sean Walsh", age: "34 years", avatar_url: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg'},
        {id: 5, name: "Lola Gardner", age: "29 years", avatar_url: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg'},
      ]
    }
  };

  handleClick = () => {
      const newState = [];
      this.setState({people: newState});
  }

  render() {
    return <BirthdayList people={this.state.people} onClick={this.handleClick}/>;
  }
}

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);

