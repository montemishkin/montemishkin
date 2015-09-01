/* common react imports */
import React from 'react/addons'
import radium from 'radium'
/* local imports */
import styles from './styles'


/**
 * Home page view.
 * @class
 */
@radium
class Home extends React.Component {
    render() {
        return (<div style={styles.container}>
            <ul>
                <li>short tagline for the site</li>
                <li>links to other parts of the site</li>
                <li>some features on display</li>
            </ul>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu
            lorem metus. Maecenas pretium mi enim, non varius justo porttitor
            quis. Nunc laoreet nulla faucibus quam ultrices sodales. Suspendisse
            porta, sapien quis aliquam efficitur, eros elit sollicitudin nulla,
            sit amet lobortis lectus libero sit amet ante. Donec venenatis
            venenatis felis vel pharetra. Fusce lacinia augue velit, at tempus
            libero porttitor sed. Nullam cursus sed dui consectetur scelerisque.
            Nulla egestas fermentum metus, at maximus libero semper non. Etiam
            sit amet efficitur tortor. Donec tincidunt imperdiet justo ac
            interdum. Cras rutrum leo nec nisl sodales finibus. Donec vehicula
            porttitor vestibulum. Praesent non laoreet erat, sit amet egestas
            sapien. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia Curae; Nunc at ornare magna. Vestibulum ac
            faucibus orci. Donec ultrices purus molestie malesuada viverra. Duis
            dolor odio, pretium eu posuere ut, tempus nec lacus. Nunc elit
            felis, interdum nec est eu, sagittis condimentum velit. Maecenas ac
            massa tellus. Vestibulum ut ligula est. Donec dignissim sed libero
            posuere consequat. Integer feugiat tristique dui ac lacinia.
            Nam convallis sit amet ligula eget finibus. Nulla cursus vestibulum
            nisl. Proin faucibus ex eget dapibus gravida. Sed pretium justo
            justo, vel eleifend ante cursus sit amet. Praesent enim sapien,
            auctor at mattis vel, congue ut purus. Interdum et malesuada fames
            ac ante ipsum primis in faucibus. Nullam at iaculis massa, sit amet
            blandit sapien. Nam egestas felis at mauris pellentesque, in tempus
            justo accumsan. Donec faucibus, dui ultrices maximus sollicitudin,
            urna eros tempus lorem, ut euismod sapien augue a mi.
            In elementum felis quis dapibus iaculis. Proin eget posuere erat.
            Praesent suscipit posuere augue sit amet condimentum. Nam ultrices
            sodales facilisis. Aliquam commodo lacus ut tellus pretium
            tincidunt. In facilisis est arcu, at ultricies nulla tristique non.
            In cursus lacus id finibus pretium. Nulla facilisi. Nam ante dolor,
            efficitur in tincidunt et, volutpat eget dui.
            Pellentesque ac ligula vel elit luctus ornare. Vivamus eget urna
            nibh. Vestibulum facilisis tincidunt mi, ut convallis mi rutrum non.
            Maecenas tempor sollicitudin dolor, eu viverra risus mattis non.
            Cras semper lectus velit. Donec fringilla sem id posuere
            consectetur. Morbi id sem ac mauris dictum viverra. Fusce mattis
            nunc vel feugiat hendrerit.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Cras eu lorem metus. Maecenas pretium mi enim, non
            varius justo porttitor quis. Nunc laoreet nulla faucibus quam
            ultrices sodales. Suspendisse porta, sapien quis aliquam efficitur,
            eros elit sollicitudin nulla, sit amet lobortis lectus libero sit
            amet ante. Donec venenatis venenatis felis vel pharetra. Fusce
            lacinia augue velit, at tempus libero porttitor sed. Nullam cursus
            sed dui consectetur scelerisque.
            Nulla egestas fermentum metus, at maximus libero semper non. Etiam
            sit amet efficitur tortor. Donec tincidunt imperdiet justo ac
            interdum. Cras rutrum leo nec nisl sodales finibus. Donec vehicula
            porttitor vestibulum. Praesent non laoreet erat, sit amet egestas
            sapien. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia Curae; Nunc at ornare magna. Vestibulum
            ac faucibus orci. Donec ultrices purus molestie malesuada viverra.
            Duis dolor odio, pretium eu posuere ut, tempus nec lacus. Nunc elit
            felis, interdum nec est eu, sagittis condimentum velit. Maecenas ac
            massa tellus. Vestibulum ut ligula est. Donec dignissim sed libero
            urna nibh. Vestibulum facilisis tincidunt mi, ut convallis mi rutrum
            non. Maecenas tempor sollicitudin dolor, eu viverra risus mattis
            non. Cras semper lectus velit. Donec fringilla sem id posuere
            consectetur. Morbi id sem ac mauris dictum viverra. Fusce mattis
            nunc vel feugiat hendrerit.</p>
        </div>)
    }
}


// export component
export default Home


// end of file
