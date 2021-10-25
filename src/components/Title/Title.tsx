import React from 'react'
import styles from './Title.module.css'

type TitleProps = {}

export default function TitleElement({}: TitleProps) {
    return (
        <>
        <div className={styles.title}>
            <h1>Token Spice</h1>        
            <p>Create your own <a href="https://arxiv.org/pdf/2103.12732.pdf" target="_blank"> Automated Market Maker </a>
            graphs for the <a href="https://market.oceanprotocol.com/" target="_blank"> Ocean Protocol Marketplace.</a>
            </p>
        </div>
        <hr />
        </>
    )
}