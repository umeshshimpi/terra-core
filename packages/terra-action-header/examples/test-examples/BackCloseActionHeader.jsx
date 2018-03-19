import React from 'react';

import ActionHeader from '../../lib/ActionHeader';

// eslint-disable-next-line
export default () => <ActionHeader title="Back Close Action Header" onBack={() => alert('You clicked back!')} onClose={() => alert('You clicked close!')} />;
