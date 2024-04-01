import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import ProfileItem from "./ProfileItem";
import { getProfiles } from "../../actions/profile";

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
	useEffect(() => {
		getProfiles();
	}, [getProfiles]);

	return (
		<div>
			{loading ? (
				<Spinner />
			) : (
				<section className='container'>
					<h1 className='large text-heading'>Engineers</h1>
					<p className='lead'>
						<i className='fab fa-connectdevelop' /> Browse and
						connect with engineers
					</p>
					<div className='profiles'>
						{profiles.length > 0 ? (
							profiles.map((profile) => (
								<ProfileItem
									key={profile._id}
									profile={profile}
								/>
							))
						) : (
							<h4>No profiles found...</h4>
						)}
					</div>
				</section>
			)}
		</div>
	);
};

Profiles.propTypes = {
	getProfiles: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
