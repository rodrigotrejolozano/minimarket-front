import React, { createContext, useContext, useState, ReactNode } from 'react';
import CustomToast from '../Custom/CustomToast'; 

interface ToastContextProps {
    showToast: (message: string, type: 'success' | 'error' | 'warning') => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [toastMessage, setToastMessage] = useState<string | null>(null);
    const [toastType, setToastType] = useState<'success' | 'error' | 'warning'>('success');

    const showToast = (message: string, type: 'success' | 'error' | 'warning') => {
        setToastMessage(message);
        setToastType(type);

        setTimeout(() => {
            setToastMessage(null); 
        }, 3000);
    };

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            {toastMessage && <CustomToast message={toastMessage} type={toastType} />}
        </ToastContext.Provider>
    );
};

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast debe ser usado dentro de un ToastProvider');
    }
    return context;
};
