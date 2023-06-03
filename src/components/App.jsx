import { Counter } from 'components/Counter/Counter.jsx';
//import { Component } from 'react';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection:'column',
        alignItems: 'center',
        fontSize:60,
        fontWeight:500,
        color: '#010101',
      }}
    >
      Please leave feedback
      <Counter />
      

    
    </div>
  );
};
