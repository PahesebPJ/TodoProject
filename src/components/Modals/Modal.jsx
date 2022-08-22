const Modal = ({
  state,
  changeState,
  containerStyle,
  closeButton,
  children,
}) => {
  return (
    <>
      {state && (
        <div style={containerStyle ? containerStyle : {}}>
          {children}
          {closeButton ? (
            <button onClick={() => changeState(!state)}> Close</button>
          ) : (
            <></>
          )}
        </div>
      )}
    </>
  );
};

export default Modal;
