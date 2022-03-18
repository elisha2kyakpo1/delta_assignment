import React, { useState } from 'react'

const Members = () => {
  const [displayAddMember, setAddMemberForm] = useState(false);

  let form;
  if (displayAddMember) {
    form = <div className="form-data">
   
    </div>
  }
  return (
    <div className='d-flex'>
      <h2>Team Members</h2>
      <button onClick={() => setAddMemberForm(!displayAddMember)}>Add members<span>+</span></button>
      { form }
    </div>
  )
}

export default Members