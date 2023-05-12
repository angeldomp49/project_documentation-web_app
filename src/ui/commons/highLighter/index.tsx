
import React from 'react'

const Code = ({text}: {text:string}) => {

    const result = 
    text.replace(/ /gm, "&nbsp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
        .replace(/\n/gm, "<br />")
        ;


  return (
    <code dangerouslySetInnerHTML={{__html: result}} ></code>
  )
};

export default Code;