import Sidebar from '../../components/Sidebar';

import { Outlet } from 'react-router-dom'


function Home(props) {

    const viewHeight = window.outerHeight
    return (

        <>
            <div className="sidebar">
                <Sidebar state={props.state} setstate={props.setstate} />

            </div>

            <div className="comp">
                <Outlet />
            </div>
        </>
    );
}

export default Home;