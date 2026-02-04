import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { LoginAuth } from '../store/LoginStore';
import BookmarkAddedOutlinedIcon from '@mui/icons-material/BookmarkAddedOutlined';
import { useNavigate } from 'react-router-dom';

export function TopBar() {

    const dashboard = LoginAuth((state: any) => state.dashboard);
    const setDashboard = LoginAuth((state: any) => state.setDashboard);
    const navigate = useNavigate();

    return (
        <>
            <section id="top-bar">
                <section id="left-top">
                    {dashboard === "habits" ? (
                        <>
                            <span className="ec ec-blue-book text-4xl ml-6 mt-1"></span>
                            <section id="title-habits">Daily Habits Tracker</section>
                        </>
                    ) : dashboard === "finance" ? (
                        <>
                            <span className="ec ec-moneybag text-4xl ml-6 mt-1"></span>
                            <section id="title-habits">Finance tracker</section>
                        </>
                    ) : null}
                </section>

                <section id='search-top-bar'>
                    <SearchOutlinedIcon className='text-6l ml-3 mr-3' fontSize='medium' sx={{ color: '#416092' }}></SearchOutlinedIcon>
                    <input type="text" placeholder='Search' id='search-top-bar-input' />
                </section>
                
                <section id="options-top-bar">
                    {dashboard === "habits" ? (
                        <MonetizationOnOutlinedIcon sx={{ color: '#dfe0f1', marginLeft: '24px', cursor: 'pointer' }}
                            fontSize='large' onClick={() => { setDashboard("finance"); navigate("/finance") }} />
                    ) : dashboard === "finance" ? (
                        <BookmarkAddedOutlinedIcon sx={{ color: '#dfe0f1', marginLeft: '24px', cursor: 'pointer' }}
                            fontSize='large' onClick={() => { setDashboard("habits"); navigate("/habits") }} />
                    ) : null}
                    <AccountCircleIcon sx={{ color: '#dfe0f1', marginLeft: '24px' }} fontSize='large'></AccountCircleIcon>
                    <SettingsIcon sx={{ color: '#dfe0f1', marginLeft: '24px' }} fontSize='large'></SettingsIcon>
                </section>
            </section>
        </>
    )
}