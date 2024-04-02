import { Container, useTheme } from "@mui/material";

import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import AppBar from "../components/AppBar";


type QrCodePageProps = {
  setAuth: any
}

const QrCodePage = ({ setAuth }: QrCodePageProps) => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const theme = useTheme()

  return <>
    <AppBar backButton pageTitle={t('appBar.qr')} setAuth={setAuth} />
    <Container>

    </Container>
  </>
}

export default QrCodePage;