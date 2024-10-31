import { useState } from "react";

const useInputState = (defaultValu = null) => {
    const [value, setValu] = useState(defaultValu);

    const handalChange = e => {
        setValu(e.target.value)
    }
    return [value, handalChange]
};

export default useInputState;