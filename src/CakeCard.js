import cakes from "./Cakes";
import Cake from "./Cake";

function CakeCard(){
    return (
        <>
            {cakes.map(cake => <Cake key={cake.flavor} flavor={cake.flavor} size={cake.size} price={cake.price} image={cake.image}/>)}
        </>
    );
}
export default CakeCard;