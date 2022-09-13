import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(4, 'Too Short!')
    .max(40, 'Too Long!')
    .required('Firstname is Required'),
  lastName: Yup.string()
    .min(4, 'Too Short!')
    .max(40, 'Too Long!')
    .required('Lastname is Required'),
  email: Yup.string()
  .email('Invalid email')
  .required('Email Address is Required'),
  password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
  confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
});

function Formthree() {
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded shadow-lg ring-2 ring-purple-800/50 lg:max-w-md">
        <h1 className="text-3xl font-semibold text-center text-purple-700">LOGO</h1>
        <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password:'',
        confirmPassword:''

      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
        alert("Submitted Successfully");
      }}
    >{({ errors, touched }) => (
        <Form className="mt-6">
        <div>
            <Field type="text" name="firstName" 
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Firstname" />
              {errors.firstName && touched.firstName ? (
            <span className="inline-flex text-sm text-red-600">{errors.firstName}</span>
          ) : null}
          </div>
          <div>
            <Field type="text" name="lastName"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Lastname" />
            {errors.lastName && touched.lastName ? (
            <span className="inline-flex text-sm text-red-600">{errors.lastName}</span>
          ) : null}
          </div>
          <div>
            <Field type="email" name="email" 
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Email Address" />
            {errors.email && touched.email ? (
            <span className="inline-flex text-sm text-red-600">{errors.email}</span>
          ) : null}
          </div>
          <div>
            <Field type="password" name="password" 
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Password" />
            {errors.password && touched.password ? (
            <span className="inline-flex text-sm text-red-600">{errors.password}</span>
          ) : null}
          </div>
          <div>
            <Field type="password" name="confirmPassword" 
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="confirmPassword" />
            {errors.confirmPassword && touched.confirmPassword ? (
            <span className="inline-flex text-sm text-red-600">{errors.confirmPassword}</span>
          ) : null}
          </div>
          
          <div className="mt-6">
            <button
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
              Submit
            </button>
          </div>
        </Form>
         )}
        </Formik>

      </div>
      </div>
  )
}

export default Formthree;