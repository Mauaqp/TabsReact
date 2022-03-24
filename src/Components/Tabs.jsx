import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
import React, {useState} from "react";

const Tabs = props => {
    const [idSelected, setIdSelected] = useState(0);

    const onclickHandler = (e, value) => {
        setIdSelected(value);
    }

    const tabStyle = {
        padding: '12px 18px',
        display: 'inline-block',
        background: 'grey'
    }
    const tabStyleChecked = {
        background : 'black'
    }

    return (
        <div>
            {
            props.tabSections.map((tab, i) =>{
                return (
                    <div onClick={(e)=> onclickHandler(e,i)} style = {tabStyle}>
                        <span key={i}>{tab.label}</span>
                    </div>
                );
            })
            }
            <div>
                {<p>{props.tabSections[idSelected].content}</p>}
            </div>
        </div>
    );
}

export default Tabs;