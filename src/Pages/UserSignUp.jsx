import { NavLink } from "react-router-dom"
import { useState } from "react"


export default function UserSignUp() {

    const [inputEye, setInputEye] = useState(false)
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState({})
    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    function validate() {
        const newErrors = {}

        if (!formData.email) {
            newErrors.email = "Email is required!!"
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Enter a valid email."
        }

        if (!formData.password) {
            newErrors.password = "Password is required!!"
        } else if (formData.password.length < 8) {
            newErrors.password = "Password length must be at least 8 characters"
        }

        return newErrors
    }
    function handleSubmit(e) {
        e.preventDefault()

        const validationErrors = validate()
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
        } else {
            setErrors({})
            console.log("Form submitted successfully!", formData)
        }

    }
    return (
        <>
            <div className="sign-in-container">
                <section className="user-sign-in">
                    <NavLink to="/" className="header-title">
                        <h1><span>Iran</span>Recipe</h1>
                        <img src="../../public/header-title-svg.svg.svg" alt="" />
                    </NavLink>
                    <i className="fa-solid fa-arrow-right-to-bracket"></i>
                    <h3>Sign in with email</h3>
                    <p>Sign in to discover new recipes, save your favorites, and cook smarter every day.</p>
                    <form className="form-inputs" onSubmit={handleSubmit}>
                        <div className="email-input-box">
                            <div className={`user-email input-box ${errors.email ? "invalid-value" : Object.keys(errors).length > 0 ? "valid-value" : ""}`}>
                                <i className="fa-solid fa-envelope"></i>
                                <input
                                    type="text"
                                    id="user-email"
                                    className={`user-input `}
                                    placeholder="Enter your email..."
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            {errors.email && <p className="invalid-text">{errors.email}</p>}
                        </div>
                        <div className="password-input-box">
                            <div className={`user-password input-box ${errors.password ? "invalid-value" : Object.keys(errors).length > 0 ? "valid-value" : ""}`}>
                                <i className="fa-solid fa-lock"></i>
                                <input
                                    type={inputEye ? "password" : "text"} id="user-password"
                                    className={`user-input `}
                                    placeholder="Enter your password..."
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                <i onClick={() => setInputEye(eye => !eye)} className={`fa-solid fa-eye${inputEye ? "-slash" : ""}`}></i>
                            </div>
                            {errors.password && <p className="invalid-text">{errors.password}</p>}
                        </div>
                        <NavLink className="password-forget">Forget password?</NavLink>
                        <button className="sign-in-btn">Get Started</button>
                        <span>Or sign in with</span>
                    </form>
                    <div className="sign-in-platforms">
                        <NavLink><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                            <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                        </svg></NavLink>
                        <NavLink><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                            <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="1" stop-color="#007ad9"></stop></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path>
                        </svg></NavLink>
                        <NavLink><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                            <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"></path>
                        </svg></NavLink>
                    </div>
                </section>
            </div>
        </>
    )
}