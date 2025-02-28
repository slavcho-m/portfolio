import React from 'react';
import DarkSettingsBackground from "../../../../../../assets/options_dark_background.png";
import SettingsBackground from "../../../../../../assets/options_background.png"
import {Box, Typography} from "@mui/material";
import MinecraftSlider from "../../../../components/MinecraftSlider";
import MinecraftButton from "../../../../components/MinecraftButton";

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
        <Box
            sx={{
                width: '100%',
                height: '100vh',
                backgroundImage: `url(${DarkSettingsBackground})`,
                position: 'relative',
            }}
        >
            {/* Container Outside Styles */}
            <Box
                sx={{
                    position: 'relative',
                    height: '100%',
                    '&::before': {
                        content: "''",
                        width: '100%',
                        height: '10vh',
                        position: 'fixed',
                        top: 0,
                        backgroundImage: `url(${SettingsBackground})`,
                        zIndex: 1
                    },

                    '&::after': {
                        content: "''",
                        width: '100%',
                        height: '10vh',
                        backgroundImage: `url(${SettingsBackground})`,
                        position: 'fixed',
                        bottom: '0',
                        left: '0',
                        right: '0',
                    }
                }}
            >
                {/* Title */}
                <Box
                    sx={{
                        width: '100%',
                        textAlign: 'center',
                        position: 'relative',
                        zIndex: 2
                    }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            color: '#fff',
                            fontFamily: 'minecraft',
                            fontSize: '20px',
                            textShadow: '2px 2px 2px rgba(0,0,0,0.75)',
                            position: 'fixed',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            top: '4%',
                        }}
                    >
                        Frontend Settings
                    </Typography>
                </Box>
                {/* Content */}
                <Box
                    display="flex"
                    sx={{
                        pt: '12vh',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                    }}
                >
                    {skillSet.map((item, i) => (
                        <MinecraftSlider
                            text={item.text}
                            slider_level={item.level}
                        />
                    ))}
                </Box>

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
            </Box>
        </Box>
    );
}

export default FrontendSettings;