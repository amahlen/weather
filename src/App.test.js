import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('looking for a fetch()', done => {
  function callback(data) {
    expect(data).toBe('looking for a fetch()');
    done();
  }

  fetchData(callback);
});
 
 