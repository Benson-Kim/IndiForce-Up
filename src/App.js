import { Route, Routes } from "react-router-dom";
import Layout from "./Employers/Layout";
import {
	Contracts,
	Dashboard,
	Expert,
	Invoices,
	OpenJobs,
	Search,
} from "./Employers/Pages";

const App = () => {
	return (
		<div className='relative flex justify-between w-full h-full scroll-smooth'>
			<Layout />
			<Routes>
				<Route path='/' element={<Dashboard />} />
				<Route path='/jobs-open' element={<OpenJobs />} />
				<Route path='/contracted' element={<Search />} />
				<Route path={"/experts/:expertId"} element={<Expert />} />

				<Route path='/invoices' element={<Invoices />} />
				<Route path='/contracts' element={<Contracts />} />
			</Routes>
		</div>
	);
};

export default App;
