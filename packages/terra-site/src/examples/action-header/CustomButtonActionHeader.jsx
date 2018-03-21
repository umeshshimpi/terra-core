/* eslint-disable no-alert */
import React from 'react';
import Button from 'terra-button';
import ActionHeader from '../../../../terra-action-header'; // TODO: Resolve path

const ActionHeaderExample = () => (
  <div>
    <br />
    <ActionHeader title="Custom Button Action Header">
      <div>
        <Button text="Custom Button" onClick={() => alert('You clicked me!')} />
      </div>
    </ActionHeader>
    <br />
  </div>
);

export default ActionHeaderExample;
/* eslint-enable no-alert */
