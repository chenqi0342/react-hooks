/**
 * ref父组件
 */
import React from 'react';
import Input from './Input'
class App extends React.Component {
    constructor() {
        super()
        //通过createRef创建ref
        this.InputComponentRef = React.createRef()
    }
    render () {
        return (
            <div>
                {/* this.InputComponentRef input组件的实例对象 */}
                <Input ref={this.InputComponentRef}></Input>
                {/* this.InputComponentRef.current 找到focus组件上的方法 */}
                <button onClick={()=>this.InputComponentRef.current.focusInput()}>button</button>
            </div>
        )
    }
}

export default App