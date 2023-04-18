import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './index.css';
import { App } from './App';

const Root = () => (
  // <BrowserRouter basename='/build'> 
  <HashRouter>
    <App />
    {/* <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<h1 className="title">Home Page</h1>} />

        <Route path="/home" element={<Navigate to="/" replace />} />

        <Route path="todos">
          <Route index element={<TodosPage />} />
          <Route path=":todoId" element={<TodosPage />} />
        </Route>

        <Route path="*" element={<p>Page not found</p>} />
      </Route>
    </Routes> */}
  </HashRouter>
  // </BrowserRouter>
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<Root />);
