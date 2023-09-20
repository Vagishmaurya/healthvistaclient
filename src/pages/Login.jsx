import loginImg from "../assets/Images/login.webp"
import Template from "../components/core/Auth/Template"

function Login() {
  return (
    <Template
      title="Welcome Back"
<<<<<<< HEAD
      description1="Connecting to doctors for today, tomorrow, and beyond."
      description2="Treatment to future-proof your treatment"
=======
      description1="Build skills for today, tomorrow, and beyond."
      description2="Education to future-proof your career."
>>>>>>> 826390d4ec65052075b1ff973f3033a5571915f9
      image={loginImg}
      formType="login"
    />
  )
}

export default Login