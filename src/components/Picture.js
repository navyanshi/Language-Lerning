import React from 'react';
import Flags from './styledComponents/flags.js';

const Picture = props => {

    return (
      <Flags onClick={props.handlePictureClicked}><img src={props.flagImage} alt="Image"/> </Flags>
    );
};

export default Picture;
