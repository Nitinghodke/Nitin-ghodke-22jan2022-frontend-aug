import React from 'react';
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import'codemirror/mode/xml/xml'
import'codemirror/mode/javascript/javascript'
import'codemirror/mode/css/css'
import {Controlled as ControlledEditor} from 'react-codemirror2'

function Editor(dispalyname) {
    
  return(
      
 <div className='editor-container'>
   <div className="editor-title">
    {dispalyname}
    <button>o/c</button>
   </div>
   <ControlledEditor
   onBeforeChenge={handleChenge}
   value={value}
   className='code-mirror-wrapper'
   options={{
        
   }}
   />
  </div>
  
  
  );
}

export default Editor;
