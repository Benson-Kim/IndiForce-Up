import { Route, Routes } from "react-router-dom";
import Layout from "./Employers/Layout";
import { Dashboard, Invoices, OpenJobs } from "./Employers/Pages";

const App = () => {
	return (
		<div className='flex justify-between w-full h-full scroll-smooth'>
			<Layout />
			<Routes>
				<Route path='/' element={<Dashboard />} />
				<Route path='/jobs-open' element={<OpenJobs />} />

				<Route path='/invoices' element={<Invoices />} />
			</Routes>
		</div>
	);
};

export default App;
