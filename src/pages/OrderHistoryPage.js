import { checkToken } from "../utilities/users-service"

export default function OrderHistoryPage (prop){
  
  const handleCheckToken = async (e) => {
    const expDate = await checkToken()
    console.log(expDate)
    }

    return(
        <div>
            <h1>OrderHistoryPage</h1>
            <button type="submit" onClick={handleCheckToken}>Check When My Login Expires</button>
        </div>
    )

}