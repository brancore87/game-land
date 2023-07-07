import { HStack, Image } from '@chakra-ui/react'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <HStack padding="10px">
            <Link to="/">
                <Image src={logo} boxSize='50px' objectFit="cover" />
            </Link>
            <SearchInput />
            <ColorModeSwitch />
        </HStack>
    )
}

export default NavBar
