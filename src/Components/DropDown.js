import React from 'react';

class DropDown extends React.Component {

    render() {
        return (

            //drop down with four positions
            <div>
                <select id="position" name="cars" className="dropdown">
                    <option value="left">Left</option>
                    <option value="right">Right</option>
                    <option value="bottom">Bottom</option>
                    <option value="top" selected>Top</option>
                </select>
            </div>
        )
    }
}

export default DropDown;
