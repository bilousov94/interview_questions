const DATA = [{
    id: 1,
    symbol: 'TWTR'
}, {
    id: 2,
    symbol: 'MSFT'
}, {
    id: 3,
    symbol: 'GOOG'
}, {
    id: 4,
    symbol: 'LNKD'
}, {
    id: 5,
    symbol: 'AMZN'
}, {
    id: 6,
    symbol: 'AAPL'
}]

class Dropdown extends React.Component {
    render(){

        const value = this.props.value || [];
        console.log(value);
        return (
            <div>
            <select>
            {value.map((value) => (
            <option key={value.id}>{value.symbol}</option>
))}
</select>
</div>
)
}
}

class QuoteSuggest extends React.Component {
    constructor() {
        super();
        this.state = {
            input: null
        };
    }

    showResult(input){
        this.setState({
            input: check(input)
        })
        //return check(input);
    }

    render () {
        return (
            <div className="QuoteSuggest">
            <input
        ref={(input) => this.input = input}
    placeholder={"Enter a symbol"}
    onKeyUp={(event) =>     this.showResult(event.target.value)}
/>

<Dropdown value={this.state.input} />
</div>

);
}
}


ReactDOM.render(
<QuoteSuggest />,
    document.querySelector('main')
);

function check (input){
    var result = [];
    var reg = new RegExp(input, "i");
    for(var i = 0; i < DATA.length; i++){
        if(DATA[i].symbol.match(reg)){
            result.push(DATA[i]);
        }
    }
    if(result.length){
        return result;
    } else {
        return null;
    }
}