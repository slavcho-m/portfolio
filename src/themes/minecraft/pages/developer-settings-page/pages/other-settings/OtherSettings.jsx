import React from 'react';
import DarkSettingsBackground from "../../../../../../assets/options_dark_background.png";
import SettingsBackground from "../../../../../../assets/options_background.png"
import {Box, Typography} from "@mui/material";
import MinecraftSlider from "../../../../components/MinecraftSlider";
import MinecraftButton from "../../../../components/MinecraftButton";
import MinecraftSettingsBackground from "../../../../components/MinecraftSettingsBackground";

const skillSet = [
    {text: "Java", level: 77.5},
    {text: "C++", level: 49.5},
    {text: "C#", level: 37.5},
    {text: "Python", level: 43.5},
]

function OtherSettings() {
    return (
        // Main container
        <MinecraftSettingsBackground
            title="Other Settings"
        >
            {skillSet.map((item, i) => (
                <MinecraftSlider
                    text={item.text}
                    slider_level={item.level}
                />
            ))}

            {/* Back Button Container */}
            <Box
                display="flex"
                sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    mt: '32px'
                }}
            >
                <MinecraftButton
                    item="Back to Settings"
                    button_size="large"
                    url="/developer-settings"
                />
            </Box>
        </MinecraftSettingsBackground>
    );
}

export default OtherSettings;