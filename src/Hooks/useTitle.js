import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} Timothy Kroll Portfolio`;
    }, [title])
};

export default useTitle;