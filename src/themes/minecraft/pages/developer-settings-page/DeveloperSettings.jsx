import React from 'react';
import {Box, Typography} from "@mui/material";
import SettingsBackground from '../../../../assets/options_background.png'
import MinecraftButton from "../../components/MinecraftButton";

const btnContents = [
    {text: "Frontend Settings", url: "frontend-settings"},
    {text: "Backend Settings", url: "backend-settings"},
    {text: "Other Settings", url: "other-settings"}]

function DeveloperSettings(props) {
    return (
        <Box
            sx={{
                width: '100%',
                height: '100vh',
                backgroundImage: `url(${SettingsBackground})`,
                position: 'relative',
            }}
        >
            {/* Content */}
            <Box>
                {/* Title Box */}
                <Box
                    sx={{
                        width: '100%',
                        textAlign: 'center',
                        pt: '48px',
                    }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            color: '#fff',
                            fontFamily: 'minecraft',
                            fontSize: '20px',
                            textShadow: '2px 2px 2px rgba(0,0,0,0.75)',
                        }}
                    >
                        Developer's Settings
                    </Typography>
                </Box>
                {/* Buttons Box */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mt: '104px',
                    }}
                >
                    {btnContents.map((item, i) => (
                        <MinecraftButton
                            i={i}
                            item={item.text}
                            url={item.url}
                            button_size="large"
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
                        url="/"
                    />
                </Box>
            </Box>
        </Box>
    );
}

export default DeveloperSettings;