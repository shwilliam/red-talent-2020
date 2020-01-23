import React from 'react'

const ProfileCard = ({name, imgUrl}) => (
  <>
    <p>{name}</p>
    <img height="200px" src={imgUrl} />
  </>
)

export default ProfileCard
