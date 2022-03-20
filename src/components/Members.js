import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import {FaTrash} from 'react-icons/fa'
import AddMembersForm from './AddMembersForm';
import './Members.css';

const Members = () => {
  const [displayAddMember, setAddMemberForm] = useState(false);
  const categories = ['Development', 'Software', 'Mechanical', 'Chemical', 'LifeStyle'];

  const [category, setCategory] = useState(categories[0]);

  let form;
  if (displayAddMember) {
    form = <div className="">
      <AddMembersForm />
    </div>
  }
  return (
    <div className='mt-3 mx-5'>
      <nav className='d-flex'>
        <h2>Team Members</h2>
        <Button onClick={() => setAddMemberForm(!displayAddMember)}>Add members<span className='ml-2 text-l'>+</span></Button>
        { form }
      </nav>
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
                <option className="options" key={category} value={category}>{category}(0)</option>
              ))}
            </select>
          </div>
          <table class="table table-striped">
           
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
              
              <tr>
                <td><input type="checkbox" name="name1" />&nbsp;someone</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td><FaTrash /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}

export default Members