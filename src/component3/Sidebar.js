import React from 'react'
import {AiOutlinePlus}  from "react-icons/ai"
import "./index.css"
import {AiOutlineDelete}  from 'react-icons/ai'
const Sidebar = ({notes, createNote,activeNoteId,setActiveNoteId,delNote}) => {
  return (
    <div className='side-main'>
        <div className='plus'>
           <h5>Notes</h5>
           <AiOutlinePlus onClick={createNote} className='plus-icon'/>
        </div>
       <div>
         {
            notes.map((all)=>{
                return <div className={`single-note ${all?.id===activeNoteId?"active-note":""}`} onClick={()=>setActiveNoteId(all?.id)}>
                     <p>{all?.body?.slice(0,10)}</p>
                     <AiOutlineDelete onClick={(e)=>delNote(e,all?.id)} style={{fontSize:'20px',cursor:"pointer"}}/>
                </div>
            })
         }
       </div>
    </div>
  )
}

export default Sidebar
