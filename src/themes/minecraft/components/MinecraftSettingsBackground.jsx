import React from 'react';
import {Box, Typography} from "@mui/material";
import DarkSettingsBackground from "../../../assets/options_dark_background.png";
import SettingsBackground from "../../../assets/options_background.png";
import MinecraftButton from "./MinecraftButton";

function MinecraftSettingsBackground({
                                         title,
                                         flexDirection="column",
                                         alignItems="center",
                                         justifyContent="center",
                                         gap="8px",
                                         isBackButton=false,
                                         children
}) {


    return (
        <Box
            sx={{
                width: '100%',
                minHeight: '100vh',
                backgroundImage: `url(${DarkSettingsBackground})`,
                position: 'relative',
            }}
        >
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
                        {title}
                    </Typography>
                </Box>

                {/* Optional Back button */}
                {isBackButton && <Box
                    sx={{
                        position: 'fixed',
                        bottom: 10,
                        right: '50%',
                        transform: 'translateX(50%)',
                        zIndex: 2,
                    }}
                >
                    <MinecraftButton
                        button_size="large"
                        url="/"
                        item="Back to Home"
                    />
                </Box>}
                {/* Content */}
                <Box
                    display="flex"
                    sx={{
                        p: '12vh 0',
                        flexDirection: `${flexDirection}`,
                        alignItems: `${alignItems}`,
                        justifyContent: `${justifyContent}`,
                        gap: `${gap}`,
                    }}
                >
                    { children }
                </Box>
            </Box>
        </Box>
    );
}

export default MinecraftSettingsBackground;