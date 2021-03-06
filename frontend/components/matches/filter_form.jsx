const React = require('react');

class FilterForm extends React.Component {
  constructor(props){
    super(props);

    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.updateMatches();
  }

  _handleChange(e) {
    e.preventDefault();
    let filter = e.currentTarget.id;
    let value = e.currentTarget.value;
    this.props.updateFilter(filter, value);
  }


  _handleSubmit(e){
    e.preventDefault();
    this.props.updateMatches();
  }

  render(){
    return(
      <div className="filter-form-container">
        <form onSubmit={this._handleSubmit} className="filter-form">
          <label> Looking to meet
            <select id="role" value={ this.props.role}
              onChange={this._handleChange}
              defaultValue="any">
              <option value="any">All</option>
              <option value="developer">Developers</option>
              <option value="designer" >Designers</option>
              <option value="sales" >Salespeople</option>
              <option value="recruiter" >Recruiters</option>
              <option value="business" >Business People</option>
            </select>
          </label>
          <label> within:
            <select id="distance" value={ this.props.distance}
              onChange={this._handleChange}
              defaultValue="any">
              <option value="any">Any</option>
              <option value="1">1</option>
              <option value="2" >2</option>
              <option value="5" >5</option>
              <option value="10" >10</option>
              <option value="25" >25</option>
            </select>
            miles
          </label>
          <input type="submit" value="Search" className="submit-btn"/>
        </form>
      </div>
    );

  }
} //class end

export default FilterForm;
