import { Component } from 'react';
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  // Вызывается после 1-го рендера
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({users}));
  }

  // Вызывается после 2-го и последующих рендеров
  // componentDidUpdate() { }

  render() {
    return (
      <ul>
        {
          this.state.users.map(user => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))
        }
      </ul>
    ); 
  }
}

export default App;
