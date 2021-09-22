import cakes from "./Cakes";
import Cake from "./Cake";

function CakeCard({flavor, price, size, image}){
    return (
        <div className="cake">
            <h1>{flavor} Cake</h1>
            <p>Size: {size}</p>
            <p>${price}</p>
            <img src={image} alt="{`${flavor} Cake`}"/>
        </div>
    );
}
export default CakeCard;