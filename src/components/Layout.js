import React from 'react';
import {Global, css} from '@emotion/react'

function Layout({children}) {
    return (
        <>
            <Global
                styles={css`
                body, html {
                    height: 100%;
                    width: 100%;
                }
                * {
                    margin:0;
                    padding: 0;
                    font-size: 1rem;
                    font-family: -apple-system, 'Roboto', sans-serif, serif;
                    color: #343747;
                    background-color: #f2f2f2;
                }

                .mainWrapper {
                    display:flex;
                    flex-direction: column;
                    min-height: 100vh;
                    
                }
                main {
                    flex: 1;
                }

           `}></Global>
            <div className="mainWrapper"> 
                <header css={css`font-size: 116px; font-weight: bold; color: green;`}>Harish</header>
                <main> {children} </main>
                <footer> &copy; 2021</footer>
            </div>
        </>
    )
}

export default Layout;
