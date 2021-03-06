import React from 'react';


class SearchBar extends React.Component {
    state = {term: ''};

    //  {/* <form onSubmit={this.onFormSubmit} className='ui form'> */}
    // onFormSubmit = (event) => {
    //     event.preventDefault();
    //     console.log(this.state.term);
    // }

    onFormSubmit(event) {
        event.preventDefault();
        // console.log(this.state.term);
        this.props.onSubmit(this.state.term);
    }

    render(){
        return (
            <div className='ui segment'>
                <form onSubmit={e => this.onFormSubmit(e)} className='ui form'>
                    <div className='field'>
                        <label>Image Search</label>
                        <input type='text' value={this.state.term} onChange={e=>this.setState({term: e.target.value})}></input>

                    </div>
                </form>
            </div>)
        ;
    }
}

export default SearchBar;