import React from "react";
import { Header, Main, Sidebar } from "./Components";
import { Search } from "./Pages";
const Layout = () => {
	return (
		<div className='flex justify-between w-full '>
			<Sidebar />
			{/* <Main /> */}
			<Search />
		</div>
	);
};

export default Layout;
