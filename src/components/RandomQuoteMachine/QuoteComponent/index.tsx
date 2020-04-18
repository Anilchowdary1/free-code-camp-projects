import React from 'react';

type QuoteComponentProps = {
    quote : any
}

class QuoteComponent extends React.Component<QuoteComponentProps>{
    render(){
        const {quote} = this.props;
        return(
            <div id="quote-box">
                <h1>{quote.quote}</h1>
            </div>
        )
    }
}

export default QuoteComponent;