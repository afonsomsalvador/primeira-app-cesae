import { View, Text } from 'react-native'

type HeaderProps = {
    titulo: string;
    subtitulo?: string;
}

const Header = ({titulo, subtitulo = 'Subtitulo teste'}: HeaderProps) => {
  return (
    <View>
        <Text style={{fontSize: 24, fontWeight: "bold"}}>{titulo}</Text>
        {subtitulo && <Text>{subtitulo}</Text>}
    </View>
  )
}

export default Header
