import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function UserLists({ users }) {
    let [results,setResults] =useState(users);
    let searchUser = (event)=>{
        let {value} = event.target;
        let arr = [];
        users.map ((user)=>{
            if (user.username.toLowerCase().includes(value.toLowerCase())){
                arr.push(user);
            }
        }) 
        setResults(arr)
    }
    return (
        <div className=' container mt-5 pt-5'>
            <div className="input-group ms-5">
  <div className="form-outline bg-secondary ">
    <input onChange={searchUser} type="search" id="form1" className="form-control" />
    <label className="form-label" htmlFor="form1">Search</label>
  </div>
  <button type="button" className="btn btn-primary">
    <i className="fas fa-search" />
  </button>
</div>


            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name
                        </th>
                        
                    </tr>
                </thead>
                <tbody>
                    {results.map((user, i) => (
                        <tr key={i}>
                            <th scope="row">{i} </th>
                            <td>{user.username} <Link to={`/list/${user.id} `}  className='btn btn-danger'>see my cart<i className="fa-solid fa-cart-shopping px-1" /></Link > </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}

export default UserLists