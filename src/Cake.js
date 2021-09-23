function Cake({flavor, size='6" inch cake', price, image}) {
    return (
        <h1>{cake.flavor} Cake</h1>
        <p>Size: {cake.size}</p>
        <p>${cake.price}</p>
        <img src={cake.image} alt={`${cake.flavor} Cake`}/>

    )

};

export default Cake;