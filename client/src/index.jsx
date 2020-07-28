import React from 'react';
import axios from 'axios';
import CowList from './CowList.jsx';
import CowSearch from './CowSearch.jsx';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      apiData: [],
      currentCow: '',
      desc: '',
      clickedIndex: null,
    };
    this.addCow = this.addCow.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getData = this.getData.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log(this.state.apiData);
    this.getData();
  }

  getData() {
    axios
      .get('/api/cows')
      .then((rows) => {
        if (!rows) {
          console.log('error');
        } else {
          this.setState({
            apiData: rows.data,
          });
          console.log(this.state.apiData);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleChange(name, desc) {
    //console.log(e);
    this.setState({
      currentCow: name,
      desc: desc,
    });
  }

  addCow(e) {
    e.preventDefault();
    //console.log(this.state);
    axios
      .post('/api/cows', {
        name: this.state.currentCow,
        description: this.state.desc,
      })
      .then((result) => {
        if (result.status === 201) {
          // componentDidMount();
          this.getData();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleClick(index) {
    //console.log('it was clicked', event.target.value);
    console.log(index);
    this.setState({
      clickedIndex: index,
    });
  }
  /*
  conditional rendering
*/

  render() {
    return (
      <div>
        <h1>
          {this.state.clickedIndex
            ? this.state.apiData[this.state.clickedIndex].name +
              ' ' +
              this.state.apiData[this.state.clickedIndex].description
            : ''}
        </h1>
        <CowList data={this.state} click={this.handleClick} />
        <CowSearch
          data={this.state}
          click={this.addCow}
          changing={this.handleChange}
        />
      </div>
    );
  }
}

var mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);
