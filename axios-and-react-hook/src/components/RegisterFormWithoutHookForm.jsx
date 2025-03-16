import { useState } from "react";

export default function RegisterFormWithoutHookForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!firstName) {
      errors.name = "First name is required";
    }

    if (!lastName) {
      errors.surname = "Last name is required";
    }

    if (!email) {
      errors.email = "Email is required";
    }

    if (password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      alert(JSON.stringify({ firstName, lastName, email, password }));
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="registration-form">
      <h2 className="form-title">Без использования react-hook-form</h2>
      <div className="form-field">
        <label>First name</label>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className={errors.name ? "input-error" : ""}
        />
        {errors.name && <p className="error-message">{errors.name}</p>}
      </div>
      <div className="form-field">
        <label>Last name</label>
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className={errors.surname ? "input-error" : ""}
        />
        {errors.surname && <p className="error-message">{errors.surname}</p>}
      </div>
      <div className="form-field">
        <label>Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={errors.email ? "input-error" : ""}
        />
        {errors.email && <p className="error-message">{errors.email}</p>}
      </div>
      <div className="form-field">
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={errors.password ? "input-error" : ""}
        />
        {errors.password && <p className="error-message">{errors.password}</p>}
      </div>
      <button type="submit" className="submit-button">
        Register
      </button>
    </form>
  );
}
