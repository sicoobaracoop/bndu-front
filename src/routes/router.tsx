import { Navigate, createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../componentes/dashboard";
import { PageHome } from "../page/home";
import { PageAdmin } from "../page/admin";
import { Detalhes } from "../page/detalhes";
import { CadastroPage } from "../page/cadastro";
import { LoginPage } from "../page/login";
import { isAuthenticated } from "../lib/auth";

type PrivateRouterProps = {
    Componente: React.FC;
}

// eslint-disable-next-line react-refresh/only-export-components
const PrivateRoute = ({Componente }: PrivateRouterProps) => 
    isAuthenticated() ? <Componente /> : <Navigate to="/login" />;

export const router = createBrowserRouter([
    {
        path: '/',
        element: (<Dashboard />),
        children: [
            {
                path: '/',
                element: <PageHome />
            },
            {
                path: '/detalhes/:imovelId',
                element: <Detalhes />
            },
            {
                path: '/lpregisterlp',
                element: <CadastroPage />
            },
            {
                path: '/login',
                element: <LoginPage />
            }
        ]
    }
    , {
        path: 'admin',
        element: <PrivateRoute Componente={PageAdmin} />
    }
])