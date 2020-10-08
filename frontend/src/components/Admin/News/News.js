import React, { Component } from 'react';


class News extends Component {

    
  
    
   render() {
        return (
          <div>
              <p>aktualna notatka to : {this.props.news}</p>
              <p>wprowadz tresc nowej notatki i kliknij zapisz</p>
              <input  type="text" id="notatka" />
              <button onClick={this.props.sendNote}> Prześlij</button>
            </div >
       );
    }

 } 

 export default News;