/* common react imports */
import React from 'react'
import radium from 'radium'
/* local imports */
import styles from './styles'
import Sage from './Sage'


/**
 * Home page view.
 * @class
 */
@radium
class Home extends React.Component {
    render() {
        return (<div style={styles.container}>
            <h2 style={styles.welcome}>
                Welcome!
            </h2>
            <h2>
                To a place where
            </h2>
            <Sage />
            <h2>
                ANYTHING
            </h2>
            <h2>
                IS
            </h2>
            <h2>
                POSSIBLE!
            </h2>
            <h3>
                Welcome to the website for that guy who owns this website!
            </h3>
            <p>
                My name is Monte Mishkin and I am the guy with the website!
                To find out more about me, click on this toaster.
                To find out less about me, turn off your device, walk away,
                and forget this ever happened.
                I also have some projects you can take a look at.
                Oh, and a resume.
                And what website would be complete without a blog?
                Anyways, feel free to snoop around.
            </p>
        </div>)
    }
}


// export component
export default Home


// end of file
