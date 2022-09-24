import React, { useState } from "react";
import { BsPatchPlus } from "react-icons/bs";

const categories = [
	"executive management",
	"finance",
	"accoutning",
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
		<header>
			<section className='flex items-center justify-between w-full p-5 bg-white '>
				<div className='flex items-center w-1/2 '>
					<input
						type='text'
						placeholder='Search experts'
						className='w-3/5 px-3 py-1 mr-3 border rounded border-zinc-300'
					/>
					<div className='flex items-center gap-x-3'>
						<p>or</p>
						<button
							onClick={() => setClickCategories(!clickCategory)}
							className='px-4 py-2 font-sans text-sm tracking-wide text-white uppercase transition duration-300 ease-in rounded-sm cursor-pointer bg-teal hover:bg-green-600'
						>
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
										className='w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300'
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
					<button className='flex items-center justify-center px-4 py-2 font-sans text-sm tracking-wide text-white uppercase transition duration-300 ease-in rounded-sm cursor-pointer gap-x-2 hover:bg-green-600 bg-lime-500'>
						<i>
							<BsPatchPlus />
						</i>
						post a job
					</button>
				</div>
			</section>
		</header>
	);
};

export default Header;

export const Modal = ({ showModal, setShowModal }) => {
	return (
		<>
			<button
				className='px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-pink-500 rounded shadow outline-none active:bg-pink-600 hover:shadow-lg focus:outline-none'
				type='button'
				onClick={() => setShowModal(true)}
			>
				Open regular modal
			</button>
			{showModal ? (
				<>
					<div className='fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none'>
						<div className='relative w-auto max-w-3xl mx-auto my-6'>
							{/*content*/}
							<div className='relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none'>
								{/*header*/}
								<div className='flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200'>
									<h3 className='text-3xl font-semibold'>
										Modal Title
									</h3>
									<button
										className='float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none'
										onClick={() => setShowModal(false)}
									>
										<span className='block w-6 h-6 text-2xl text-black bg-transparent outline-none opacity-5 focus:outline-none'>
											×
										</span>
									</button>
								</div>
								{/*body*/}
								<div className='relative flex-auto p-6'>
									<p className='my-4 text-lg leading-relaxed text-slate-500'>
										I always felt like I could do anything.
										That’s the main thing people are
										controlled by! Thoughts- their
										perception of themselves! They're slowed
										down by their perception of themselves.
										If you're taught you can’t do anything,
										you won’t do anything. I was taught I
										could do everything.
									</p>
								</div>
								{/*footer*/}
								<div className='flex items-center justify-end p-6 border-t border-solid rounded-b border-slate-200'>
									<button
										className='px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none'
										type='button'
										onClick={() => setShowModal(false)}
									>
										Close
									</button>
									<button
										className='px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none'
										type='button'
										onClick={() => setShowModal(false)}
									>
										Save Changes
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className='fixed inset-0 z-40 bg-black opacity-25'></div>
				</>
			) : null}
		</>
	);
};
