import React from 'react';
import ToolTip from './ToolTip';

class ButtonWithToolTip extends React.Component {

    render() {
        const { position } = this.props;
        return (
            <div className="button-tooltip">
                {/* Button visible before hovering */}
                <button class="button-info">Hover</button>
                {/* Tool tip of the button visible after hover */}
               <ToolTip
               position={position}
               />
            </div>
        )
    }
}

export default ButtonWithToolTip;
