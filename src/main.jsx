
import { createRoot } from 'react-dom/client';
import App from './App.jsx'
import { Provider } from 'react-redux';
import { Store } from './App/Store.jsx';
import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <Provider store={Store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )

const container = document.getElementById('root'); // Get the root element from the DOM
const root = createRoot(container); // Create the root

root.render(
    <Provider store={Store}>
      <App />
    </Provider>
);