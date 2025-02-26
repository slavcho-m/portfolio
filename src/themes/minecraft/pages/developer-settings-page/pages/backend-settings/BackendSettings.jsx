import React from 'react';
import DarkSettingsBackground from "../../../../../../assets/options_dark_background.png";
import SettingsBackground from "../../../../../../assets/options_background.png"
import {Box, Typography} from "@mui/material";
import MinecraftSlider from "../../../../components/MinecraftSlider";
import MinecraftButton from "../../../../components/MinecraftButton";

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
                        position: 'absolute',
                        backgroundImage: `url(${SettingsBackground})`,
                        zIndex: 1
                    },

                    '&::after': {
                        content: "''",
                        width: '100%',
                        height: '10vh',
                        backgroundImage: `url(${SettingsBackground})`,
                        position: 'absolute',
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
                        pt: '48px',
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
                            position: 'static',
                        }}
                    >
                        Frontend Settings
                    </Typography>
                </Box>
                {/* Content */}
                <Box
                    display="flex"
                    sx={{
                        mt: '5vh',
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

export default BackendSettings;