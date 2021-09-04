import React from 'react';
import {registration} from "../redux/api/users";
import {useDispatch} from "react-redux";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup'
import {Input} from "../ui/Input";

export default function Registration() {
  const dispatch = useDispatch()

  let initialValues = {
    username: '',
    email: '',
    password: '',
  }

  const validationSchema = Yup.object().shape({
    username: Yup.string().min(8, 'Min 8 characters').max(150, 'Max 150 characters').required('Required'),
    email: Yup.string().email('Enter valid email'),
    password: Yup.string().min(8, 'Min 8 characters').max(128, 'Max 128 characters').required('Required')
  })

  const handleSubmit = (values, props) => {
    dispatch(registration(values.username, values.email, values.password))
    console.log(values)
  }

  return (
    <div>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {(props) => (
          <Form>
            {/*{console.log(props)}*/}
            <Field as={Input}
                   placeholder='Username'
                   name='username'
                   label='username'
                   value={props.values.username}
                   onChange={props.handleChange}
                   error={props.errors.username && props.touched.username}
                   helperText={<ErrorMessage name='username'/>}
                   required
            />
            <Field as={Input}
                   placeholder='Email'
                   name='email'
                   label='email'
                   type='Email'
                   value={props.values.email}
                   onChange={props.handleChange}
                   error={props.errors.email && props.touched.email}
                   helperText={<ErrorMessage name='email'/>}
                   required
            />
            <Field as={Input}
                   placeholder='Password'
                   name='password'
                   label='password'
                   value={props.values.password}
                   onChange={props.handleChange}
                   error={props.errors.password && props.touched.password}
                   helperText={<ErrorMessage name='password'/>}
                   required
            />
            <button type='submit'>Reg</button>
          </Form>
        )
        }
      </Formik>
    </div>
  );
}