import { useEffect, useState } from 'react'
import './Signup.css'
import {useNavigate} from "react-router-dom"
import { server_url } from '../../serverUrl'
import Navbar from '../Navbar'

function Signup() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState({})
  const [passwordStrength, setPasswordStrength] = useState(0)
  const [loading, setLoading] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const calculatePasswordStrength = (password) => {
    let strength = 0
    if (password.length >= 8) strength++
    if (password.length >= 12) strength++
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++
    if (/\d/.test(password)) strength++
    if (/[^a-zA-Z0-9]/.test(password)) strength++
    return strength
  }

  const getStrengthLabel = (strength) => {
    if (strength === 0) return 'Very Weak'
    if (strength === 1) return 'Weak'
    if (strength === 2) return 'Fair'
    if (strength === 3) return 'Good'
    if (strength === 4) return 'Strong'
    return 'Very Strong'
  }

  const getStrengthColor = (strength) => {
    if (strength <= 1) return '#ff4444'
    if (strength === 2) return '#ffaa00'
    if (strength === 3) return '#88cc00'
    return '#00cc44'
  }

  const validate = () => {
    const newErrors = {}

    if (!isLogin && !formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (!isLogin && formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/dashboard");
    }
  }, [navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setLoading(true)
    setSubmitError('')
    await handleSubmitAsync()
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
    if (name === 'password') {
      setPasswordStrength(calculatePasswordStrength(value))
    }
  }

  const handleSubmitAsync = async () => {
    try {
      const endpoint = isLogin ? '/login' : '/signup';
      const body = isLogin 
        ? { email: formData.email, password: formData.password }
        : { name: formData.name, email: formData.email, password: formData.password };

      const response = await fetch(`${server_url}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || (isLogin ? 'Login failed' : 'Signup failed'))
      }

      console.log(`${isLogin ? 'Login' : 'Signup'} successful:`, data)
      if (data.token) {
        localStorage.setItem("token", data.token);
      }
      navigate("/dashboard");
    } catch (error) {
      if (error.message === 'User already exists') {
        setSubmitError('An account with this email already exists. Please log in below.');
        setIsLogin(true);
      } else {
        setSubmitError(error.message);
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Navbar />
      <div className="signup-page">
        <div className="signup-card">
          <div className="signup-card__hero">
            <p className="signup-subtitle">{isLogin ? 'Welcome back' : 'Create your Zerodha account'}</p>
            <h1 className="signup-title">{isLogin ? 'Log in to your account' : 'Sign up and start trading'}</h1>
          </div>

          {submitError && (
            <div className="signup-alert">
              {submitError}
            </div>
          )}

          <form className="signup-form" onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="signup-form-group">
                <label htmlFor="name" className="signup-label">Full Name</label>
                <input
                  id="name"
                  className="signup-input"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={loading}
                  placeholder="John Doe"
                />
                {errors.name && <span className="signup-error">{errors.name}</span>}
              </div>
            )}

            <div className="signup-form-group">
              <label htmlFor="email" className="signup-label">Email address</label>
              <input
                id="email"
                className="signup-input"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={loading}
                placeholder="you@example.com"
              />
              {errors.email && <span className="signup-error">{errors.email}</span>}
            </div>

            <div className="signup-form-group">
              <label htmlFor="password" className="signup-label">Password</label>
              <input
                id="password"
                className="signup-input"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                disabled={loading}
                placeholder={isLogin ? "Enter your password" : "Create a strong password"}
              />
              {!isLogin && formData.password && (
                <div className="password-strength">
                  <div className="password-strength__bar">
                    <div
                      className="password-strength__fill"
                      style={{ width: `${passwordStrength * 25}%`, backgroundColor: getStrengthColor(passwordStrength) }}
                    />
                  </div>
                  <span className="password-strength__label">
                    {getStrengthLabel(passwordStrength)}
                  </span>
                </div>
              )}
              {errors.password && <span className="signup-error">{errors.password}</span>}
            </div>

            <button className="signup-button" type="submit" disabled={loading}>
              {loading ? (isLogin ? 'Logging In...' : 'Signing Up...') : (isLogin ? 'Log In' : 'Create Account')}
            </button>
          </form>

          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <p className="text-muted" style={{ fontSize: '14px' }}>
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button 
                type="button"
                style={{ background: 'none', border: 'none', color: '#387ed1', cursor: 'pointer', textDecoration: 'underline', padding: 0, font: 'inherit' }}
                onClick={() => {
                  setIsLogin(!isLogin);
                  setSubmitError('');
                  setErrors({});
                }}
              >
                {isLogin ? 'Sign up' : 'Log in'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup