// import Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
// // import css bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Page Auth
import { LoginPage } from './pages/auth/login';
import { RegisterPage } from './pages/auth/register';
// Page Main
import { AddTodoPage } from './pages/todo/add-todo';
import { DeleteTodoPage } from './pages/todo/delete-todo';
import { DetailTodoPage } from './pages/todo/detail-todo';
import { UpdateTodoPage } from './pages/todo/update-todo';
import { ListTodoPage } from './pages/todo/list-todo';
import { ProtectedRoute } from './pages/auth/ProtectedRoute';

import { ListShop } from './pages/shop/list';
import { DetailShop } from './pages/shop/detail';
import { Halaman1 } from './pages/shop/halaman1';

function App() {
	return (
		<Router>
			<Switch>
				<Route component={LoginPage} path="/login" />
				<Route component={RegisterPage} path="/register" />
				<Route component={ListTodoPage} path="/" exact />
				<Route component={DetailTodoPage} path="/todo/:id" />

				<ProtectedRoute component={AddTodoPage} path="/add" />
				<ProtectedRoute component={UpdateTodoPage} path="/update/:id" />
				<ProtectedRoute component={DeleteTodoPage} path="/delete/:id" />

				<Route component={ListShop} path="/shop" exact />
				<Route component={DetailShop} path="/shop/:id" />
				<Route component={Halaman1} path="/contoh-halaman-1" />
			</Switch>
		</Router>
	);
}

export default App;
