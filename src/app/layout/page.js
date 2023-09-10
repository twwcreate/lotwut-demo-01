
import styles from '../styles/Layout.module.css';


export default function Layout( { children }){
    return (
        <div className="flex w-screen p-20 bg-blue-400">
            <div className="m-auto bg-slate-50 rounded-md grid">
                {/* <div className={styles.imgStyle}>
                    <div className={styles.cartoonImg}></div>
                    <div className={styles.cloud_one}></div>
                    <div className={styles.cloud_two}></div>
                </div> */}
                <div className="flex flex-col justify-evenly">
                    <div className="text-center py-10">
                        {children}
                    </div>
                </div>
            </div>
  
        </div>
    )
}