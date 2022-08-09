import { forwardRef, useImperativeHandle } from 'react';
import useToast from '../../hooks/useToast';
import './Toast.css';

const colorType = {
    success: { color: '#009d71', icon: 'bx bx-check-circle toast__icon' },
    information: { color: '#2196f3', icon: 'bx bx-info-circle toast__icon' },
    error: { color: '#ff0000', icon: 'bx bx-x-circle toast__icon' },
};

const Toast = ({ title, message, type = 'success', seconds = 5 }, ref) => {
    const { toast, progressBar, openToast, closeToast } = useToast(seconds);

    const toastAfter = {
        position: 'absolute',
        bottom: 0,
        right: 0,
        height: '100%',
        width: '100%',
        backgroundColor: colorType[type].color,
    };

    useImperativeHandle(ref, () => {
        return { openToast };
    });

    return (
        <div
            className={toast ? 'toast toast--active' : 'toast'}
            style={{ borderLeft: `5px solid ${colorType[type].color}` }}
        >
            <i
                className={colorType[type].icon}
                style={{ color: colorType[type].color }}
            ></i>
            <div className="toast-content">
                <h2
                    className="text__title"
                    style={{ color: colorType[type].color }}
                >
                    {title}
                </h2>
                <p className="text__message">{message}</p>
            </div>
            <div className="toast__bar">
                <div
                    style={
                        progressBar
                            ? {
                                  ...toastAfter,
                                  animation: `progress ${seconds}s linear forwards`,
                              }
                            : toastAfter
                    }
                ></div>
            </div>
            <span className="toast__button" onClick={closeToast}>
                &#10006;
            </span>
        </div>
    );
};

export default forwardRef(Toast);
