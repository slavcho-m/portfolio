import React from 'react';
import {Box, Link, Typography} from "@mui/material";
import pfp from '../../../../assets/profpfp-removebg.png'
import pfpBackground from '../../../../assets/demo_background.png'
import MinecraftSettingsBackground from "../../components/MinecraftSettingsBackground";
import RoomIcon from '@mui/icons-material/Room';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

//TODO: cleanup, separate different body components into individual components

function AboutPage() {
    return (
        <MinecraftSettingsBackground
            title="About Me"
            isBackButton={true}
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
                        gap: '128px'
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

                {/* Body content */}
                <Box
                    sx={{
                        width: '75%',
                        margin: '64px auto 0',
                    }}
                >
                    {/* First paragraph */}
                    <Box
                        display="flex"
                        sx={{
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography
                            component="h2"
                            sx={{
                                color: 'white',
                                fontSize: '24px',
                                fontFamily: 'Minecraft',
                                mb: '16px',
                            }}
                        >
                            Profile
                        </Typography>
                        <Typography
                            component="p"
                            sx={{
                                color: 'white',
                                textAlign: 'center',
                                fontFamily: 'Minecraft',
                            }}
                        >
                            An undergraduate computer science student majoring in software development and information systems. Through various projects, I have honed my communication and teamwork skills while delivering quality results. Passionate about the ever-evolving IT field, I am dedicated to continuously learning and refining my expertise to stay ahead in the industry.
                        </Typography>
                    </Box>

                    {/* Second paragraph */}
                    <Box
                        display="flex"
                        sx={{
                            mt: '64px',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography
                            component="h2"
                            sx={{
                                color: 'white',
                                fontSize: '24px',
                                fontFamily: 'Minecraft',
                                mb: '16px',
                            }}
                        >
                            Relevant finished subjects from studies
                        </Typography>
                        <Typography
                            component="p"
                            sx={{
                                color: 'white',
                                textAlign: 'center',
                                fontFamily: 'Minecraft',
                            }}
                        >
                            Structured Programming - Object Oriented Programming - Object Oriented Analysis and Design - Advanced Programming - Algorithms and Data Structures - Client side Programming - Software Requirements Analysis - Visual Programming - Internet Technologies - Operating Systems  - Web Programming (Spring) - Software Design and Architecture - Introduction to Data Science
                        </Typography>
                    </Box>

                    {/* Third paragraph */}
                    <Box
                        display="flex"
                        sx={{
                            mt: '64px',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography
                            component="h2"
                            sx={{
                                color: 'white',
                                fontSize: '24px',
                                fontFamily: 'Minecraft',
                                mb: '16px',
                            }}
                        >
                            Education
                        </Typography>
                        <Typography
                            component="p"
                            sx={{
                                color: 'white',
                                textAlign: 'center',
                                fontFamily: 'Minecraft',
                            }}
                        >
                            “St. Cyril and Methodius” University - Faculty of Computer Science and Engineering <br/>
                            Major - Software engineering and information systems <br/>
                            Oct 2022 - Present (Skopje) <br/> <br/>
                            “Josip Broz Tito” Gymnasium <br/>
                            Sep 2018 - Jun 2022 (Bitola)
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </MinecraftSettingsBackground>
    );
}

export default AboutPage;