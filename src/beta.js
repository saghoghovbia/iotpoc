import './beta.css'

function Beta(){

    return (
        <div className = 'hero'>
             <div className = 'navbar'>
                    <img src='https://freepngimg.com/thumb/chibi/12-2-chibi-download-png.png' alt='MAL Logo' className= 'logo'></img>
                    {/* <button type='button'>Yerr</button> */}
                </div>
            <div className = 'content'>
                <div className = 'text'>
                <small>Temp text for transporter</small>
                <h1>Active <br></br>
                Return message</h1>
                </div>
                {/* <button type="button">Aye</button> */}
                </div>
                <div className='sidebar'>
                    <img src='https://images6.fanpop.com/image/photos/35800000/Killua-killua-zoldyck-2011-35806939-500-281.gif' alt='HxH' className='menu'></img>
            
                <div className='social-link'>
                    <a href='https://myanimelist.net' target='_blank'><img src='http://pbs.twimg.com/profile_images/1190380284295950339/Py6XnxvH_400x400.jpg' alt='MAL Logo'></img></a>
                </div>
                
            </div>
        </div>
    )
}

export default Beta;