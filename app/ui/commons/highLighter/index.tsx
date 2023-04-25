
import React from 'react'

const Code = ({text}: {text:string}) => {

    const result = 
    text.replace("    ", "&nbsp;&nbsp;&nbsp;&nbsp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
        .replace("\n", "<br />")
        ;

        console.log(result);

  return (
    <code dangerouslySetInnerHTML={{__html: result}} ></code>
  )
};

export default Code;