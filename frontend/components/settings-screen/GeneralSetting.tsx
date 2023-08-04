import { View } from "react-native"
import SettingBlockTitle from "../UI/SettingBlockTitle"
import SettingBlockItem from "../UI/SettingBlockItem"

export default () => {
    return (
        <View>
            <SettingBlockTitle>
                General Settings
            </SettingBlockTitle>
            <SettingBlockItem icon="moon-outline" text="Dark mode"/>
        </View>
    )
}