import React from 'react';

class ButtonWithToolTip extends React.Component {

    render() {
        const { position } = this.props;
        const currentClass = 'tooltip ' + position;
        return (
            <div className="button-tooltip">
                {/* Button visible before hovering */}
                <span class="button-info">Hover</span>
                {/* Tool tip of the button visible after hover */}
                <span className={currentClass}>Tooltip
                </span>
            </div>
        )
    }
}

export default ButtonWithToolTip;
