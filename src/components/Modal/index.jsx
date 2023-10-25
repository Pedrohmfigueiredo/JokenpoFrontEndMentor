import style from "./style.module.css"
import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContexts"

function Modal() {
  const { closeModal } = useContext(ModalContext);

  return (
    <div className={style.modal}>
        <section className={style.modal_wrapper}>
            <header>
                <h2>Rules</h2>
                <img className={style.btnClose} src="/public/images/icon-close.svg" alt="close" onClick={() => closeModal()}/>
             </header>
            <img src='/public/images/image-rules.svg' alt='rules'/>
        </section>
    </div>
  )
}

export default Modal
