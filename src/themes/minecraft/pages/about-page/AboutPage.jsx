import React from 'react';
import {Box, Link, Typography} from "@mui/material";
import pfp from '../../../../assets/profpfp-removebg.png'
import pfpBackground from '../../../../assets/demo_background.png'
import MinecraftSettingsBackground from "../../components/MinecraftSettingsBackground";
import RoomIcon from '@mui/icons-material/Room';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

function AboutPage() {
    return (
        <MinecraftSettingsBackground
            title="About Me"
        >
            {/* Content Container */}
            <Box>
                {/* Header container */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: {
                            xs: 'column',
                            sm: 'row'
                        },
                        gap: '24px'
                    }}
                >
                    {/* PFP Image container */}
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '201.6px',
                            height: '240px',
                            backgroundImage: `url(${pfpBackground})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                        }}
                    >
                        <img
                            src={pfp}
                            alt="profile picture"
                            style={{
                                width: '95%',
                                height: '100%',
                                clipPath: "inset(18% 0% 2.5% 0%)",
                            }}
                        />
                    </Box>

                    {/* Header information (location/links) */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px',
                            color: 'white',
                        }}
                    >
                        <Typography
                            component="a"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'start',
                                fontFamily: 'Minecraft',
                                fontSize: '20px',
                                mb: '8px',
                            }}>
                            <RoomIcon sx={{mr: 1, fontSize: '32px'}} /> Skopje, Macedonia
                        </Typography>
                        <Link
                            href="#"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'start',
                                fontFamily: 'Minecraft',
                                fontSize: '18px',
                                color: 'inherit',
                            }}
                        >
                            <LinkedInIcon sx={{mr: 1, fontSize: '26px'}} /> /in/slavcho-mickovski/
                        </Link>
                        <Link
                            href="#"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'start',
                                fontFamily: 'Minecraft',
                                fontSize: '18px',
                                color: 'inherit'
                            }}
                        >
                            <GitHubIcon sx={{mr: 1, fontSize: '26px'}} /> /slavcho-m
                        </Link>
                        <Typography
                            component="p"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'start',
                                fontFamily: 'Minecraft',
                                fontSize: '18px',
                            }}
                        >
                            <EmailIcon sx={{mr: 1, fontSize: '26px'}} /> slavcho.mickovski@gmail.com
                        </Typography>
                    </Box>
                </Box>

            </Box>
        </MinecraftSettingsBackground>
    );
}

export default AboutPage;