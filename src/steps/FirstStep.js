import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useEffect, useState, useRef } from 'react'
import Axios from 'axios'

const FirstStep = (props) => {
  const [team, setTeam] = useState([])
  const [posi, setPosi] = useState([])

  const handleSubmit = (values) => {
    props.next(values)
  }
  useEffect(() => {

    Axios.get('https://pcfy.redberryinternship.ge/api/teams')
      .then(res => {
        console.log(res.data.data)
        setTeam(res.data.data)
      })

  }, [])

  useEffect(() => {
    Axios.get('https://pcfy.redberryinternship.ge/api/positions')
      .then(res => {
        console.log(res.data.data)
        setPosi(res.data.data)

      })
  }, [])


  return (
    <Formik
      initialValues={props.data}
      onSubmit={handleSubmit}
    >
      {({values}) => (
        <Form>
          <p>saxeli</p>
          <Field name='first_name' />
          <p>gvari</p>
          <Field name='last_name' />
          <p>airchie</p>
          <Field as="select" name='team'  >
            <option value="select" >--select--</option>
            {team.map((pos) => <option key={pos.id} value={pos.id} >{pos.name}</option>)}


          </Field><br />
          {values.team && 
          <Field as="select" name="position">
            <option value="select" >--select--</option>
            {posi.filter(p => p.team_id == values.team)
              .map((p) => <option key={p.id} value={p.name} label={p.name} >{p.name}</option>)}
          </Field>
          }



          <p>maili</p>
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />

          <p>telefonis nomeri</p>
          <Field name='number' />
          <br />
          <button type='submit' >shemdegi</button>

        </Form>
      )}
    </Formik>
  )
}

export default FirstStep