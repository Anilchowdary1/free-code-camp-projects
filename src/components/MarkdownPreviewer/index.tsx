import React from 'react';
import ReactMarkdown from 'react-markdown';

class MarkdownPreviewer extends React.Component{

    render(){
        const input = '# This is a **header**\n\nAnd this is a paragraph'
        return(
            <div>

            <h1>MarkdownPreviewer</h1>
            <ReactMarkdown source = {input}/>
            </div>
        );
    }
}

export default MarkdownPreviewer;