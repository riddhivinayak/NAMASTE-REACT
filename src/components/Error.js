
import { useRouteError } from   "react-router";
 const Error = () => {
    const err = useRouteError();
    console.log(err);
     return(
        <div>
        <h1>🤬🤬💢👿BKL KUCH GALAT HI LEKHNA HAI MC SEEDHA SEEDHA KOI NORMAL ROUTE NHI LEKH SAKTE</h1>
        <p>404 ki dhaara laga kar pelunga mc </p>
        <h2>aur janna hai na kya galti kiye hai ye le mc extra info using extra hook given by react router librabry useRouteError</h2>
        <p>{err.status + " : " + err.statusText}</p>
        <p>{err.data}</p>
        </div>
     );
 }
export default Error;