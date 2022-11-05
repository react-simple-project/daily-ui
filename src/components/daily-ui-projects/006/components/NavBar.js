import React from 'react'
import styles from '../Project6.module.css'

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__items}>
        <li>
          <figure className={styles.figure}>
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_2" data-name="Layer 2" viewBox="0 0 72.87 84.75">
              <g id="Layer_1-2" data-name="Layer 1">
                <g>
                  <path class={styles['cls-2']} d="M14.98,0L0,15.06v.03s0,0,0,0v54.46H18.28v15.2l15.37-15.2h11.92l27.29-27.09-.12,.07h0s.13-.07,.13-.07V6.22h0V0H14.98Z" />
                  <polygon class={styles['cls-1']} points="66.65 39.31 54.7 51.25 42.54 51.28 31.93 61.89 31.93 51.53 18.24 51.53 18.24 6.22 66.65 6.22 66.65 39.31" />
                  <rect class={styles['cls-2']} x="34.91" y="16.57" width="6.22" height="18.41" />
                  <rect class={styles['cls-2']} x="51.67" y="16.57" width="6.22" height="18.41" />
                </g>
              </g>
            </svg>
          </figure>
        </li>
        <li>
          <figure className={styles.figure}>
            <svg width="100%" height="45px" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" >
              <g>
                <path fill-rule="evenodd" d="M7.828 13L10 15.172 12.172 13H15V5H5v8h2.828zM10 18l-3-3H5a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2l-3 3z" clip-rule="evenodd">
                </path>
              </g>
            </svg>
          </figure>
        </li>
        <li>
          <figure className={styles.figure}>
            <svg width="100%" height="45px" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" ><g><path fill-rule="evenodd" d="M4 3h12l2 4v10H2V7l2-4zm.236 4H8v1a1 1 0 001 1h2a1 1 0 001-1V7h3.764l-1-2H5.236l-1 2zM16 9h-2.17A3.001 3.001 0 0111 11H9a3.001 3.001 0 01-2.83-2H4v6h12V9z" clip-rule="evenodd"></path></g></svg>
          </figure>
        </li>
        <li>
          <figure className={styles.figure}>
            <svg width="100%" height="45px" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" ><g><path fill-rule="evenodd" clip-rule="evenodd" d="M13.798 10.456L10 6.657l-3.798 3.799L4 8.805V13h12V8.805l-2.202 1.65zM18 5v8a2 2 0 0 1-2 2H4a2.002 2.002 0 0 1-2-2V5l4 3 4-4 4 4 4-3z"></path></g></svg>
          </figure>
        </li>
      </ul>
    </nav >
  )
}
