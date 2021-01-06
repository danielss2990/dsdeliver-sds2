import { type } from "os";
import { useEffect } from "react";

type Props = {
    message: String;
}

function Hello({ message}: Props){

    useEffect(() => {
        console.log("componente iniciou");
    }, [])

    return (
        <h1>Componente {message}!</h1>
    )
}

export default Hello;