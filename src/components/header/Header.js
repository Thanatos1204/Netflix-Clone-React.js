import './Header.css';

function Header(){
    return <header>
        <div className="header-inner-shadow"></div>    
            <div className="header-content">
                <div className="header-billboard">
                    <img src ='https://occ-0-769-38.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABTwVvYRqhBOXe6CpgpcizObkDDoK1IMv8_v98tjlA7lyvTFmpEP508Q4rGUyBQ29xVQvT6pHqVYBiz-S75b9j_7TEdf4nNFqMzfARsPCdnsZyCHpiNxvz0Cy-7JDmoDjdPg8lJx4SM7NHH9tdYImSnzXw908vPQtG8WQaeZlLxaZAgtWJKmOtw.png?r=d23'
                        alt="billboard"/>
                </div>
                <div className="">
                    <h4 className="header-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Integer quis fringilla urna. 
                    Sed facilisis est eros, sit amet aliquet enim pellentesque vitae. 
                    Cras eu porttitor eros. Proin nec libero semper, tincidunt tellus a, facilisis ex. 
                    In bibendum vestibulum leo quis dapibus. 
                    Donec suscipit odio erat.
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices 
                    posuere cubilia curae; Nullam orci ante, euismod a nunc eu, tincidunt tincidunt dolor.                
                    </h4>

                    <div className="header-buttons">
                        <button className="header-button play-button">
                            
                                    <svg
                                        width='24'
                                        height='24'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                        >
                                        <path
                                            d='M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z'
                                            fill='currentColor'
                                        >                                        
                                        </path>
                                    </svg>

                            Play
                            </button>
                        <button className="header-button more-info-button">
                            
                        <svg
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                            >
                            <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z'
                                fill='currentColor'
                            >                            
                            </path>
                        </svg>

                            More Info
                            </button>
                    </div>
                </div>
            </div>
          
    </header>
}

export default Header;