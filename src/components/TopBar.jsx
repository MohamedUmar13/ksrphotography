import { AppBar, Box, Drawer, List, ListItemButton, ListItemText, Menu, MenuItem, Toolbar, Tooltip } from "@mui/material";
import { useState } from "react";
import { pages, weddings } from "../constants";
import { useNavigate } from "react-router-dom";
import TopBarButton from "./TopBarButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from '@mui/icons-material/Menu';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { motion } from "framer-motion";

export default function TopBar() {

  const [anchor, setAnchor] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);

  const [pagesBarOpen, setPagesBarOpen] = useState(false);
  const [weddingsBarOpen, setWeddingsBarOpen] = useState(false);

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
        justifyContent: "center",
        px: .5
      }}
    >

      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <TopBarButton navigate={() => setPagesBarOpen(true)} page={<MenuIcon />} />
      </Box>

      <Box sx={{ display: { xs: "none", md: "flex" } }}>
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

        {/* Dropdown pages */}
        <Menu
          anchorEl={anchor}
          open={open}
          onClose={handleClose}
          transitionDuration={0}
          disableScrollLock
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
      </Box>

      <Drawer
        anchor="top"
        open={pagesBarOpen}
        onClose={() => setPagesBarOpen(false)}
        transitionDuration={500}
        PaperProps={{
          sx: {
            width: "100%",
            height: "100vh",
            bgcolor: "rgba(10,10,10,0.9)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            color: "#fff",
          },
        }}
      >
        <Box sx={{ px: 4, py: 4, height: "100%" }}>

          {/* 🔥 Close Button */}
          <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 4 }}>
            <CancelOutlinedIcon
              sx={{ fontSize: 32, cursor: "pointer" }}
              onClick={() => setPagesBarOpen(false)}
            />
          </Box>

          {/* 🔥 Animated Menu */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            <List>
              {pages.map((page) => (
                <motion.div
                  key={page.label}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <ListItemButton
                    onClick={() => {
                      if (page.path) {
                        navigate(page.path);
                        setPagesBarOpen(false);
                      } else {
                        setWeddingsBarOpen(true);
                      }
                    }}
                    sx={{
                      py: 2,
                      "&:hover": {
                        background: "transparent",
                        color: "#dbc6a3",
                      },
                    }}
                  >
                    <ListItemText
                      primary={page.label}
                      primaryTypographyProps={{
                        fontSize: "1.8rem",
                        fontWeight: 500,
                        letterSpacing: "0.08em",
                        fontFamily: "'Playfair Display', serif",
                      }}
                    />
                  </ListItemButton>
                </motion.div>
              ))}
            </List>
          </motion.div>

        </Box>
      </Drawer>

      {/* Weddings drawer Mobile */}
      <Drawer
        anchor="bottom"
        open={weddingsBarOpen}
        onClose={() => setWeddingsBarOpen(false)}
        transitionDuration={500}
        PaperProps={{
          sx: {
            width: "100%",
            height: "100vh",
            bgcolor: "rgba(10,10,10,0.9)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            color: "#fff",
          },
        }}
      >
        <Box sx={{ px: 4, py: 4, height: "100%" }}>

          {/* 🔥 Close Button */}
          <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 4 }}>
            <CancelOutlinedIcon
              sx={{ fontSize: 32, cursor: "pointer" }}
              onClick={() => setWeddingsBarOpen(false)}
            />
          </Box>

          {/* 🔥 Animated Menu */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            <List>
              {weddings.map((wedding) => (
                <motion.div
                  key={wedding.label}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <ListItemButton
                    onClick={() => {
                      navigate(wedding.path);
                      setWeddingsBarOpen(false);
                      setPagesBarOpen(false);
                    }}
                    sx={{
                      py: 2,
                      "&:hover": {
                        background: "transparent",
                        color: "#dbc6a3",
                      },
                    }}
                  >
                    <ListItemText
                      primary={wedding.label}
                      primaryTypographyProps={{
                        fontSize: "1.8rem",
                        fontWeight: 500,
                        letterSpacing: "0.08em",
                        fontFamily: "'Playfair Display', serif",
                      }}
                    />
                  </ListItemButton>
                </motion.div>
              ))}
            </List>
          </motion.div>

        </Box>
      </Drawer>
    </AppBar>
  );
}