import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "../styles/Accordion.module.css";
import { isMobileView } from "@/commons/constants";
import { Colors } from "@/commons/Colors";

interface AccordionProps {
  title: string;
  textContent: string;
  id: number;
}

export default function BasicAccordion({
  title,
  textContent,
  id,
}: AccordionProps) {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  let isMobileViewViewport: boolean = isMobileView();

  const accordionSummaryStyles = {
    backgroundColor:
      expanded === `panel${id.toString()}`
        ? Colors.expandedAccordionColor
        : Colors.collapsedAccordionColor,
    borderRadius: "50%",
    color: "white",
    height: isMobileViewViewport ? 15 : 29,
    width: isMobileViewViewport ? 15 : 29,
  };

  return (
    <div>
      <Accordion
        className={styles.accordion}
        expanded={expanded === `panel${id.toString()}`}
        onChange={handleChange(`panel${id.toString()}`)}
        style={{
          borderColor:
            expanded === `panel${id.toString()}`
              ? Colors.expandedAccordionColor
              : Colors.collapsedAccordionColor,
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={accordionSummaryStyles} />}
          aria-controls={`panel${id.toString()}a-content`}
          id={`panel${id.toString()}a-header`}
          className={styles.summary}
        >
          <Typography className={styles.title}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={styles.textContent}>{textContent}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
