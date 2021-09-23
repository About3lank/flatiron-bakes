function CakeDetail({cake}) {
    return (
        <>
            <h1>{cake.flavor} Cake</h1>
            <img src={cake.image} alt={`${cake.flavor} Cake`}/>
            <p>{cake.size} cake -- <em>${cake.price}</em></p>
            <p>{cake.description}</p>


            
        </>  
    )
}

export default CakeDetail;