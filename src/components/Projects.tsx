import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { Link } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Filter1Icon from "@mui/icons-material/Filter1";
import Filter2Icon from "@mui/icons-material/Filter2";
import Filter3Icon from "@mui/icons-material/Filter3";
import Filter4Icon from "@mui/icons-material/Filter4";
import Filter5Icon from "@mui/icons-material/Filter5";

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

const StyledTitleBox = styled(Box)(() => ({
  backgroundImage: `linear-gradient(
        70deg,
        hsl(185deg 100% 56%) 3%,
        hsl(186deg 100% 50%) 25%,
        hsl(188deg 100% 50%) 42%,
        hsl(190deg 100% 50%) 56%,
        hsl(197deg 100% 64%) 69%,
        hsl(212deg 100% 75%) 80%,
        hsl(246deg 100% 84%) 89%,
        hsl(280deg 100% 80%) 96%,
        hsl(300deg 100% 75%) 100%
        );`,
}));

const TitleTypography = styled(Typography)(() => ({
  backgroundcolor: "#000000",
  backgroundImage: `linear-gradient(45deg, #000000, #840d86)`,
  backgroundSize: "100%",
  backgroundRepeat: "repeat",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontWeight: "bold",
}));

interface ItemProjectProps {
  date?: string;
  desc?: string;
  additionalDesc?: string;
  urlWeb?: string;
  urlGitHub?: string;
  projectNumber?: React.ReactNode;
}

const ItemProject = (data: ItemProjectProps) => {
  const { t } = useTranslation(); //i18n
  return (
    <>
      <Box
        sx={{
          borderBottom: "1px solid #00fff0",
          paddingBottom: "15px",
          marginTop: "30px",
        }}
      >
        <Box sx={{ display: "flex", marginBottom: "20px" }}>
          {data.projectNumber}
          <Typography sx={{ marginLeft: "20px", fontSize: 20 }}>
            {data.date}
          </Typography>
        </Box>
        <Typography
          variant="h6"
          sx={{
            marginBottom: "5px",
            fontSize: {
              lg: 20,
              md: 20,
              sm: 18,
              xs: 14,
            },
          }}
        >
          {data.desc}
        </Typography>
        {data.additionalDesc ? (
          <Typography sx={{ marginBottom: "5px", fontSize: "14px" }}>
            {data.additionalDesc}
          </Typography>
        ) : null}

        <Link
          href={data.urlWeb}
          target="_blank"
          sx={{ color: "#00fff0", marginRight: "20px" }}
        >
          {t("app")}
        </Link>
        <Link href={data.urlGitHub} target="_blank" sx={{ color: "#00fff0" }}>
          {t("source")}
        </Link>
      </Box>
    </>
  );
};

const Projects = () => {
  const { t } = useTranslation(); //i18n
  return (
    <StyledMainBox
      sx={{
        width: "100%",
        color: "white",
        padding: "70px 0",
      }}
    >
      <StyledTitleBox
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          padding: "20px",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            display={{ lg: "flex", md: "flex", sm: "flex", xs: "none" }}
            sx={{ marginRight: "40px" }}
          >
            <img src={require("../assets/pet1.jpg")} alt="SomeImage" />
          </Box>
          <Box
            display={{ lg: "flex", md: "none", sm: "none", xs: "none" }}
            sx={{ marginRight: "40px" }}
          >
            <img src={require("../assets/pet2.jpg")} alt="SomeImage" />
          </Box>
          <Box display={{ lg: "flex", md: "flex", sm: "none", xs: "none" }}>
            <img src={require("../assets/pet3.jpg")} alt="SomeImage" />
          </Box>
        </Box>

        <Box sx={{ marginTop: "10px", minWidth: "300px" }}>
          <TitleTypography
            variant="h2"
            sx={{
              color: "black",
              fontSize: {
                lg: 50,
                md: 50,
                sm: 50,
                xs: 40,
              },
              fontWeight: "bold",
            }}
          >
            {t("pet")}
          </TitleTypography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            <ArrowDownwardIcon sx={{ fontSize: 70, color: "black" }} />
          </Box>
        </Box>
      </StyledTitleBox>

      <Box sx={{ margin: "50px 50px 0 50px" }}>
        <ItemProject
          date="05/2023"
          desc="React, TypeScript, Tailwind, Next.js, Prisma, MongoDB, NextAuth & Vercel"
          urlWeb="https://deploy-messenger.vercel.app/"
          urlGitHub="https://github.com/poggy33/deploy-messenger"
          projectNumber={<Filter1Icon sx={{ fontSize: 30 }} />}
          additionalDesc='(messenger app)'
        />
        <ItemProject
          date="04/2023"
          desc="UI(React, React-router-dom, Mui, React-redux, Reduxjs/toolkit, Formik, Yup, React-responsive-carousel), API(Strapi, Heroku Postgres, Cloudinary, Stripe )"
          urlWeb="https://strapi-client-ecommerce.vercel.app/"
          urlGitHub="https://github.com/poggy33/strapi-client"
          projectNumber={<Filter2Icon sx={{ fontSize: 30 }} />}
          additionalDesc='(e-commerce app with cart, Stripe payment, server has deployed on "https://watches-shop-server.herokuapp.com")'
        />
        <ItemProject
          date="03/2023"
          desc="React, React-router-dom, Mui, Firebase Google Auth, Firestore database, TypeScript"
          urlWeb="https://social-app-firebase.vercel.app/"
          urlGitHub="https://github.com/poggy33/social-app-firebase"
          projectNumber={<Filter3Icon sx={{ fontSize: 30 }} />}
        />
        <ItemProject
          date="01/2023"
          desc="React, React-router-dom, Mui, React-redux, Reduxjs/toolkit, Axios, React-i18next, TypeScript"
          urlWeb="https://poggy33.github.io/react-ts/"
          urlGitHub="https://github.com/poggy33/react-ts"
          projectNumber={<Filter4Icon sx={{ fontSize: 30 }} />}
          additionalDesc="(username:admin, password:12345)"
        />
        <ItemProject
          date="11/2022"
          desc="React, React-router-dom, Mui, Firebase"
          urlWeb="https://watches-shop33.vercel.app/"
          urlGitHub="https://github.com/poggy33/watches-shop33"
          projectNumber={<Filter5Icon sx={{ fontSize: 30 }} />}
          additionalDesc="(e-commerce app)"
        />
      </Box>
    </StyledMainBox>
  );
};
export default Projects;
