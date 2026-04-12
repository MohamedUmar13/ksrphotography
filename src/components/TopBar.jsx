import { AppBar, Menu, MenuItem, Toolbar, Tooltip } from "@mui/material";
import React, { useState } from "react";
import { pages } from "../constants";
import { useNavigate } from "react-router-dom";
import TopBarButton from "./TopBarButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function TopBar() {

  const [anchor, setAnchor] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);

  const open = Boolean(anchor);

  const handleOpen = (event, page) => {
    setAnchor(event.currentTarget);
    setActiveMenu(page);
  };

  const handleClose = () => {
    setAnchor(null);
    setActiveMenu(null);
  };

  const navigate = useNavigate();

  return (
    <AppBar
      elevation={0}
      sx={{
        background: "rgba(255, 255, 255, 0.25)", // semi-transparent
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)", // Safari support
        borderRadius: "5px",
        height: "70px",
        display: "flex",
        alignItems: "flex-end",
      }}
    >
      <Toolbar>
        {
          pages.map((page) => {

            return (
                <>
                  {
                    page.children ?
                      <TopBarButton page={page.label} navigate={(e) => handleOpen(e, page)} icon={<KeyboardArrowDownIcon />} />
                      : page.path ?
                        <TopBarButton page={page.label} navigate={() => navigate(page.path)} />
                        : <Tooltip title="under development" placement="bottom">
                          <span>
                            <TopBarButton page={page.label} />
                          </span> {/* span is a DOM element so that the tooltip attaches to span */}
                        </Tooltip>
                  }
                </>
            );

          })
        }
      </Toolbar>

      <Menu
        anchorEl={anchor}
        open={open}
        onClose={handleClose}
        transitionDuration={0}
      >
        {activeMenu?.children?.map((item) => (
          <MenuItem
            key={item.label}
            onClick={() => {
              navigate(item.path);
              handleClose();
            }}>
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </AppBar>
  );
}