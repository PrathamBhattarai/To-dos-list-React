import { useState } from "react"
const AddTask = ({onadd}) => {
    const [text, setText] = useState('');
    const [date, setDate] = useState('');
    const [remainder, setReminder] = useState(false);
   const onsubmit = (e)=>{
        e.preventDefault();
        if(!text){
            alert('add task first')
        }
        onadd({text, date, remainder});

        setText('');
        setDate('');
        setReminder(false);
    }
    return (
        <form className = 'add-form' onSubmit = {onsubmit}>
            <div className = 'form-control'>
                <label>Task</label>
                <input type = 'text' value = {text} onChange = {(e)=> setText(e.target.value)}></input>
            </div>
            <div  className = 'form-control'>
                <label>Date and time</label>
                <input type = 'text' value = {date} onChange = {(e)=> setDate(e.target.value)}></input>
            </div>
            <div  className = 'form-control form-control-check' >
                <label>SetReminder</label>
                <input type = 'checkbox' value = {remainder} checked = {remainder} onChange = {(e)=> setReminder(e.currentTarget.checked)}></input>
            </div>
            <input type = 'submit' value = 'Save it' className = 'btn btn-block' />
        </form>
    )
}

export default AddTask
