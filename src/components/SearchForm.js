import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    }
  }
  
  render(props) {
    let text = this.state.text;
    return (
      <div className="input-group search-form">
        <input value={text} 
               onChange={(text) => this.setState({text: text.target.value})}
               type="text" 
               className="form-control" 
               placeholder="Search for..." 
        />
        <span className="input-group-btn">
          <button className="btn btn-default" 
                  type="sybmit" 
                  onClick={() => this.props.submit(text)}>
                    Sybmit
          </button>
        </span>
      </div>
    )
  }
}

export default SearchForm;