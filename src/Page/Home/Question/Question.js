import { Box, Container, Typography, styled } from "@mui/material";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import React from "react";

import GamesIcon from "@mui/icons-material/Games";
import MinimizeIcon from "@mui/icons-material/Minimize";

import "./Question.css";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<GamesIcon sx={{ fontSize: "30px", color: "#FFFFFF" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const Question = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box sx={{margin: "100px 0px"}}>
      <Container>
      <Typography
          sx={{
            textAlign: "center",
            marginTop: "10px",
            marginBottom: "10px",
            fontWeight: 700,
            fontSize: "45px",
            lineHeight: "60px",
            color: "#00295A",
          }}
        >FAQ.</Typography>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      </p>

      <Box className="Question">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography className="HeaderText">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="MinimizeText">
              <MinimizeIcon />
              <div className="Pareghape">
                <h3>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam
                </p>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography className="HeaderText">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="MinimizeText">
              <MinimizeIcon />
              <div className="Pareghape">
                <h3>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam
                </p>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography className="HeaderText">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="MinimizeText">
              <MinimizeIcon />
              <div className="Pareghape">
                <h3>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam
                </p>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        </Box>
      </Container>
    </Box>
  );
};

export default Question;
