import React from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Landing = ({ isAuthenticated }) => {
	if (isAuthenticated) {
		return <Navigate to='/dashboard' />;
	}

	return (
		<section className='landing'>
			<div className='dark-overlay'>
				<div className='landing-inner'>
					<h1 className='x-large'>
						<i className='bi bi-terminal'></i> The TalkSpace
					</h1>
					<p className='lead'>
						Create a engineer profile/portfolio, share posts
						<br />
						and get help from other engineers
					</p>
					<div className='buttons'>
						<Link to='/register' className='btn btn-success'>
							Sign Up
						</Link>
						<Link to='/login' className='btn btn-light'>
							Login
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

Landing.propTypes = {
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
