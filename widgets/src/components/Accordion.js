import React, {useState} from "react";


// class Accordion extends React.Component {
//     super(){
//         const [activeIndex, setActiveIndex] = useState(null);
//     }

//     onTitleClick(index) {
//         console.log('Title clicked', index);
//     }

//     render(){
//         const renderedItems = this.props.items.map((item, index) => {
//             return (
//                 <React.Fragment key={item.title}>
//                     <div onClick={() => this.onTitleClick(index)} className="title active">
//                         <i className="dropdown icon"></i>
//                         {item.title}
//                     </div>
//                     <div className="content active">
//                         <p>{item.content}</p>
//                     </div>
//                 </React.Fragment>
//             )
//         })

//         return (
//             <div className="ui styled accordion">{renderedItems}</div>
//         );
//     }
// }

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        setActiveIndex(index);
    }

    const renderedItems = items.map((item, index) => {

        const active = index === activeIndex ? 'active': '';

        return (
            <React.Fragment key={item.title}>
                <div onClick={() => onTitleClick(index)} className={`title ${active}`}>
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        )
    })

    return (
        <div className="ui styled accordion">{renderedItems}</div>
    );

}


export default Accordion;
