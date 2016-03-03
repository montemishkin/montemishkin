// third party imports
import radium from 'radium'
import {IndexLink as ReactRouterIndexLink} from 'react-router'


// NOTE: since react-router's `IndexLink` just returns react-router's
// `Link` (with some props set), radium will not reach the actual dom
// nodes.  so right now, this does nothing to wrap it in radium
export default radium(ReactRouterIndexLink)
