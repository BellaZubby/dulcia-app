import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
    username:Yup.string()
    .required('Username is required')
    .min(3, '')
    .max(25, ''),
    
    email:Yup.string()
    .required('Email is required')
    .email('Email is invalid')
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, ''),
    
    password: Yup.string()
    .required('Password is required')
    .min(6, '')
    .matches(/[a-z]/,
        ''
    )
    .matches(/[A-Z]/, '')
    .matches(/[0-9]/, '')
    .matches(/[@#$%^&*/]/, ''),
    
    
    confirmPassword: Yup.string()
    .required('')
    .oneOf([Yup.ref('password')], 'Password must match')
});
