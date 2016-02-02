// third party imports
import React, {Component, PropTypes} from 'react'
import chroma from 'chroma-js'
// local imports
import colors from 'assets/styles/js/colors'


const all = {
    fill: 'none',
    strokeWidth: 10,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
}


class ProjectsLogo extends Component {
    static propTypes = {
        bodyFill: PropTypes.string,
        eyeFill: PropTypes.string,
        noseFill: PropTypes.string,
        wingFill: PropTypes.string,
        hatRimFill: PropTypes.string,
        hatTopFill: PropTypes.string,
        bodyStroke: PropTypes.string,
        eyeStroke: PropTypes.string,
        noseStroke: PropTypes.string,
        wingStroke: PropTypes.string,
        leftLegStroke: PropTypes.string,
        leftFootStroke: PropTypes.string,
        rightLegStroke: PropTypes.string,
        rightFootStroke: PropTypes.string,
        hatRimStroke: PropTypes.string,
        hatTopStroke: PropTypes.string,
    }


    static defaultProps = {
        bodyFill: colors.primary.inverse,
        eyeFill: colors.background.inverse,
        noseFill: colors.primary.inverse,
        wingFill: colors.primary.inverse,
        hatRimFill: chroma(colors.background.inverse).brighten().css(),
        hatTopFill: chroma(colors.background.inverse).brighten().css(),
        bodyStroke: colors.background.inverse,
        eyeStroke: colors.background.inverse,
        noseStroke: colors.background.inverse,
        wingStroke: colors.background.inverse,
        leftLegStroke: colors.background.inverse,
        leftFootStroke: colors.background.inverse,
        rightLegStroke: colors.background.inverse,
        rightFootStroke: colors.background.inverse,
        hatRimStroke: colors.background.inverse,
        hatTopStroke: colors.background.inverse,
    }


    render() {
        const {
            bodyFill,
            eyeFill,
            noseFill,
            wingFill,
            hatRimFill,
            hatTopFill,
            bodyStroke,
            eyeStroke,
            noseStroke,
            wingStroke,
            leftLegStroke,
            leftFootStroke,
            rightLegStroke,
            rightFootStroke,
            hatRimStroke,
            hatTopStroke,
            ...unusedProps,
        } = this.props

        return (
            <svg {...unusedProps} viewBox='0 0 1000 1000'>
                <g
                    transform='matrix(0.97312777,0,0,0.97311315,11.11902,61.548416)'
                >
                    <path // body
                        {...all}
                        fill={bodyFill}
                        stroke={bodyStroke}
                        d='m 834.60938,169.07031 c -53.40833,13.64127 -245.78739,50.68952 -390.29102,73.60938 -13.82689,17.57301 -27.91798,36.74481 -42.60156,57.55078 -2.08083,2.94843 -4.19487,5.91507 -6.30664,8.87891 15.31367,-3.51429 32.22495,-5.41175 51.52734,-5.36915 102.78708,0.22684 146.00617,110.57999 117.81641,207.44922 -28.18976,96.86923 -189.90916,191.13705 -310.27149,185.04297 -19.66408,-0.99562 -37.67316,-3.80342 -54.29687,-8.24609 45.60425,55.83282 94.58095,102.92129 169.75781,124.38672 131.67983,37.59884 304.33478,-6.75873 399.98633,-117.75391 95.65154,-110.9952 136.73996,-208.57039 138.31445,-338.3125 0.89483,-73.73686 -26.27224,-141.17187 -73.63476,-187.23633 z'
                        transform='matrix(1.0276143,0,0,1.0276297,-11.426064,-63.248982)'
                    />
                    <path // wing
                        {...all}
                        fill={wingFill}
                        stroke={wingStroke}
                        d='m 448.023,249.14714 c 105.62547,0.2331 150.03664,113.63221 121.06844,213.17791 -28.9682,99.5457 -195.15316,196.41916 -318.83921,190.1567 C 126.56619,646.21929 66.22719,570.59626 10.236224,462.37771 50.68732,481.85475 128.79439,431.16627 217.586,368.17196 306.37759,305.17764 342.39752,248.91402 448.023,249.14714 Z'
                    />
                    <path // right leg
                        {...all}
                        stroke={rightLegStroke}
                        d='m 572.32776,777.33117 c 27.7938,61.93219 20.49435,120.848 9.6036,169.03027'
                    />
                    <path // right foot
                        {...all}
                        stroke={rightFootStroke}
                        d='m 632.76155,930.97393 c -1.68166,-26.15927 -19.2815,-50.33049 -40.74458,-69.82627 l -71.30304,57.24496'
                    />
                    <path // left leg
                        {...all}
                        stroke={leftLegStroke}
                        d='m 464.70013,785.90633 c 15.18214,60.98108 15.60151,119.33193 0,174.82841'
                    />
                    <path // left foot
                        {...all}
                        stroke={leftFootStroke}
                        d='m 514.95179,948.2925 c -2.63281,-31.76196 -20.73572,-58.32762 -39.38643,-80.49966 l -69.26579,62.9361'
                    />
                    <circle // eye
                        {...all}
                        fill={eyeFill}
                        stroke={eyeStroke}
                        cy='251.03983'
                        cx='774.96344'
                        r='40'
                    />
                    <path // nose
                        {...all}
                        fill={noseFill}
                        stroke={noseStroke}
                        d='m 913.37659,222.1105 c 22.69336,13.51366 45.08345,27.14864 81.14963,35.31301 -28.23796,13.29928 -54.93472,28.13979 -72.32164,52.29043 z'
                    />
                </g>
                <path // hat top
                    {...all}
                    fill={hatTopFill}
                    stroke={hatTopStroke}
                    transform='translate(108.19741,-20.262144)'
                    d='M 330.12352,226.36159 C 365.97083,171.87441 366.61841,44.487815 506.56934,30.221786 646.52027,15.955757 716.66798,151.95987 716.66798,151.95987'
                />
                <path // hat rim
                    {...all}
                    fill={hatRimFill}
                    stroke={hatRimStroke}
                    transform='translate(108.19741,-20.262144)'
                    d='m 166.55889,279.29019 c 3.83533,20.95499 564.80877,-84.82743 574.07362,-94.51423 9.26485,-9.6868 -1.89371,-29.53195 -11.62102,-32.95467 -9.7273,-3.42272 -566.28793,106.51391 -562.4526,127.4689 z'
                />
            </svg>
        )
    }
}


export default ProjectsLogo
