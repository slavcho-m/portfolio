import React, {useState} from 'react';
import {Box, Typography} from "@mui/material";
import minecraftBtn from '../../../assets/button.png'
import minecraftBtnSmall from '../../../assets/button_s.png'
import minecraftBtnHover from '../../../assets/button_highlighted.png'
import minecraftBtnHoverSmall from '../../../assets/button_highlighted_s.png'
import {useNavigate} from "react-router";


function MinecraftButton({ i, item, button_size, url }) {
    const [btnHoveredIndex, setBtnHoveredIndex] = useState(null);
    const navigate = useNavigate();

    return (
        <Box
            key={i ? i : null}
            display="flex"
            sx={{
                position: 'relative',
                width: {
                    xs: `${button_size === "large" ? '320px' : '151px'}`,
                    sm: `${
                        button_size === "large" ? '400px' : '192px'
                    }`
                },
                alignItems: 'center',
                justifyContent: 'center',
            }}
            onClick={() => navigate(`${url}`)}
        >
            <Box
                sx={{
                    display: 'inline-block',
                    width: {
                        xs: `${button_size === "large" ? '320px' : '151px'}`,
                        sm: `${
                            button_size === "large" ? '400px' : '192px'
                        }`
                    },
                    height: "48px",
                    '&:hover': {cursor: 'pointer'}
                }}
                onMouseEnter={() => setBtnHoveredIndex(i)}
                onMouseLeave={() => setBtnHoveredIndex(null)}
            >
                <img
                    src={
                        btnHoveredIndex === i ?
                            button_size === "large" ? minecraftBtnHover : minecraftBtnHoverSmall
                            : button_size === "large" ? minecraftBtn : minecraftBtnSmall
                    }
                    alt="minecraft button background"
                    style={{  transition: '0.3s', width: '100%', height: '100%' }}
                />
            </Box>
            <Typography
                variant="p"
                sx={{
                    fontSize: '20px',
                    fontFamily: 'Minecraft',
                    position: 'absolute',
                    color: '#fff',
                    textShadow: '2px 2px 2px rgba(0,0,0,0.75)',
                    '&:hover': {cursor: 'pointer'},
                    textAlign: 'center',
                    width: '100%'
                }}
                onMouseEnter={() => setBtnHoveredIndex(i)}
                onMouseLeave={() => setBtnHoveredIndex(null)}
            >{item}</Typography>
        </Box>
    );
}

export default MinecraftButton;