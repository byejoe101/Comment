import React, { Component } from 'react'

class CommentInput extends Component {
    //初始化state
    constructor(){
        super()
        this.state={
            username :'',
            content :''
        }
    }

    handleUsernameChange(event){
        this.setState({
            username: event.target.value
        })
    }

    handleContentChange(event){
        this.setState({
            content:event.target.value
        })
    }

    //回调函数
    handleSubmint(){
        //从state中取出数据给propsty
        if(this.props.onSubmit){
            this.props.onSubmit({
                username:this.state.username,
                content:this.state.content,
            })
        }
        //发送完后重置可以加username选项
        this.setState({ content:''})
    }
    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input
                            value={this.state.username}
                            onChange={this.handleUsernameChange.bind(this)}
                        />
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea
                            value={this.state.content}
                            onChange={this.handleContentChange.bind(this)}
                        />
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button
                        onClick={this.handleSubmint.bind(this)}>
                        发布
                    </button>
                </div>
            </div>
        )
    }
}

export default CommentInput