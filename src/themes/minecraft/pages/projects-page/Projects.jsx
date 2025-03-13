import React, {useState} from 'react';
import {Box} from "@mui/material";
import MinecraftSettingsBackground from "../../components/MinecraftSettingsBackground";
import MinecraftProjectButton from "../../components/MinecraftProjectButton";
import compjuxLogo from "../../../../assets/compjux-logo.png";
import tradesenseLogo from "../../../../assets/tradesense-logo.png";
import projectManagementLogo from "../../../../assets/dojo-logo.svg";

//TODO: add layout to background, when selecting a project a button to be available to be clicked

const contentData = [
    {
        title: "Compjux",
        short_description: "Gaming PC e-shop and resource management application",
        tech_stack: "React, Typescript, MUI, Firebase",
        project_image: compjuxLogo,
    },

    {
        title: "TradeSense",
        short_description: "Application that predicts best time to buy/sell Macedonian Stock",
        tech_stack: "React, MUI, SpringBoot, PostgreSQL",
        project_image: tradesenseLogo,
    },

    {
        title: "Dojo",
        short_description: "Small and simple Project Management application",
        tech_stack: "React, Firebase",
        project_image: projectManagementLogo,
    },

    {
        title: "Expense Tracker",
        short_description: "Small and simple money management application",
        tech_stack: "React, Firebase",
        project_image: "#",
    }
]

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleProjectClick = (id) => {
        if (selectedProject === id) {
            setSelectedProject(null);
        } else {
            setSelectedProject(id);
        }
    }

    return (
        <MinecraftSettingsBackground
            title="My Projects"
            isBackButton={true}
        >
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "16px"
                }}
            >
                {contentData.map((item, i) => (
                    <MinecraftProjectButton
                        key={i}
                        title={item.title}
                        short_description={item.short_description}
                        tech_stack={item.tech_stack}
                        project_image={item.project_image}
                        onClick={() => handleProjectClick(i)}
                        isSelected={selectedProject === i}
                    />
                ))}
            </Box>
        </MinecraftSettingsBackground>
    );
}

export default Projects;