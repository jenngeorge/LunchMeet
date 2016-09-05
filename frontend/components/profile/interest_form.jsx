import React from 'react';


class InterestForm extends React.Component {
  constructor(props){
    super(props);
  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value });
  }


  render(){
    return (
      <div className="profile-interests">
        <h4>Interested in</h4>
        <select id="mentor" value={this.props.state.mentor} onChange={this.update("role")}>
          Mentorship
          <option value={-5}>Being a mentor</option>
          <option value={5}>Finding a mentor</option>
        </select>
        <select id="hiring" value={this.props.state.hiring} onChange={this.update("hiring")}>
          Hiring
          <option value={-5}>Hiring people</option>
          <option value={5}>New Opportunities</option>
        </select>
        <label>
          <input type="checkbox" defaultChecked={this.props.state.collaboration === 0}
            onClick={this.update("collaboration")} value={0} />
          Project collaboration
        </label>
        <label>
          <input type="checkbox" defaultChecked={this.props.state.friendship === 0}
            onClick={this.update("friendship")} value={0} />
          Friendship
        </label>
      </div>
    );
  }
}

export default InterestForm;
