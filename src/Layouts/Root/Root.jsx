
import { Outlet } from 'react-router';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const Root = () => {
    return (
        <div className='flex flex-col min-h-screen'>
       <Header></Header>
    <div className='flex-1'>
        <Outlet></Outlet>
    </div>
       <Footer></Footer>
        </div>
    );
};

export default Root;