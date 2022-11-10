
import { useGetPokemons } from "../hooks/useGetPokemons.hook";

export default () => {


    const { loading, error, data } = useGetPokemons()
    console.log(data)

    if (data) {
        return (
            <>



                <div className="body-container">
                    will this work
                </div>
            </>
        );
    }

    return (
        <>



            <div>sad</div>
        </>
    );
};
