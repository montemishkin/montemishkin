/* common alt imports */
import alt from '../alt-instance'
import {create_responsive_store} from 'alt-responsive'


// export alt singleton store
export default alt.createStore(create_responsive_store({
    medium: 700,
    // large: 970,
}))


// end of file
