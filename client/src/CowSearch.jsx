import React from 'react';

class CowSearch extends React.Component {
  constructor(props) {
    super();
    this.state = {
      currentCow: '',
      desc: '',
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    //console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
    });
    //
    this.props.changing(this.state.currentCow, this.state.desc);
    //console.log(this.state);
  }

  render() {
    return (
      <div>
        <form
          onSubmit={(event) => {
            this.props.click(event);
          }}
        >
          <label>
            Name:
            <input
              type='text'
              name='currentCow'
              value={this.state.currentCow}
              onChange={this.handleInput}
            />
          </label>
          <br></br>
          <label>
            Description:
            <input
              type='text'
              name='desc'
              value={this.state.desc}
              onChange={this.handleInput}
            />
            <input type='submit' value='Submit' />
          </label>
        </form>
      </div>
    );
  }
}

export default CowSearch;
