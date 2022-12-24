import { Formik, Field, Form, ErrorMessage } from 'formik'
import { Modal, ModalHeader, ModalBody, FormGroup, Label, Button } from 'reactstrap'
import { setCurrentUser, selectCurrentUser } from './userSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
// import profileMale from '../../app/assets/img/profile-male.png'
// import profileFemale from '../../app/assets/img/profile-female.png'
// import validateUserLoginForm from '../../utils/validateUserLoginForm'

const UserLoginForm = () => {
    const [loginModalOpen, setLoginModalOpen] = useState(false)

    const currentUser = useSelector(selectCurrentUser)
    
    const dispatch = useDispatch()
    
    const handleLogin = (values) => {
        const currentUser = {
            id: Date.now(),
            avatar: '#',
            username: values.username,
            password: values.password,
        }
        dispatch(setCurrentUser(currentUser))
        setLoginModalOpen(false)
    }
    return(
        <>
            <span className='navbar-text ml-auto'>
                {currentUser ? (
                    <div style={{ width: '2rem', height: '2rem', marginLeft: '1rem' }}>
                        <img src={currentUser.avatar} alt={'user'} style={{ width: '100%', height: '100%' }} />
                    </div>
                ) : (
                    <Button outline onClick={() => setLoginModalOpen(true)} style={{ color: 'white', border: 'none' }}>Login</Button>
                )}
            </span>
            <Modal isOpen={loginModalOpen} >
                <ModalHeader toggle={()=>setLoginModalOpen(false)}>
                </ModalHeader>
                <ModalBody>
                    <Formik initialValues={{ username:'', password:'' }} onSubmit={handleLogin} /*validate={validateUserLoginForm}*/ >
                        <Form>
                            <FormGroup>
                                <Label htmlFor='username'>
                                    Username:
                                </Label>
                                <Field
                                    id='username'
                                    className='form-control'
                                    name='username'
                                    placeholder='Username'
                                />
                                {/* <ErrorMessage name='username'>
                                    {(msg)=><p className='text-danger'>{msg}</p>}
                                </ErrorMessage> */}
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='password'>
                                    Password:
                                </Label>
                                <Field
                                    id='password'
                                    className='form-control'
                                    name='password'
                                    placeholder='Password'
                                />
                                {/* <ErrorMessage name='password'>
                                    {(msg)=><p className='text-danger'>{msg}</p>}
                                </ErrorMessage> */}
                            </FormGroup>
                            <Button type='submit' color='primary'>Login</Button>
                        </Form>
                    </Formik>
                </ModalBody>
            </Modal>
        </>
    )
    
}

export default UserLoginForm