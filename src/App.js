
import { useState } from 'react';
import './App.css';

const data = [
  {
    id: 1,
    name: 'bob',
    position: 'react developer',
    salary: 10000,
    salaryEdit: false,
  },
  {
    id: 2,
    name: 'Lily',
    position: 'java developer',
    salary: 50000,
    salaryEdit: false,
  },
  {
    id: 3,
    name: 'Mary',
    position: 'vue developer',
    salary: 1000,
    salaryEdit: false,
  },
];

function App() {
  const [userData, setUserData] = useState(data);

  const editHandler = (editId)=> {
    const editIndex = userData.findIndex((item)=> item.id === editId);
    
    const newData = [...userData];
    newData[editIndex].salaryEdit = !userData[editIndex].salaryEdit;
    setUserData(newData);
  };

  const editSalaryHandler = (event, editId) => {
    const editIndex = userData.findIndex((item)=> item.id === editId);
    const newSalary = event.target.value;

    if(userData[editIndex].salaryEdit === true) {
      const newData = [...userData];
      newData[editIndex].salary = newSalary;
      console.log(newData)
      setUserData(newData);
    }
  };

  return (
    <div className='container'>
      <table className='tableCon'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Action</th>
          </tr> 
        </thead>
        <tbody>
          {userData.map((item)=> (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.position}</td>
              <td>
                {item.salaryEdit && <input className="inputSalary" type='text' value={item.salary} onChange={(event)=>editSalaryHandler(event, item.id)}/>}
                {!item.salaryEdit && <p className='salary'>{item.salary}</p>}
              </td>
              <td onClick={()=> editHandler(item.id)}>{item.salaryEdit? 'Save':'Edit'}</td>
            </tr>
          ))}
        </tbody> 
      </table>
    </div>
  );
}

export default App;
