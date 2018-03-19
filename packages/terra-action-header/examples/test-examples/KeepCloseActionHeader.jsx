import React from 'react';

import ActionHeader from '../../lib/ActionHeader';

// eslint-disable-next-line
export default () => <ActionHeader title="Keep Closed Action Header" keepCloseButton onClose={() => alert('You clicked close!')} />;
