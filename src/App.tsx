
import { Navigate, Route, Routes } from 'react-router-dom';
import { MainNav } from './components/MainNav';
import { TodosPage } from './pages/TodosPage';

export const App = () => {
  // const { todoId } = useParams(); //doest work outside of Route
  // const match = useMatch('/todos/:todoId'); //prints todoId before table with <p>


  return <>
    <MainNav />

    {/* <p>{match?.params.todoId}</p> */}

    <Routes>
      {/* <Route path='/' element={<App />}> */}
      <Route path='/' element={<h1 className="title">Home Page</h1>} />

      <Route path="/home" element={<Navigate to="/" replace />} />

      <Route path="todos">
        <Route index element={<TodosPage />} />
        <Route path=":todoId" element={<TodosPage />} />
      </Route>

      <Route path="*" element={<p>Page not found</p>} />
      {/* </Route> */}
    </Routes>

    {/* <div className="section">
      <Outlet />
    </div> */}
  </>;
};
