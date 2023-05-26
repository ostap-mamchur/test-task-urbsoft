import { useEffect } from "react";
import { useRef } from "react";

const useUpdate = (callback, deps) => {
  const previousDeps = useRef(deps);

  useEffect(() => {
    callback(previousDeps.current);
    previousDeps.current = deps;
  }, deps);
};

export { useUpdate };
