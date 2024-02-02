import { useState } from 'react';

const useForm = args => {
  const [formData, setFormData] = useState({});

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    args?.onSubmit && args.onSubmit(e);
  };
  return {
    formData,
    handleChange,
    handleSubmit,
  };
};

export { useForm };
