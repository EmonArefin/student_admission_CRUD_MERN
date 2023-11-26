import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { deleteFormRequest, registrationFormRequest } from '../apiRequest/apiRequest';
import {toast, Toaster} from 'react-hot-toast'
import Loader from './Loader';
import { Link } from 'react-router-dom';
import './information.css'


const InformationComponent = () => {
    let [Form, setForm] = useState([]);
    let [change, setChange] = useState(0);

        useEffect(()=>{
            (async()=>{
                let response = await registrationFormRequest()
                setForm(response)
            })()
        }, [change])

        const onDelete = async (id) => {
            try {
                await deleteFormRequest(id);
                toast.success("Delete Successful");
                setChange(new Date().getTime());
            } catch (error) {
                toast.error("Not Deleted");
            }
        };

        if(Form.length===0){
            return <Loader/>
        }
        else {
            return (
                <div className="container-fluid">
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='table-responsive'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Gender</th>
                                            <th>Date of birth</th>
                                            <th>Nationality</th>
                                            <th>Address</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>Admission Date</th>
                                            <th>Courses</th>
                                            <th>Action</th>
                                            <th>Change</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            Form.map((item, index)=>{
                                                return(
                                                    <tr key={index}>
                                                        <td>{item['firstName']}</td>
                                                        <td>{item['lastName']}</td>
                                                        <td>{item['gender']}</td>
                                                        <td>{item['dateOfBirth']}</td>
                                                        <td>{item['nationality']}</td>
                                                        <td>{item['address']}</td>
                                                        <td>{item['email']}</td>
                                                        <td>{item['phone']}</td>
                                                        <td>{item['admissionDate']}</td>
                                                        <td>{item['courses']}</td>
                                                        <td>
                                                            <button onClick={() => { onDelete(item['_id']) }} className="btn btn-danger">&times;</button>
                                                        </td>
                                                        <td>
                                                            <Link className="btn mx-2 btn-success" to={"/registration?id="+item['_id']}>Edit</Link>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <Toaster position='bottom-center'/>
                </div>
            );
        }
    
};

export default InformationComponent;
