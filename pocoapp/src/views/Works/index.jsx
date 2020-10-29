import React from 'react';
import App from '../../App';
import app from '../../setupProxy';
console.log(app)
class Works extends React.Component{
    constructor(){
        super()
    }
   componentDidMount(){
     
    }
    render(){
        return <div>
            <App></App>
        </div>
      
    }
}

export default Works    