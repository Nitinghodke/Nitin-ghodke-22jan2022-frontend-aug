 import React,{useState,useEffect} from 'react';
import '../App.css';
import Editor from './Editor';
function App() {

  const[html,setHtml]=useState('')
  const[css,setCss]=useState('')
  const[js,setJs]=useState('')
  const[srcDoc,setSrcDoc]=useState('')

useEffect(()=>{
   const timeout=  setTimeout(()=>{
    setSrcDoc(`
    <html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
    </html>
    `)
},250)
return ()=>clearTimeout(timeout)
},[html,css,js])

  return (
    <>
    <h1 style={{frontSize:'25px'}}><center>Code Editor</center></h1>
    <div className='pane top-pane'>
    <Editor
         langauge='xml'
         displayName='Html' 
         value={html} 
         onChange={setHtml} 
     />
     <Editor 
      langauge='css'
       displayName='CSS' 
       value={css} 
       onChange={setCss}/>
     <Editor   
       langauge='javascript'
       displayName='JS' 
       value={js} 
       onChange={setJs}/>
 
    </div>
     
    <div className='pane'>
        <iframe
        srcDoc={srcDoc}
         title='output' 
         sandbox='allow-scripts'
         frameBorder='0'
         width='100%'
        
        /> 
    </div>
    </>
  );
}

export default App;
