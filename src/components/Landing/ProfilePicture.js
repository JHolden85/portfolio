import React from 'react';

function ProfilePicture (props) {
  return (
    <>
      {/* Profile picture. */}
      <img className={props.className} src="assets//images/Christian-Profile.jpg" alt="Profile Pic" />
    </>
  );
}

export default ProfilePicture;