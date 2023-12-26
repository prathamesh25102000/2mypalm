import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import styles from "../styles/Drawer.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";

type Anchor = "right";

export default function MUIDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 230, height: "100%" }}
      role="presentation"
      className={styles.drawer}
    >
      <button className={styles.btn} onClick={toggleDrawer(anchor, false)}>
        <CloseIcon className={styles.closeIcon} />
      </button>
      <List>
        <button className={styles.downloadBtn}>Download</button>
        {["Features", "About us", "FAQs"].map((text, index) => (
          <ListItem key={text} disablePadding className={styles.ListItem}>
            <ListItemButton>
              <Link href={"/about_us"} className={styles.link}>
                <ListItemText primary={text} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} className={styles.btn}>
            <MenuIcon />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
