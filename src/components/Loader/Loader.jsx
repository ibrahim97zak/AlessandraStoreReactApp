import React from 'react'
import style from './Loader.module.css';

function Loader() {
  return (
    <div className={`${style.loaderContainer}`}>
        <div className={style["spinner"]}>
  <div className={style["bounce1"]}></div>
  <div className={style["bounce2"]}></div>
  <div className={style["bounce3"]}></div>
</div>

    </div>
  )
}

export default Loader