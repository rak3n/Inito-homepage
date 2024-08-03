/**
 *
 * Asynchronously loads the component
 *
 */
import React from 'react';

import loadable from '../utils/loadable';
import LoadingIndicator from '../components/LoadingIndicator';

export default loadable(() => import('./index'), {
  fallback: (
    <div style={{ width: '100vw' }}>
      <LoadingIndicator />
    </div>
  ),
});
