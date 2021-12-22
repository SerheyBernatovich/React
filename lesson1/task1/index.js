const root = document.querySelector('#root');

const greetingEl = React.createElement(
  'div',
  { className: 'greeting' },
  'Hello, React!'
);

ReactDOM.render(greetingEl, root);
