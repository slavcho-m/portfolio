import React from 'react';
import {Box, Typography} from "@mui/material";
import imageBG from '../../../assets/demo_background.png';

function MinecraftProjectButton({ title, short_description, tech_stack, project_image, isSelected, onClick }) {
    return (
        <Box
            onClick={onClick}
            sx={{
                display: "flex",
                width: "45%",
                height: "15vh",
                alignItems: "center",
                justifyContent: "start",
                gap: "16px",
                position: 'relative',
                cursor: "pointer",
                border: isSelected ? '2px solid grey' : '2px solid transparent',
            }}
        >
            {/* Project Image container */}
            <Box
                sx={{
                    width: "15%",
                    height: "100%",
                    backgroundImage: `url(${imageBG})`,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <img
                    src={ project_image }
                    alt="poject"
                    style={{ width: "80%", height: "80%" }}
                />
            </Box>

            {/* Side text container */}
            <Box
                sx={{
                    color: 'white',
                    display: 'flex',
                    flexDirection: "column",
                    gap: "2px",
                }}
            >
                {/* Project title */}
                <Typography
                    component="h3"
                    sx={{
                        fontSize: '24px',
                        fontFamily: 'Minecraft'
                    }}
                >{ title }</Typography>
                {/* Short project description */}
                <Typography
                    component="p"
                    sx={{
                        fontSize: '12px',
                        fontFamily: 'Minecraft',
                        color: '#919191'
                    }}
                >{ short_description }</Typography>
                {/* Short list of main stack */}
                <Typography
                    component="p"
                    sx={{
                        fontSize: '12px',
                        fontFamily: 'Minecraft',
                        color: '#919191'
                    }}
                >{ tech_stack }</Typography>
            </Box>
        </Box>
    );
}

export default MinecraftProjectButton;