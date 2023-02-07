import {useEffect, useState} from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, {signal : abortCont.signal})

                .then(res => {
                    if (!res.ok) {
                        setIsPending(false);
                        throw Error("An error occured while trying to fecth data")
                    }

                    return res.json()
                })

                .then(data => {
                    setData(data);
                    setIsPending(false);
                    setError(null)
                })

                .catch(error => {
                    if(error.name === "AbortError"){
                        console.log("Fetch aborted");
                    }
                              
                    setError(error.message);
                    setIsPending(false);
                })
        }, 1000);

        return () => abortCont.abort()     
    }, [url]);

    return {data, isPending, error}
}

export default useFetch;
