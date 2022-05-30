import { useState } from "react";

// TODO: useCallback
export function useInput() {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  return { value, onChange, setValue };
}
