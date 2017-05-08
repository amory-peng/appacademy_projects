import React from 'react';
import GreetingContainer from './greeting/greeting_container';
const App = (props) => {
  return (
  <div>
    <h1>Bench_bnb</h1>
    <GreetingContainer />
    { props.children }
  </div>
  );
};

console.log('app');
export default App;
