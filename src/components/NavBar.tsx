import { HStack, Image } from '@chakra-ui/react'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'
import logo from '../assets/logo.png'


const NavBar = () => {
    return (
        <HStack padding="10px">
            <Image src={logo} boxSize='50px' />
            <SearchInput />
            <ColorModeSwitch />
        </HStack>
    )
}

export default NavBar
