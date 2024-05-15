import { useRef } from "react";

export default function useDialog() {
  const ref = useRef();

  const toggleDialog = () => {
    if (!ref.current) {
      return;
    }

    ref.current.hasAttribute("open")
      ? ref.current.close()
      : ref.current.showModal();
  };

  return {
    ref,
    toggleDialog,
  };
}
