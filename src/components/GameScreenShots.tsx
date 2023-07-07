import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
    gameId: number;
}

const GameScreenShots = ({ gameId }: Props) => {
    const { data, isLoading, error } = useScreenshots(gameId);
    return (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
            {data?.results.map(file =>
                <Image key={file.id} src={file.image} />
            )}
        </SimpleGrid>
    )
}

export default GameScreenShots
