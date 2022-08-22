//Components
import Modal from "../Modal";

//Styles
import customStyles from "../../../config/objectStyles";
import "./InputModal.css";

function InputModal({ title, inputs }) {
  return (
    <Modal containerStyle={customStyles.Modals.updateModal} state={true}>
      <div className="input-modal-header">
        <h2>{title}</h2>
      </div>
      <section className="input-container">
        {inputs.map((input) => {
          return (
            <>
              <label htmlFor={input.id} key={input.id}>
                {input.label}
              </label>
              <input
                type={input.type}
                autoComplete="off"
                id={input.id}
                placeholder={input.placeholder}
                key={input.name}
              />
            </>
          );
        })}
      </section>
      <div className="input-footer">
        <button className="input-footer-cancel-button">Cancel</button>
        <button className="input-footer-save-button">Save</button>
      </div>
    </Modal>
  );
}

export default InputModal;
