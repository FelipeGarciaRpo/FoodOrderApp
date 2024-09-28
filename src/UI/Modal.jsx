import { useRef } from "react";
import { useEffect } from "react";
import {createPortal} from "react-dom";

export default function Modal({children, open, onclose,className = ""}) {

    const dialog = useRef();

    useEffect(()=>{
        const modal = dialog.current
        if(open) {
            modal.showModal();
        }

        return ()=> modal.close()

    },[open])
    return createPortal(
        <dialog ref={dialog} className={`modal ${className}`} onClose={onclose}>
            {children}
        </dialog>,
     document.getElementById("modal")
    );
}