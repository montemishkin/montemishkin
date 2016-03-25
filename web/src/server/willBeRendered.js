export default function willBeRendered(Component, renderProps) {
    return renderProps.components.indexOf(Component) !== -1
}
