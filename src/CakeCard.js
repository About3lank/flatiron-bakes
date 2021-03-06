// import cakes from "./Cakes";
// import Cake from "./Cake"


function CakeCard({cake, setSelectedCake}){
    return (
        <div className="cake" onClick={() => setSelectedCake(cake)}>
            <h2>{cake.flavor} Cake</h2>
            <p>{cake.size} cake -- <em>${cake.price}</em></p>
        </div>
    );
}
export default CakeCard;