import React from 'react';
import DarkSettingsBackground from "../../../../../../assets/options_dark_background.png";
import SettingsBackground from "../../../../../../assets/options_background.png"
import {Box, Typography} from "@mui/material";
import MinecraftSlider from "../../../../components/MinecraftSlider";
import MinecraftButton from "../../../../components/MinecraftButton";
import MinecraftSettingsBackground from "../../../../components/MinecraftSettingsBackground";

const skillSet = [
    {text: "HTML", level: 100},
    {text: "CSS", level: 100},
    {text: "MaterialUI", level: 77.5},
    {text: "Javascript", level: 87.5},
    {text: "Typescript", level: 67.5},
    {text: "React", level: 92.5},
    {text: "NextJS", level: 47.5},

]

function FrontendSettings() {
    return (
        // Main container
        <MinecraftSettingsBackground
            title="Frontend Settings"
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

export default FrontendSettings;

