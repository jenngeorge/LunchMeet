import React from 'react';
//Components

class Home extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.updateFilter();
    this.props.requestUsers();
  }

  render(){
    return(
      <div className="user-pane"></div>
    );
  }

} //class end 


export default Home;
