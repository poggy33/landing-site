import React from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { useTranslation } from "react-i18next";//i18n

const TitleTypography = styled(Typography)(() => ({
  backgroundcolor: "#00fff0",
  backgroundImage: `linear-gradient(45deg, #00fff0, #FF80FF)`,
  backgroundSize: "100%",
  backgroundRepeat: "repeat",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontWeight: "bold",
}));

const TextTypography = styled(Typography)(() => ({
  color: "#00fff0",
}));

export default function Home() {
  const { t } = useTranslation(); //i18n
  return (
    <Box sx={{ width: "100%", minHeight: "calc(100vh - 134px)" }}>
      <video className="videoTag" autoPlay loop muted>
        <source
          src={require("../assets/backgroundVideo.mp4")}
          type="video/mp4"
        />
      </video>
      <Box
        sx={{
          display: "flex",
          padding: "30px",
          justifyContent: "space-between",
          margin: "30px 0",
        }}
      >
        <Box sx={{ maxWidth: "730px" }}>
          <TitleTypography
            variant="h4"
            sx={{
              fontSize: {
                lg: 40,
                md: 35,
                sm: 30,
                xs: 25,
              },
              marginBottom: "20px",
            }}
          >
            {t("titleHome1")}
          </TitleTypography>
          <TextTypography
            variant="h6"
            sx={{
              fontSize: {
                lg: 22,
                md: 20,
                sm: 20,
                xs: 18,
              },
            }}
          >
            {t("textHome1")}
          </TextTypography>
        </Box>
        <Box
          display={{ lg: "flex", md: "flex", sm: "none", xs: "none" }}
          sx={{ opacity: "0.7", marginLeft: "50px" }}
        >
          <img src={require("../assets/imageTitle1.jpg")} alt="SomeImage" />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          padding: "30px",
          justifyContent: "space-between",
          marginBottom: "30px",
        }}
      >
        <Box
          display={{ lg: "flex", md: "flex", sm: "none", xs: "none" }}
          sx={{ opacity: "0.7", marginRight: "50px" }}
        >
          <img src={require("../assets/imageTitle2.jpg")} alt="SomeImage" />
        </Box>
        <Box sx={{ maxWidth: "730px" }}>
          <TitleTypography
            variant="h4"
            sx={{
              marginBottom: "20px",
              fontSize: {
                lg: 40,
                md: 35,
                sm: 30,
                xs: 25,
              },
            }}
          >
            {t("titleHome2")}
          </TitleTypography>
          <TextTypography
            variant="h6"
            sx={{
              fontSize: {
                lg: 22,
                md: 20,
                sm: 20,
                xs: 18,
              },
            }}
          >
            {t("textHome2")}
          </TextTypography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          padding: "30px",
          justifyContent: "space-between",
          marginBottom: "30px",
        }}
      >
        <Box sx={{ maxWidth: "730px" }}>
          <TitleTypography
            variant="h4"
            sx={{
              marginBottom: "20px",
              fontSize: {
                lg: 40,
                md: 35,
                sm: 30,
                xs: 25,
              },
            }}
          >
            {t("titleHome3")}
          </TitleTypography>
          <TextTypography
            variant="h6"
            sx={{
              fontSize: {
                lg: 22,
                md: 20,
                sm: 20,
                xs: 18,
              },
            }}
          >
            {t("textHome3")}
          </TextTypography>
        </Box>
        <Box
          display={{ lg: "flex", md: "flex", sm: "none", xs: "none" }}
          sx={{ opacity: "0.7", marginLeft: "50px" }}
        >
          <img src={require("../assets/imageTitle3.jpg")} alt="SomeImage" />
        </Box>
      </Box>
    </Box>
  );
}
