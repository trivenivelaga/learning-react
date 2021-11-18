import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';
import { Component } from 'react';


function Hero() {
  return (<div className="row">
    <div className="jumbotron col-10 offset-1">
      <h1>AuthorQuiz</h1>
      <p>Select the book return by the author shown</p>
    </div>
  </div>);
}

function Turn() {
  return(<div className="row turn" style={{backgroundcolor:"white"}}>
    <div className="col-4 offset-1"></div>
  </div>);
}
function Continue() {
  return(<div/>);
}
function Footer () {
  return(<div id="footer" className="row">
    <div className="col-12">
      <p className="text-muted-credit">All images are from <a href="https://commons.wikimedia.org/wiki/File"> Wikimedia commons </a> and are in the public domain</p>
    </div>
  </div>);
}
class AuthorQuiz extends Component{
  render() {
    return (
      <div className="container-fluid">
        <Hero/>
        <Turn/>
        <Continue/>
        <Footer/>
      </div>
    );
  }
}

export default AuthorQuiz;
