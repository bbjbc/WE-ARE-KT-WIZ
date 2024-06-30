interface InputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

const Input: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <div className="mb-2 flex items-center space-x-2 py-1">
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}
      <input
        className="rounded-md border border-gray-300 px-3 py-1 text-sm transition duration-500 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200"
        {...props}
      />
    </div>
  );
};

export default Input;
