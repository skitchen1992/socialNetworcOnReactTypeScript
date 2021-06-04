import classes from './Dialogs.module.css';
import {DialogItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Massage/Message";
import {addMessageActionCreator, updateMessages,} from "../../redux/dialogs-reducer";
import React from "react";
import {MessagesPageType} from "../../redux/state";


type DialogsPropsType = {
    messagesPage:MessagesPageType,
    dispatch:(action:any)=> void,
}

function Dialogs(props:DialogsPropsType){
    let dialogsElement = props.messagesPage.dialogs.map(el=>{
        return <DialogItem name={el.name} id={el.id}/>
    })
    let messagesElement = props.messagesPage.messages.map(el=>{
        return <Message message={el.message} id={el.id}/>
    })
    let addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }
    let onMessageChange = (e:any) => {
        let text: string = e.target.value
        let action = updateMessages(text)
        props.dispatch(action)
    }

    return(
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogItems}>
                    {dialogsElement}
                </div>
                <div className={classes.messages}>
                    {messagesElement}
                </div>
            </div>
            <textarea onChange={onMessageChange} value={props.messagesPage.newMessagesText}/><br/>
            <button onClick={addMessage} className={classes.button}>Send</button>
        </div>



    )
}
export default Dialogs;