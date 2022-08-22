import { useEffect, useState } from 'react';

const useToast = (seconds) => {
    const [toast, setToast] = useState(false);
    const [progressBar, setProgressBar] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setToast(false);
        }, seconds * 1000);
        return () => clearTimeout(timer);
    }, [toast]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setProgressBar(false);
        }, seconds * 1000 + 300);
        return () => clearTimeout(timer);
    }, [progressBar]);

    const openToast = () => {
        setToast(true);
        setProgressBar(true);
    };

    const closeToast = () => {
        setToast(false);
        setTimeout(() => {
            setProgressBar(false);
        }, 500);
    };

    return { toast, progressBar, openToast, closeToast };
};

export default useToast;
