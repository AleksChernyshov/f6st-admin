import { Container, useTheme } from "@mui/material";

import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import AppBar from "../components/AppBar";


type PaymentPageProps = {
  setAuth: any
}

const PaymentPage = ({ setAuth }: PaymentPageProps) => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const theme = useTheme()

  return <>
    <AppBar backButton pageTitle={t('appBar.payments')} setAuth={setAuth} />
    <Container>

    </Container>
  </>
}

export default PaymentPage;