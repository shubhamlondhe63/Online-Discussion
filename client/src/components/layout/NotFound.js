import React from "react";

const NotFound = () => {
	return (
		<section className='container text-center'>
			<h1 className='x-large text-heading'>
				<i className='fas fa-exclamation-triangle' /> Page Not Found
			</h1>
			<p className='large'>
				Sorry, this page does not exist <b>!</b>
			</p>
		</section>
	);
};

export default NotFound;
