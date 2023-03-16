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

const StyledMainBox = styled(Box)(() => ({
  backgroundImage: `linear-gradient(
    325deg,
    hsl(185deg 100% 56%) 0%,
    hsl(185deg 100% 44%) -1%,
    hsl(186deg 100% 38%) -1%,
    hsl(187deg 100% 32%) -2%,
    hsl(188deg 100% 27%) -1%,
    hsl(190deg 100% 22%) 0%,
    hsl(194deg 100% 16%) 4%,
    hsl(198deg 100% 12%) 14%,
    hsl(0deg 0% 0%) 56%
      );`,
}));

export default function Home() {
  const { t } = useTranslation(); //i18n
  return (
    <StyledMainBox sx={{ width: "100%", minHeight: "calc(100vh - 134px)" }}>
      <Box
        sx={{
          display: "flex",
          padding: "30px",
          justifyContent: "space-between",
          margin: "0px 0",
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
          // marginBottom: "30px",
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
    </StyledMainBox>
  );
}
