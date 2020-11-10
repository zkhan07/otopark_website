import React from 'react';
import axios from 'axios';

const URL="http://www.otopark.in:8000"

export const ContactForm =(body)=>{
    return axios.post(URL,body)
}