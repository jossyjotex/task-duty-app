import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Form from '../Components/Form'
import { taskData } from '../db'

const Task = () => {
   const [formData, setFormData] = useState({
      taskTitle:"",
      description:"",
      tag:""
    })
    const {taskId} = useParams()
    const findTask = taskData.find((taskDatum)=> String(taskDatum._id) === String(taskId))

    const handleChange =(e) =>{
      const {name,value} = e.target;
      setFormData((prev) =>({...prev,[name]:value}))
  
    }

    const handleSubmit =(e)=>{
      e.preventDefault()
    }

    useEffect(()=>{
      if(findTask){
        setFormData({
          taskTitle:findTask.taskTitle || "",
          description:findTask.description || "",
          tag:findTask.tag || ""
        })
      }
    },[findTask])

  return (
    <>
    <main className='wrapper'>
      <Form FormTitle="Edit Task" formData={formData} handleChange={handleChange} handleSubmit={handleSubmit}/>
      
    </main>
    </>
  )
}

export default Task