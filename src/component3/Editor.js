import React from 'react'
import ReactMde from "react-mde";
// This shutdown thing is not working 
// import  Showdown from "showdown";

import "react-mde/lib/styles/css/react-mde-all.css";

// const converter = new Showdown.Converter({
//     tables: true,
//     simplifiedAutoLink: true,
//     strikethrough: true,
//     tasklists: true
//   });


const Editor = ({notes,activeNoteId,updateNotes,}) => {
    const [selectedTab, setSelectedTab] = React.useState("write")

    let activeNote=notes?.find((note)=>note?.id===activeNoteId)
    
  return (
    <div style={{width:'100%',padding:"30px",minHeight:"80vh"}}>
          <ReactMde
          onChange={updateNotes}
          value={activeNote?.body}
          selectedTab={selectedTab}
          onTabChange={setSelectedTab}
          maxEditorHeight={50}
          heightUnits="vh"
      />
    </div>
  )
}

export default Editor
