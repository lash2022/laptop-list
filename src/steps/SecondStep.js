import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const SecondStep = ({next, prev, data}) => {
    const handleSubmit = (values) => {
        next(values)
        
    }

  return (
    <Formik 
    initialValues={data}
    onSubmit={handleSubmit}
    >
      {
        ({values}) => (
            <Form>
                <p>laptopis saxeli</p>
                <Field name="lap_name"/>
                
                <p>Cpus birTvi</p>
                <Field name="cpu" type='number'/>
                <p>Cpus nakadi</p>
                <Field name="current" type='number'/>
                <p>Cpus rami</p>
                <Field name="ram" type='number'/>
                <p>tipi</p>
                <div role="group" >
                    <label>
                    <Field type="radio" name="type" value="ssd" />
                    SSD
                    </label>
                    <label>
                    <Field type="radio" name="type" value="hdd" />
                    HDD
                    </label>
                </div>
                <p>shedzenis ricxcvi</p>
                <Field name="date" type='date'/>
                <p>fasi</p>
                <Field name="price" type='number'/>
                <p>mgomareoba</p>
                <div role="group" >
                    <label>
                    <Field type="radio" name="condition" value="axali" />
                    axali
                    </label>
                    <label>
                    <Field type="radio" name="condition" value="meoradi" />
                    meoradi
                    </label>
                </div>

                
                
                
                <br/>
                <button className=' mr-2' type='button' onClick={() =>prev(values)}>Back</button>
                <button type='submit'>Submit</button>
            </Form>
        )
      }  
    </Formik>
  )
}

export default SecondStep