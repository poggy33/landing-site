import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import i18n from "../i18n"; //i18next
import { useTranslation } from "react-i18next"; //i18next
import { useNavigate } from "react-router-dom";

const NavButton = styled(Button)(() => ({
  margin: "0 30px",
  color: "white",
  "&:hover": {
    color: "rgb(0,255,240)",
    cursor: "pointer",
  },
}));

const LanguageButton = styled(Button)(() => ({
  color: "white",
  fontSize: "0.8rem",
  minWidth: "30px",
  "&:hover": {
    color: "rgb(0,255,240)",
  },
}));

const LineBox = styled(Box)(() => ({
  border: "1px solid white",
  height: "20px",
  marginTop: "7px",
}));

const BasicMenu = ({ isLoggedIn }: any) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { t } = useTranslation(); //i18n
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ color: "white" }}
      >
        <MenuIcon
          fontSize="large"
          sx={{
            marginTop: "10px",
            "&:hover": {
              color: "rgb(0,255,240)",
            },
          }}
        />
      </Button>
      <Menu
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "black",
          },
        }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          sx={{
            color: "white",
            "&:hover": {
              color: "rgb(0,255,240)",
            },
          }}
          onClick={() => {
            setAnchorEl(null);
            navigate("/");
          }}
        >
          {t("home")}
        </MenuItem>
        <MenuItem
          sx={{
            color: "white",
            "&:hover": {
              color: "rgb(0,255,240)",
            },
          }}
          onClick={() => {
            setAnchorEl(null);
            navigate("/projects");
          }}
        >
          {t("pet")}
        </MenuItem>
        <MenuItem
          sx={{
            color: "white",
            "&:hover": {
              color: "rgb(0,255,240)",
            },
          }}
          onClick={() => {
            setAnchorEl(null);
            navigate("/about");
          }}
        >
          {t("about")}
        </MenuItem>
      </Menu>
    </div>
  );
};

export default function ButtonAppBar() {
  const { t } = useTranslation(); //i18n
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "60px",
        backgroundColor: "black",
        color: "white",
        borderBottom: "1px solid white",
        display: "flex",
      }}
    >
      <Box
        sx={{
          borderRight: "1px solid white",
          width: "140px",
          height: "64px",
          textAlign: "center",
        }}
      >
        <BasicMenu />
      </Box>
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            minWidth: "calc(100vw - 150px)",
          }}
        >
          <Box>
            <img
              className="photo"
              src={require("../assets/logo.png")}
              alt="logo"
            ></img>
          </Box>
          <Box display={{ lg: "flex", md: "flex", sm: "none", xs: "none" }}>
            <NavButton onClick={() => navigate("/")}>{t("home")}</NavButton>
            <LineBox />
            <NavButton onClick={() => navigate("/projects")}>
              {t("pet")}
            </NavButton>
            <LineBox />
            <NavButton onClick={() => navigate("/about")}>
              {t("about")}
            </NavButton>
          </Box>
          <Box sx={{ display: "flex" }}>
            <LanguageButton onClick={() => i18n.changeLanguage("en")}>
              en
            </LanguageButton>
            <LineBox />
            <LanguageButton onClick={() => i18n.changeLanguage("ua")}>
              ua
            </LanguageButton>
          </Box>
        </Box>
      </Toolbar>
    </Box>
  );
}
