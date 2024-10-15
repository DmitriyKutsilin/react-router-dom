import React from 'react';
import styles from "./components/Site.module.css";
import {Link, NavLink, Outlet, useNavigate} from 'react-router-dom';
import {S} from "./components/pages/_styles";
import {PATH} from "./routes/router";


function App() {
    const navigate = useNavigate()
    const navigateHandler = () => {
        navigate(-1)
    }

    return (
        <div>
            <div className={styles.header}>
                <h1>HEADER</h1>
            </div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <S.NewWrapper><NavLink to={PATH.ADIDAS}>Adidas</NavLink></S.NewWrapper>
                    <S.NewWrapper><NavLink to={PATH.PUMA}>Puma</NavLink></S.NewWrapper>
                    <S.NewWrapper><NavLink to={PATH.ABIBAS}>Abibas</NavLink></S.NewWrapper>
                    <S.NewWrapper><NavLink to={PATH.PRICES}>Цены для оптовиков</NavLink></S.NewWrapper>
                    <S.NewWrapper><NavLink to={PATH.PROTECTED}>ProtectedPage</NavLink></S.NewWrapper>
                </div>
                <div className={styles.content}>
                    {/*навигацию к адидас по дефолту можно сделать и в массиве public routes */}
                    {/*<Navigate to={PATH.ADIDAS}/>*/}
                    <div className={styles.HorizontalNavigation}>
                        <Link to={PATH.ADIDAS} className={styles.LinkLikeButton}>
                            Главная страница (ADIDAS)
                        </Link>
                        <button onClick={navigateHandler} className={styles.ButtonLikeLink}>НАЗАД</button>
                    </div>
                    <Outlet/>
                    {/*<Routes>*/}
                    {/*    <Route path="/" element={<Navigate to={PATH.PAGE1}/>}/>*/}
                    {/*    <Route path={PATH.PAGE1} element={<Adidas/>}/>*/}
                    {/*    <Route path={PATH.PAGE2} element={<Puma/>}/>*/}
                    {/*    <Route path={PATH.PAGE3} element={<Abibas/>}/>*/}
                    {/*    <Route path={PATH.PAGE4} element={<Prices/>}/>*/}

                    {/*    <Route path={'/:model/:id'} element={<Model/>}/>*/}
                    {/*    <Route path={'/:model/:id'} element={<Model/>}/>*/}

                    {/*    <Route path="/*" element={<Error404/>}/>*/}
                    {/*    <Route path="/adidas/*" element={<Error404/>}/>*/}

                    {/*    <Route path={PATH.ERROR404} element={<Error404/>}/>*/}
                    {/*    <Route path="/*" element={<Navigate to={PATH.ERROR404}/>}/>*/}
                    {/*</Routes>*/}
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}




export default App;
