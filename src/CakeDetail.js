function CakeDetail({cake}) {
    return (
        <>
            <h1>{cake.flavor} Cake</h1>
            <img src={cake.image} alt={`${cake.flavor} Cake`}/>
            <p>{cake.size} cake -- ${cake.price}</p>
            <p>{cake.description}</p>


            
        </>  
    )
}

export default CakeDetail;