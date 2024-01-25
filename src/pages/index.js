import { lazy } from "react";

const Home = lazy(() => import('./Home/Home'));
const Events = lazy(() => import('./Events/Events'));
const SingleEvent = lazy(() => import('./SingleEvent/Event'));
const SingleWorkshop = lazy(() => import('./SingleWorkshop/Workshop'));
const Workshop = lazy(() => import('./Workshops/Workshop'));
const About = lazy(() => import('./About/About'));
const Login = lazy(() => import('./Login/Login'));
const Profile = lazy(() => import('./Profile/Profile'));
const SignUpDetails = lazy(() => import('./Login/components/SignUpDetails'));

export {
    Home, Events, SingleEvent, About, Profile,
    Workshop, Login, SignUpDetails, SingleWorkshop
}