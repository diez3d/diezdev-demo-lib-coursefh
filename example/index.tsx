import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { EmptyState } from '../.';

const App = () => {
  return (
    <div>
      <EmptyState />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
