import React from 'react'
import { Formik, Form, Field,ErrorMessage } from 'formik'
import { useEffect,useState } from 'react'
import Axios from 'axios'

const FirstStep = (props) => {
    const [team, setTeam] = useState([])
    const [posi, setPosi] = useState([])
    const [teamid, setTeamid] = useState('')
    const [listItems, setListItems] = useState(null)
    
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
         },[])
         useEffect(() => {
            const list = () => posi.filter(p => p.team_id == teamid)
            .map((p) => <option key={p.id}  label={p.name} >{p.name}</option> )
            setListItems(list)
         },[teamid])
         console.log('teamid - ' , teamid)
         
  return (
    <Formik
    initialValues={props.data}
    onSubmit ={handleSubmit}
    >
        {() => (
            <Form>
                <p>saxeli</p>
                <Field name='first_name'/>
                <p>gvari</p>
                <Field name='last_name'/>
                <p>airchie</p>
                <select  name ='team' onChange = {(e) => setTeamid(e.target.value)} >
                  <option value="select">--select--</option>
                {team.map((pos) => <option key={pos.id} value ={pos.id} >{pos.name}</option> )}
                    
                    
                </select><br />
                <select  name="position">
                {listItems}
                    
                    
                </select>
                


                <p>maili</p>
                <Field 
                id="email"
                name="email"
                placeholder="jane@acme.com"
                type="email"
                />
                
                <p>telefonis nomeri</p>
                <Field name ='number'/>
                <br/>
                <button type='submit' >shemdegi</button>

            </Form>
        )}
    </Formik>
  )
}

export default FirstStep