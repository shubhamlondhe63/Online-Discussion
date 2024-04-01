import React from "react";
import { Link } from "react-router-dom";

const DashboardActions = () => {
	return (
		<div className='dash-buttons'>
			<Link to='/edit-profile' className='btn btn-light'>
				<i className='fas fa-user-circle text-heading' /> Edit Profile
			</Link>
			<Link to='/add-experience' className='btn btn-light'>
				<i className='fab fa-black-tie text-heading' /> Add Experience
			</Link>
			<Link to='/add-education' className='btn btn-light'>
				<i className='fas fa-graduation-cap text-heading' /> Add
				Education
			</Link>
		</div>
	);
};

export default DashboardActions;
