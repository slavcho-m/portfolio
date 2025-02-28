import React from 'react';
import {Box, Typography} from "@mui/material";
import sliderBackground from "../../../assets/slider.png"
import sliderHandle from "../../../assets/slider_handle.png"

function MinecraftSlider({ slider_level, text, index }) {
    const slider_percentage = slider_level >= 95 ? 100 : slider_level + 2.5;

    return (
        <Box
            key={index ? index : null}
            display="flex"
            sx={{
                position: 'relative',
                alignItems: "center",
                justifyContent: "center",
                width: {
                    xs: '320px',
                    sm: '400px',
                },
            }}
        >
            {/* Image container */}
            <Box
                sx={{
                    display: 'inline-block',
                    width: '400px',
                    height: '48px',
                }}
            >
                <img
                    src={sliderBackground}
                    alt="slider background"
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                />
            </Box>
            {/* Slider Handle image */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: `${slider_level >= 95 ? "95%" : slider_level+"%" }`
                }}
            >
                <img
                    src={sliderHandle}
                    alt="slider handle"
                    style={{
                        width: '100%',
                        height: '48px',
                    }}
                />
            </Box>
            {/* Text content */}
            <Typography
                variant="p"
                sx={{
                    fontSize: '20px',
                    fontFamily: 'Minecraft',
                    position: 'absolute',
                    color: '#fff',
                    textShadow: '2px 2px 2px rgba(0,0,0,0.85)',
                    textAlign: 'center',
                    width: '100%'
                }}
            >{text} ({slider_percentage})</Typography>
        </Box>
    );
}

export default MinecraftSlider;