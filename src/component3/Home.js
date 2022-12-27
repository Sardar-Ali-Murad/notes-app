import React from 'react'
import Sidebar from './Sidebar'
import Editor from './Editor'
import { CollectionsBookmark } from '@mui/icons-material'

const Home = () => {
    let [notes,setNotes]=React.useState(JSON.parse(localStorage.getItem("notes")) || [])
    let [activeNoteId,setActiveNoteId]=React.useState("")
    
    
    function createNote(){
        let newItem={id:notes.length<1?1:notes[0].id+1,body:"# Heading"}
        setNotes((pre)=>[newItem,...pre])
      }



    

      function updateNotes(text){
          setNotes((pre)=>{
              return   pre.map((all)=>all.id===activeNoteId?{...all,body:text}:all)
        })
        let activeNote=notes.find((all)=>all?.id===activeNoteId)
        if(activeNote.id!==notes[0].id){
            setNotes((pre)=>[{...activeNote,body:text},...pre.filter((all)=>all?.id!==activeNoteId)])
        }
      }
      
      function delNote(event,id){
          event.stopPropagation()
          setNotes((pre)=>pre.filter((all)=>all?.id!==id))
        }
        
        
        React.useEffect(()=>{
           localStorage.setItem("notes",JSON.stringify(notes))

           let Id=notes.some((all)=>all?.id===activeNoteId)
           if(activeNoteId==="" && notes.length===1){
            setActiveNoteId(notes[0]?.id)
           }

          if(Id===false){
            setActiveNoteId(notes[0]?.id)
          }
           

        if(notes.length===0){
            setActiveNoteId("")
        }
        },[notes])

        console.log(activeNoteId,notes)
        


    if(notes.length===0){
        return <div className='div-perfect-center text-center'>
            <h3>You have no notes create your very first note</h3>
            <button onClick={createNote} className='btn'>Create Notes</button>
        </div>
    }
    

    

  return (
    <div style={{display:"flex",gap:"17px"}}>
          <Sidebar notes={notes} createNote={createNote} setActiveNoteId={setActiveNoteId} delNote={delNote} activeNoteId={activeNoteId}/>
          <Editor notes={notes} activeNoteId={activeNoteId} updateNotes={updateNotes}/>
    </div>
  )
}

export default Home
