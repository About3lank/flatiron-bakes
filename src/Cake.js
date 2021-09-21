function Cake({flavor, size='6" inch cake', price, image}) {
    return (
        <div className="cake">
            <h1>{flavor} Cake</h1>
            <p>Size: {size}</p>
            <p>${price}</p>
            <img src={image} alt="{`${flavor} Cake`}"/>
        </div>
    )

};

export default Cake;