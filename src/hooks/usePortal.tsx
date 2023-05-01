import { useState, useCallback, useEffect } from "react";
import ReactDOM from "react-dom";

type Portal = ({
  children,
}: {
  children: React.ReactNode;
}) => React.ReactPortal;

type RemovePortal = (el: Element | DocumentFragment) => boolean;

const usePortal = (el: Element | DocumentFragment): [Portal, RemovePortal] => {
  const render: Portal = ({ children }) => ReactDOM.createPortal(children, el);
  const remove: RemovePortal = (el) => ReactDOM.unmountComponentAtNode(el);

  const [portal, setPortal] = useState({
    remove,
    render,
  });

  const createPortal = useCallback((el: Element | DocumentFragment) => {
    return { render, remove };
  }, []);

  useEffect(() => {
    if (el) portal.remove(el);

    const newPortal = createPortal(el);
    setPortal(newPortal);

    return () => {
      newPortal.remove(el);
    };
  }, [el]);

  return [portal.render, portal.remove];
};

export default usePortal;
