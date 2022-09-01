import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import FirstStep from '../steps/FirstStep';
import SecondStep from '../steps/SecondStep';
import Grats from '../steps/Grats';


const MainForm = () => {
    const [data, setData] = useState({
        first_name: '',
        last_name: '',
        team: '',
        position: '',
        mail: '',
        number: '',
        lap_name: '', 
        cpu: '',
        current:'',
        ram: '',
        type: '',
        date: '',
        price:'',
        condition:''
      })
      const [curStep, setCurStep] = useState(0)
      const makeRequest = (formData) =>{
        console.log('form submitted', formData)
      }

      const handleNextStep = (newData, final =false) => {
        setData(prev => ({...prev, ...newData}))
        if(final) {
            makeRequest(newData)
            return  
        }
        setCurStep(prev => prev +1)
      }
      const handlePreviousStep = (newData) => {
        setData(prev => ({...prev, ...newData}))
        setCurStep(prev => prev - 1)
      }

      const steps = [
        <FirstStep next = {handleNextStep} data={data}/>, 
        <SecondStep next = {handleNextStep} prev ={handlePreviousStep} data={data} />,
        <Grats />
      ]
      console.log("hey its ur data", data)
    return (
      <div className=" text-center bg-red-700 xs:bg-green-600">
         {steps[curStep]}
      </div>
    )
}

export default MainForm;

