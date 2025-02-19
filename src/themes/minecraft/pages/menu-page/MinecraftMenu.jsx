import React, {useState} from 'react';
import minecraftTitle from '../../../../assets/minecraft-theme-title.png'
import minecraftBtn from '../../../../assets/button.png'
import minecraftBtnSmall from '../../../../assets/button_s.png'
import minecraftBtnHover from '../../../../assets/button_highlighted.png'
import minecraftBtnHoverSmall from '../../../../assets/button_highlighted_s.png'
import minecraftBgImage from '../../../../assets/bg-image.png'
import {Box, Typography} from "@mui/material";
import MinecraftButton from "../../components/MinecraftButton";

const bigButtonsContent = ['Choose Project', 'Select Theme', 'Developer\'s Settings']
const smallButtonsContent = ['About', 'Quit Game']

function MinecraftMenu(props) {
    const [btnHoveredIndex, setBtnHoveredIndex] = useState(null);

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                width: '100%',
                height: '100vh',
                backgroundImage: `url(${minecraftBgImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
            {/* Title Container */}
            <Box
                sx={{
                    mb: {xs: '120px', md: '160px'},
                    width: {
                        xs: '380px',
                        lg: '1024px'
                    }
                }}
            >
                <img src={minecraftTitle} alt="minecraft title" style={{width: '100%'}}/>
            </Box>

            {/* Buttons Container */}
            <Box>
                {/* Single big button */}
                {bigButtonsContent.map((item, i) => (
                    <MinecraftButton
                        i={i}
                        item={item}
                        button_size="large"
                    />
                ))}

                {/* Two Small Buttons */}
                <Box
                    display="flex"
                    sx={{
                        gap: '16px',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Box
                        display="flex"
                        sx={{
                            gap: '16px',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        {smallButtonsContent.map((item, i) => (
                            <MinecraftButton
                                i={i}
                                item={item}
                                button_size="small"
                            />
                        ))}
                    </Box>
                </Box>

            </Box>
        </Box>
    );
}

export default MinecraftMenu;