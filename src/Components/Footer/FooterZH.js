import React, { Component } from 'react';


class FooterZH extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
  }
  componentDidMount() {
    var that = this;
    var year = new Date().getFullYear();
    that.setState({date: year});
  }
  
  render() {
    return (
      <footer>
        <div className="copyright">
        <p> 版权 &copy; {this.state.date} <a href="http://www.bu.edu/cgcm/">Center for Global Christianity and Mission</a>, <a href="http://www.bu.edu/">Boston University</a>.</p>
        </div>
      </footer>
    );
  }
}

export default FooterZH;
