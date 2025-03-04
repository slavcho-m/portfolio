import React from 'react';
import DarkSettingsBackground from "../../../../../../assets/options_dark_background.png";
import SettingsBackground from "../../../../../../assets/options_background.png"
import {Box, Typography} from "@mui/material";
import MinecraftSlider from "../../../../components/MinecraftSlider";
import MinecraftButton from "../../../../components/MinecraftButton";
import MinecraftSettingsBackground from "../../../../components/MinecraftSettingsBackground";

const skillSet = [
    {text: "Springboot", level: 72.5},
    {text: "Firebase", level: 47.5},
    {text: "NestJS", level: 55.5},
    {text: "PostgreSQL", level: 52.5},
    {text: "MySQL", level: 37.5},
]

function BackendSettings() {
    return (
        // Main container
        <MinecraftSettingsBackground
            title="Backend Settings"
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

export default BackendSettings;