import React, { useState } from "react";

import { BsPatchPlus } from "react-icons/bs";
import { BiFilterAlt } from "react-icons/bi";

const categories = [
	"executive management",
	"finance",
	"accounting",
	"marketing",
	"product management",
	"program management",
	"data analysis & research",
	"sales",
	"design & creatives",
	"writing & editing",
	"engineering",
	"hardware development",
	"software development",
	"web & Mobile developemnt",
	"human resources",
	"other",
];

const Header = () => {
	const [clickCategory, setClickCategories] = useState(false);

	return (
		<header className=''>
			<section className='flex items-center justify-between w-full py-5 '>
				<div className='flex items-center w-1/2 '>
					<input
						type='text'
						placeholder='Search experts'
						className='w-3/5 px-3 py-1.5 focus:ring-0 focus:outline-none focus:border-2 transition duration-300 ease-in mr-3 border rounded border-kyrrex-green'
					/>
					<div className='flex items-center gap-x-3'>
						<p>or</p>
						<button
							onClick={() => setClickCategories(!clickCategory)}
							className='flex items-center w-full px-3 py-2 font-sans text-sm tracking-wide uppercase transition duration-300 ease-in border rounded-lg cursor-pointer gap-x-1.5 text-kyrrex-green hover:text-white border-kyrrex-green hover:bg-kyrrex-green'
						>
							<i>
								<BiFilterAlt className='text-lg' />
							</i>
							select categories
						</button>
					</div>
				</div>

				{clickCategory && (
					<>
						<fieldset className='absolute z-10 w-1/2 px-8 py-4 border rounded-md backdrop-blur-3xl left-1/3 border-zinc-300 top-20'>
							<legend className='sr-only'>
								Checkbox variants
							</legend>
							{categories?.map((category, index) => (
								<div
									key={index}
									className='flex items-center mb-4 cursor-pointer '
								>
									<input
										id={`checkbox-${index}`}
										aria-describedby={`checkbox-${index}`}
										type='checkbox'
										className='w-4 h-4 rounded border-edward-gray bg-alto-light focus:ring-3 focus:ring-blue-300'
									/>
									<label
										for={`checkbox-${index}`}
										className='ml-3 capitalize cursor-pointer text-zinc-700'
									>
										{category}
									</label>
								</div>
							))}
						</fieldset>
					</>
				)}
				<div className=''>
					<button className='flex items-center justify-center px-4 py-2 font-sans text-sm tracking-wide uppercase transition duration-300 ease-in border rounded cursor-pointer text-kyrrex-green hover:text-white gap-x-2 hover:bg-kyrrex-green border-kyrrex-green '>
						<i>
							<BsPatchPlus className='text-lg' />
						</i>
						post a job
					</button>
				</div>
			</section>
		</header>
	);
};

export default Header;
