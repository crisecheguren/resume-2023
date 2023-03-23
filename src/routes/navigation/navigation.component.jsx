import { useState, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import Burger from "../../components/burger/burger.component";
import Menu from "../../components/menu/menu.component";

const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
      const listener = event => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener('mousedown', listener);
      return () => {
        document.removeEventListener('mousedown', listener);
      };
    },
    [ref, handler],
    );
  };
  


const Navigation = () => {
    const [open, setOpen] = useState(false);
    const node = useRef(); 
    useOnClickOutside(node, () => setOpen(false));

    
    return (
        <div ref={node}>
            <Burger open={open} setOpen={setOpen}/>
            <Menu open={open} setOpen={setOpen}/>
            <Outlet />
        </div>
    );
    };

export default Navigation;