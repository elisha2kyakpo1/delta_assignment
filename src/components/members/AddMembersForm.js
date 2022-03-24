import React, { useState} from 'react';
import './AddMembersForm.css';

const AddMembersForm = () => {
  const [closeForm, setClose] = useState(false);
  return (
    <div className='overla'>

    <div className="outter_container d-flex">
      <div className="contain popup">
        <button  className='close' onClick={() => setClose(closeForm)}>&times;</button>
        <form className="form">
          <h6>Add members</h6>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="company">Company</label>
            <input type="text" className="form-control" id="company" name="Company" />
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <input type="text" className="form-control" id="status" name="Status" />
          </div>
          <div className="form-group">
            <label htmlFor="notes">Notes</label>
            <textarea className="form-control" id="notes" name="Notes" />
          </div>
          <div className='d-flex submit mt-2'>
          <button type="submit" className="btn btn-white text-primary cancel">Cancel</button>
          <button type="submit" className="btn btn-primary">Save</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
}

export default AddMembersForm;