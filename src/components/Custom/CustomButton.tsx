type CustomButtonProps = {
   label: string;
   icon?: React.ReactNode;
    onClick: () => void;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    disabled?: boolean;
    loading?: boolean;
    
};

export const CustomButton: React.FC<CustomButtonProps> = ({
    label,
    icon,
    onClick,
    type = 'button',
    className,
    disabled,
    loading,
    ...rest
}) => {
    if (type !== 'button' && type !== 'submit') {
        type = 'button';
    }

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            className={`
            bg-primary rounded-lg font-bold   w-[200px] h-[40px] 
            hover:bg-blue-700 transition-all text-sm flex gap-2 items-center justify-center
              ${loading ? '' : ''}
              ${className || ''} `
            }
            {...rest}
        >
            {icon && loading? (
                <>
                </>
            ):
                icon
            }
            {loading ? 'Cargando...' : label}

        </button>
    );
};
