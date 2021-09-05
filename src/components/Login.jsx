import React from 'react';
import {login} from "../redux/api/users";
import {useDispatch} from "react-redux";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup'
import {Link} from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch()

  let initialValues = {
    username: '',
    password: '',
  }

  const validationSchema = Yup.object().shape({
    username: Yup.string().min(8, 'Min 8 characters').max(150, 'Max 150 characters').required('Required'),
    password: Yup.string().min(8, 'Min 8 characters').max(128, 'Max 128 characters').required('Required')
  })

  const handleSubmit = async (values, props) => {
    const submit = await dispatch(login(values.username, values.password))
    console.log(values)
    return submit
  }

  return (
    <div className='min-h-screen bg-gray-50 flex flex-col justify-center'>
      <div className="max-w-md w-full mx-auto">
        <div className="text-3xl font-bold text-gray-900 mt-2 text-center">
          Sign In
        </div>
      </div>
      <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {(props) => (
            <Form>
              {/* Username Field */}
              <div>
                <label className='text-sm font-bold text-gray-600 block'>Username*</label>
                <Field
                  className='w-full p-2 border border-gray-300 rounded mt-1'
                  style={{borderColor: props.errors.username && props.touched.username ? 'red' : ''}}
                  name='username'
                  value={props.values.username}
                  onChange={props.handleChange}
                />
                {props.errors.username && props.touched.username ?
                  <div className='text-red-700'><ErrorMessage name='username'/></div> : null}
              </div>
              {/* Username Field */}
              {/* Password Field */}
              <div>
                <label className='mt-4 text-sm font-bold text-gray-600 block'>Password*</label>
                <Field
                  className='w-full p-2 border border-gray-300 rounded mt-1'
                  style={{borderColor: props.errors.password && props.touched.password ? 'red' : ''}}
                  name='password'
                  type='Password'
                  value={props.values.password}
                  onChange={props.handleChange}
                />
                {props.errors.password && props.touched.password ?
                  <div className='text-red-700'><ErrorMessage name='password'/></div> : null}
              </div>
              {/* Password Field */}
              {/* Bottom form */}
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="text-sm text-gray-600">Need account?</div>
                </div>
                <Link to='/register' className="text-sm text-blue-500">Sign Up</Link>
              </div>
              {/* Bottom form */}
              {/* Submit */}
              <div>
                <button
                  className='w-full mt-4 py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm transition duration-300'
                  type='submit'>
                  Log In
                </button>
              </div>
              {/* Submit */}
            </Form>
          )
          }
        </Formik>
      </div>
    </div>
  );
}