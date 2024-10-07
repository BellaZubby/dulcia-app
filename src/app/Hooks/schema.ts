import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
    username:Yup.string()
    .required('Username is required')
    .min(3, 'Username must be at least 3 characters')
    .max(25, 'Username must not exceed 25 characters'),
    
    email:Yup.string()
    .required('Email is required')
    .email('Email is invalid')
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please enter a valid email address'),
    
    password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .matches(/[a-z]/,
        'Password must contain at least one lowercase letter'
    )
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(/[@#$%^&*/]/, 'password must contain at least on of these special characters; @#$%^&*/'),
    
    
    confirmPassword: Yup.string()
    .required('Confirm Password is required')
    .oneOf([Yup.ref('password')], 'Password must match')
})