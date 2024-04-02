import { Container, useTheme } from "@mui/material";

import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import AppBar from "../components/AppBar";


type UsersPageProps = {
  setAuth: any
}

const UsersPage = ({ setAuth }: UsersPageProps) => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const theme = useTheme()

  return <>
    <AppBar backButton pageTitle={t('appBar.users')} setAuth={setAuth} />
    <Container>

    </Container>
  </>
}

export default UsersPage;