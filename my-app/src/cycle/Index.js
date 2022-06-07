/**
 * v16.3
 */
import React from "react";

class Cycle extends React.Component{
    //组件mounting阶段 挂载

    //1
    constructor(props) {
        super(props)
        this.state = {
            name:"111"
        }
        //初始化状态对象
        //改变this指向
    } 
    //2
    //如果状态取决于父组件的状态
    //props, state判断是否更新
    //一定要返回新的状态对象，不需要更新return null
    //static，也就是这个函数不能通过this访问到class的属性
    static getDerivedStateFromProps (props, state) {
        if (props.name !== state.name) {
            console.log('需要更新')
            return {name:props.name}
        } else {
            return null
        }
    }

    render () {
        return (<div>
            {/* name22223 */}
            <h1>name{this.state.name}</h1>
    </div>)}
}
export default Cycle