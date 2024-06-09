import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CopyrightIcon from "@mui/icons-material/Copyright";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";
import { Tooltip } from "@mui/material";

const SocialLink = styled(Link)(() => ({
  "&:hover": {
    color: "white",
    cursor: "pointer",
  },
}));

const Footer = () => {
  return (
    <Box
      sx={{
        minHight: "60px",
        width: "100%",
        backgroundColor: "black",
        borderTop: "1px solid white",
        color: "white",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box color="#00fff0" sx={{ margin: "15px 0 5px 0" }}>
          <Tooltip
            title="Not active"
            placement="top"
            arrow
            PopperProps={{
              sx: {
                "& .MuiTooltip-tooltip": {
                  border: "solid white 1px",
                  color: "white",
                  backgroundColor: "black",
                },
              },
            }}
          >
            <SocialLink href="#" target="_blank" color="inherit">
              <InstagramIcon
              sx={{ fontSize: 30 }}
              />
            </SocialLink>
          </Tooltip>
          <SocialLink
            href="https://t.me/Ihor_Pohaidak"
            target="_blank"
            color="inherit"
          >
            <TelegramIcon
              sx={{
                fontSize: 30,
                margin: "0 20px",
              }}
            />
          </SocialLink>
          <SocialLink
            href="https://www.facebook.com/ihor.pohaidak.5"
            target="_blank"
            color="inherit"
          >
            <FacebookIcon
            sx={{ fontSize: 30 }}
            />
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/in/ihor-pohaidak-313845312"
            target="_blank"
            color="inherit"
          >
            <LinkedInIcon
              sx={{
                fontSize: 30,
                margin: "0 20px",
              }}
            />
          </SocialLink>
          <Tooltip
            title="Not active"
            placement="top"
            arrow
            PopperProps={{
              sx: {
                "& .MuiTooltip-tooltip": {
                  border: "solid white 1px",
                  color: "white",
                  backgroundColor: "black",
                },
              },
            }}
          >
            <SocialLink href="#" target="_blank" color="inherit">
              <TwitterIcon
              sx={{ fontSize: 30 }}
              />
            </SocialLink>
          </Tooltip>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", padding: "10px" }}>
        <CopyrightIcon
          sx={{
            marginTop: { lg: "3px", md: "3px", sm: "2px", xs: "2px" },
            fontSize: {
              lg: 14,
              md: 14,
              sm: 13,
              xs: 13,
            },
          }}
        />
        <Typography
          sx={{
            marginLeft: "2px",
            fontSize: {
              lg: 14,
              md: 14,
              sm: 12,
              xs: 12,
            },
          }}
        >
          2023 Ihor Pohaidak
        </Typography>
      </Box>
    </Box>
  );
};
export default Footer;
