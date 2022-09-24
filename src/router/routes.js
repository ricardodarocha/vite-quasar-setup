import Home from '@/pages/Home.vue';
import VendaPassagem from '@/pages/VendaPassagem.vue';
import DigitaPassagem from '@/pages/DigitaPassagem.vue';
import ConferenciaPassagem from '@/pages/ConferenciaPassagem.vue';
import Login from '@/pages/Login.vue';
import Usuarios from '@/pages/Usuarios.vue';
import AreaTrabalho from '@/pages/AreaTrabalho.vue';

const routes = [{
    path: "/",
    name: "Home",
    component: Home
},{
    path: "/main",
    name: "AreaTrabalho",
    component: AreaTrabalho
},
{

    path: "/new",
    name: "VendaPassagem",
    component: VendaPassagem

},
{

    path: "/digitar",
    name: "DigitaPassagem",
    component: DigitaPassagem

},
{

    path: "/bilhete",
    name: "ConferenciaPassagem",
    component: ConferenciaPassagem

},
{

    path: "/login",
    name: "Login",
    component: Login

},
{

    path: "/usuarios",
    name: "Usuarios",
    component: Usuarios

}
];

    export default routes