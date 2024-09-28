import MealItem from "./MealItem";
import useHttp from "../utils/useHttp";
import Error from "./Error";

const requestConfig = {};

export default function Meals(){
    const {
        data: loadedMeals, 
        isLoading, 
        error
    } = useHttp("http://localhost:3000/meals", requestConfig, []);

    if(isLoading){
        return <p className="center">Loading meals...</p>
    }
    if(error) {
        return <Error title = "Faile to fetch meals" message = {error}/>
    }
    return (

        <ul id="meals">
            {loadedMeals.map(meal=> (
                <MealItem key = {meal.id} meal={meal}/>
                ))}
        </ul>
    )
}