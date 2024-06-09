import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { Link } from "@mui/material";
import { useTranslation } from "react-i18next"; //i18n

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

const ContainerTextBox = styled(Box)(() => ({
  borderBottom: "1px solid #00fff0",
  paddingBottom: "15px",
  margin: "40px 30px  0 30px",
}));

const About = () => {
  const { t } = useTranslation(); //i18n

  return (
    <StyledMainBox
      sx={{
        width: "100%",
        minHeight: "calc(100vh - 161px)",
        color: "white",
        padding: "70px 0",
      }}
    >
      <Box>
        <Box
          sx={{ display: "flex", justifyContent: "center", margin: "0 30px" }}
        >
          <TitleTypography
            variant="h5"
            sx={{
              fontSize: {
                lg: 40,
                md: 35,
                sm: 26,
                xs: 20,
              },
            }}
          >
            {t("titleAbout")}
          </TitleTypography>
        </Box>
        <Box>
          <ContainerTextBox>
            <Typography
              variant="h6"
              sx={{
                fontSize: {
                  lg: 20,
                  md: 20,
                  sm: 18,
                  xs: 14,
                },
              }}
            >
              {t("textAbout1")}
            </Typography>
          </ContainerTextBox>
          <ContainerTextBox>
            <Typography
              variant="h6"
              sx={{
                fontSize: {
                  lg: 20,
                  md: 20,
                  sm: 18,
                  xs: 14,
                },
              }}
            >
              {t("textAbout2")}
            </Typography>
          </ContainerTextBox>
          <ContainerTextBox>
            <Typography
              variant="h6"
              sx={{
                fontSize: {
                  lg: 20,
                  md: 20,
                  sm: 18,
                  xs: 14,
                },
              }}
            >
              {t("textAbout3")}
            </Typography>
          </ContainerTextBox>
          <ContainerTextBox>
            <Typography
              variant="h6"
              sx={{
                fontSize: {
                  lg: 20,
                  md: 20,
                  sm: 18,
                  xs: 14,
                },
              }}
            >
              {t("textAbout4")}
            </Typography>
          </ContainerTextBox>
          <ContainerTextBox>
            <Typography
              variant="h6"
              sx={{
                fontSize: {
                  lg: 20,
                  md: 20,
                  sm: 18,
                  xs: 14,
                },
              }}
            >
              {t("textAbout5")}
            </Typography>
          </ContainerTextBox>
          <ContainerTextBox>
            <Typography
              variant="h6"
              sx={{
                fontSize: {
                  lg: 20,
                  md: 20,
                  sm: 18,
                  xs: 14,
                },
              }}
            >
              {t("textAbout6")}
            </Typography>
          </ContainerTextBox>
        </Box>
        <Box sx={{display:"flex", justifyContent:"center", padding:"30px 0", marginTop:"30px"}}>
          <Box sx={{border:"1px solid white", padding:"7px 10px 10px 10px", backgroundColor:"white"}}>
            <Link href="https://github.com/poggy33/cv_certeficates/blob/main/CV_Pohaidak_Web_Developer.pdf" target="_blank" underline="none" sx={{color:"black", fontWeight:"bold"}}>View Resume</Link>
          </Box>
          
        </Box>
        
      </Box>
    </StyledMainBox>
  );
};
export default About;
