import { Container, useTheme } from "@mui/material";

import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import AppBar from "../components/AppBar";


type ProductPageProps = {
  setAuth: any
}

const ProductPage = ({ setAuth }: ProductPageProps) => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const theme = useTheme()

  return <>
    <AppBar backButton pageTitle={t('appBar.products')} setAuth={setAuth} />
    <Container>

    </Container>
  </>
}

export default ProductPage;