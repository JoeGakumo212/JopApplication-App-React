import React from 'react';
import { sendApplication } from '../api-helper/frontend/utils';
import Form from './form';
const moreJobs = () => {   

    const getFormData = (data) => {
        sendApplication(data).then((value) => console.log(value)).catch(err => console.log(err)); 
    };
    return (
        <div>
            <Form onSubmit={ getFormData }  />
        </div>
    );
};

export default moreJobs;
