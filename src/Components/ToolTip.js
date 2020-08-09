import React from 'react';

class ToolTip extends React.Component {

    render() {
        const { position } = this.props;
        const currentClass = 'tooltip ' + position;
        return (
            
                <span className={currentClass}>Tooltip
                </span>
        )
    }
}

export default ToolTip;
