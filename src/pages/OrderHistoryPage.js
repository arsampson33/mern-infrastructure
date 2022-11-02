export default function OrderHistoryPage (prop){
  
  const handleCheckToken = async (e) => {
        alert('clicked')
    }

    return(
        <div>
            <h1>OrderHistoryPage</h1>
            <button type="submit" onClick={handleCheckToken}>Check When My Login Expires</button>
        </div>
    )

}