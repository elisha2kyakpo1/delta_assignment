import React, { useState } from 'react';
import { useSelector} from 'react-redux';
import Button from 'react-bootstrap/Button';
import {FaTrash} from 'react-icons/fa'
import AddMembersForm from './AddMembersForm';
import './Members.css';

const Members = () => {
  const members = useSelector((state) => state.MembersReducer);
  const [displayAddMember, setAddMemberForm] = useState(false);
  const categories = ['Development', 'Software', 'Mechanical', 'Chemical', 'LifeStyle'];

  const [category, setCategory] = useState(categories[0]);

  let form;
  if (displayAddMember) {
    form = <div className="add-member">
      <AddMembersForm />
    </div>
  }
  return (
    <div className='mt-3 mx-5'>
      <header>
        <nav className=''>
          <h2 className='title'>Team Members</h2>
          <Button className='btn-form' onClick={() => setAddMemberForm(!displayAddMember)}>Add members<span className='ml-2 text-l'>+</span></Button>
          { form }
        </nav>
      </header>
      <main>
        <div>
          <div className='d-flex mt-5'>
            <select className="selection1" name="category" onChange={(category) => setCategory(category.target.value)}>
              {categories.map((category) => (
                <option className="options" key={category} value={category}>{category}</option>
              ))}
            </select>
            <select className="selection ml-2" name="category" onChange={(category) => setCategory(category.target.value)}>
              {categories.map((category) => (
                <option className="options" key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <table className="table table-striped">
           
            <thead>
              <tr>
                <th scope="col"><input type="checkbox" name="name1" />&nbsp;Name</th>
                <th scope="col">Company</th>
                <th scope="col">Status</th>
                <th scope="col">Last updated</th>
                <th scope="col">Notes</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member) => (
                <tr key={member.id}>
                  <td><input type="checkbox" name="name1" />&nbsp;someone</td>
                  <td>{member.name}</td>
                  <td>{member.company}</td>
                  <td>{member.status}</td>
                  <td>{member.last_updated}</td>
                  <td>{member.notes}</td>
                  <td><FaTrash /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}

export default Members;