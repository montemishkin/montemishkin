// third party imports
import React, {Component} from 'react'
import radium from 'radium'
// local imports
import styles from './styles'
import List from 'components/List'
import Link from 'components/Link'


@radium
export default class Bio extends Component {
    render() {
        return (
            <article style={styles.container}>
                <section style={styles.section}>
                    <h3 style={styles.sectionTitle}>
                        Hello
                    </h3>
                    <p style={styles.p}>
                        I{"'"}m a full stack web developer with a passion for
                        designing great experiences from the bottom up.
                    </p>
                </section>
                <section style={styles.section}>
                    <h3 style={styles.sectionTitle}>
                        Technical Skills
                    </h3>
                    <p style={styles.p}>
                        For the most part, my projects involve some combination of these awesome technologies:
                    </p>
                    <List style={styles.list} listItemStyle={styles.listItem}>{[
                        'React',
                        'Redux (Flux)',
                        'GraphQL',
                        'Node',
                        'Django',
                    ]}</List>
                    <p style={styles.p}>
                        However, on occasion, you might see me put out an album, or maybe a video game.
                        To that end, here are some other great programs I have experience with:
                    </p>
                    <List style={styles.list} listItemStyle={styles.listItem}>{[
                        'Ableton Live',
                        'Blender',
                        'Unity',
                    ]}</List>
                    <p style={styles.p}>
                        You can keep up with my latest works over
                        {' '}<Link style={styles.link} to='/projects'>
                            here
                        </Link>
                        !
                    </p>
                </section>
                <section style={styles.section}>
                    <h3 style={styles.sectionTitle}>
                        Other Hats I Wear
                    </h3>
                    <List style={styles.list} listItemStyle={styles.listItem}>{[
                        'Aspiring video game architect.',
                        'Musician.',
                        'Educator.',
                        'Avocational mathematician and physicist.',
                        'Analytical thinker with excellent problem solving skills.',
                    ]}</List>
                </section>
                <section style={styles.section}>
                    <h3 style={styles.sectionTitle}>
                        Blog
                    </h3>
                    <p style={styles.p}>
                        I have yet to get in the habit of writing blog posts consistently,
                        but over at
                        {' '}<Link style={styles.link} to='/posts'>
                            my blog
                        </Link>{' '}
                        you can expect to find articles relating to:
                    </p>
                    <List style={styles.list} listItemStyle={styles.listItem}>{[
                        'my experiences with various technologies.',
                        'miscellaneous meanderings about math and/or physics.',
                        'other experiences and exciting things I want the world to know about!',
                    ]}</List>
                </section>
            </article>
        )
    }
}
