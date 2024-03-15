import { useMemo, useState } from "react";
import { ModalsDispatchContext, ModalsStateContext } from "./ModalsContext";
import Modals from "@/components/common/Modals";

const ModalsProvider = ({ children }) => {
  const [openedModals, setOpenedModals] = useState([]);

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
