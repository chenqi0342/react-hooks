/**
 * ref子组件
 */
 import React from 'react';
 class Input extends React.Component {
     constructor() {
         super()
         //通过createRef创建ref
         this.inputRef = React.createRef()
         this.focusInput=this.focusInput.bind(this)
     }
     focusInput () {
        //this.inputRef.current当前input框dom对象
        this.inputRef.current.focus()
     }
     render () {
         return (
             <div>
                 {/* 通过createRef创建ref */}
                 <input type="text" ref={this.inputRef}></input>
             </div>
         )
     }
 }
 
 export default Input