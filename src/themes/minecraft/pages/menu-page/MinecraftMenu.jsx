import React from 'react';
import minecraftTitle from '../../../../assets/minecraft-theme-title.png'
import minecraftBgImage from '../../../../assets/bg-image.png'
import {Box} from "@mui/material";
import MinecraftButton from "../../components/MinecraftButton";
import {useNavigate} from "react-router";

const bigButtonsContent = [{text: 'Choose Project', url: 'projects'}, {text: 'Developer\'s Settings', url: 'developer-settings'}, {text: 'About Developer', url: 'about'}];
const smallButtonsContent = [{text: 'Select Theme', url: 'theme-selector'}, {text: 'Quit Game', url: 'quit-game'}]

function MinecraftMenu(props) {
    const navigate = useNavigate();

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
                        item={item.text}
                        url={item.url}
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
                                item={item.text}
                                url={item.url}
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