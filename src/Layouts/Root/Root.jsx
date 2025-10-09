
import { Outlet, useNavigation } from 'react-router';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import CardError from '../../Pages/Error/CardError';

const Root = () => {

    const navigation=useNavigation()
    const isNavigating=Boolean(navigation.location)

    return (
        <div className='flex flex-col min-h-screen'>
       <Header></Header>
    <div className='flex-1'>
        {isNavigating && <CardError></CardError>}
        <Outlet></Outlet>
    </div>
       <Footer></Footer>
        </div>
    );
};

export default Root;