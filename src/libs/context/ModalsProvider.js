import { useEffect, useMemo, useState } from "react";
import { ModalsDispatchContext, ModalsStateContext } from "./ModalsContext";
import Modals from "@/components/modal/Modals";

const ModalsProvider = ({ children }) => {
  const [openedModals, setOpenedModals] = useState([]);

  useEffect(() => {
    if (!openedModals.length) {
      document.body.style.overflow = "auto";
    } else document.body.style.overflow = "hidden";
  }, [openedModals]);

  const open = (Component, props) => {
    setOpenedModals((prevModal) => {
      return [
        ...prevModal,
        {
          Component,
          props,
          isOpen: true,
        },
      ];
    });
  };

  const close = (Component) => {
    setOpenedModals((prevModals) => {
      return prevModals.filter((v) => v.Component !== Component);
    });
  };

  const dispatch = useMemo(() => ({ open, close }), []);

  return (
    <ModalsStateContext.Provider value={openedModals}>
      <ModalsDispatchContext.Provider value={dispatch}>
        <Modals />
        {children}
      </ModalsDispatchContext.Provider>
    </ModalsStateContext.Provider>
  );
};

export default ModalsProvider;
