import React from 'react';
import ReactDOM from 'react-dom';

/*class  LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: ''};
    }
    // handleSubmit(event){
    //     alert('A name was submited' +this.state.value);
    //     event.preventDefault();
    // }
    handleEvent=()=> {
        console.log("jdfhgbjfdg",this.state.name);
        if(this.state.name ==='' ){
            alert("field cant be empty");
        }
        else{
            
        }
        
    }
    render() {
            return(
                <div className="Form">
               <label className="Formlevel" htmlFor="text" >name </label>
                <input name="text" type="text" id="inputvalue" onChange={event =>this.setState({name:event.target.value})}/> 
               {/* <input type="submit" value="submit" onClick={()=>this.handleEvent}/>  }
              // <button onClick={()=>this.handleEvent()}>submit</button>
               // <div>{this.state.name}</div>  
                //</div>
             //   );                   //<div>Hai ,{this.props.name}!</div>
       // }
     
//}
//ReactDOM.render(<Form name= "praveen" />, document.getElementById(''));*/
 function LoginPage (props) {
     return(
         <div className='button'>
             <button>button 1</button>
             <button>button 2</button>
         </div>
     );
 }

export default LoginPage;