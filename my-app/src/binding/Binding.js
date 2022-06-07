/**
 * 双向数据绑定
 */
 import React from 'react';
 import Person from './Person'
 class Binding extends React.Component {
     constructor(props) {
         super(props)
         this.state = {
            name: "张三"
         }
         this.nameChanged = this.nameChanged.bind(this)
     }
     nameChanged (e) {
         this.setState({name:e.target.value})
     }
     render () {
         return (
             <div>
                 <div>{this.state.name}</div>
                 <Person name={this.state.name} changed={ this.nameChanged}/>
             </div>
         )
     }
 }
 
 export default Binding