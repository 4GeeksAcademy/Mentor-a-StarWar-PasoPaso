import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import Personajes from "./Personajes.jsx";
import Planetas from "./Planetas.jsx";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <div className="text-center mt-5">
      <div>
        <Personajes />
      </div>
      <div>
        <Planetas/>
      </div>
    </div>
  );
};
