import React from 'react'
import styles from './Input.module.css'

class Input extends React.Component {
    render() {
        return(
            <div className={styles.input}>
                <h2>Speed Read Content</h2>
                <textarea placeholder='Enter content here...'/>
            </div>
        );
    }
}

export default Input