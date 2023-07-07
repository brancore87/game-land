import useGenres from "./useGenres";
import ms from 'ms';


const useGenre = (id?: number) => {
    const { data: genres } = useGenres();
    return genres?.results.find(g => g.id === id)
}

export default useGenre;