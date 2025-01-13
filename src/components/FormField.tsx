import React from 'react';
import { Label, Input } from './style';

interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
}

const FormField: React.FC<FormFieldProps> = ({ id, label, type = 'text' }) => (
  <div>
    <Label htmlFor={id}>{label}</Label>
    <Input id={id} type={type} />
  </div>
);

export default FormField;