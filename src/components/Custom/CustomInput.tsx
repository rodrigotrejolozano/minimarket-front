import { useState } from "react";

type InputProps = {
    label: string;
    type?: 'text' | 'password';
    nameId: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    disabled?: boolean;
    className?: string;
    showPassword?: boolean;
};

export const CustomInput: React.FC<InputProps> = ({ 
    label,
    type = 'text',
    nameId,
    placeholder,
    value,
    onChange,
    error,
    disabled,
    className,
    showPassword = false,
    ...rest

}) => {
    const [inputType, setInputType] = useState(type);

    const handleTogglePassword = () => {
        setInputType(inputType === 'password' ? 'text' : 'password');
    };

    return (
        <div className={`flex flex-col  max-w-[100%] 
        ${error ? "mb-4" : "mb-1"}  `}>
            <div className="relative flex h-fit items-center">
                <label
                    className={`
                    font-bold absolute top-0 left-2 text-[12px] mb-1
                    
                    `}
                    htmlFor={nameId}
                >
                    {label}
                </label>
                <input
                    id={nameId}
                    name={nameId}
                    type={inputType}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                    className={`px-2 py-2 w-full h-10 pt-3 border-2 border-gray-400 rounded-lg 
                        focus:border-gray-500 outline-none text-sm 
                        ${error ? 'border-red-500' : ''}
                        ${className || ''}
                        `}
                    {...rest}
                />
                {showPassword && (
                    <button
                        type="button"
                        onClick={handleTogglePassword}
                        className="absolute z-3 w-[64px] border rounded-lg border-black font-bold right-2 top-2"
                    >
                        {inputType === 'password' ? 'Mostrar' : 'Ocultar'}
                    </button>
                )}
            </div>
            {error && <span className="text-red-500 text-[11px] ml-1">{error}</span>}
        </div>
    );
};
