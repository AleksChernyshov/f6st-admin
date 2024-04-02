import { Container, useTheme } from "@mui/material";

import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import AppBar from "../components/AppBar";


type ProfilesPageProps = {
  setAuth: any
}

const ProfilesPage = ({ setAuth }: ProfilesPageProps) => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const theme = useTheme()

  return <>
    <AppBar backButton pageTitle={t('appBar.profiles')} setAuth={setAuth} />
    <Container>

    </Container>
  </>
}

export default ProfilesPage;