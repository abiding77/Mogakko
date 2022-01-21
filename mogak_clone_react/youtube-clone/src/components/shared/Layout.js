import styles from './Layout.module.css';
import Header from './Header';
import Menu from './Menu';
import { useState } from 'react';

function Layout({ children, activeMenu }) {

    const [menuState, setMenu] = useState(true);
    function controlMenu(){
        setMenu(menuState=>!menuState);
    }
    return (
      <div className={styles.container}>
        <Header controlMenu={controlMenu}/>
        <div className={styles.layout}>
            {
                menuState
                ?<Menu activeMenu={activeMenu} /> :null
            }
          <div className={styles.contents}>{children}</div>
        </div>
      </div>
    );
  }
  
  export default Layout;