// third party imports
import React, {Component, PropTypes} from 'react'
// local imports
import colors from 'assets/styles/js/colors'


const all = {
    fill: 'none',
    stroke: 'black',
    strokeWidth: 10,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
}


class BaseLogo extends Component {
    static propTypes = {
        bodyFill: PropTypes.string,
        eyeFill: PropTypes.string,
        noseFill: PropTypes.string,
        wingFill: PropTypes.string,
        bodyStroke: PropTypes.string,
        eyeStroke: PropTypes.string,
        noseStroke: PropTypes.string,
        wingStroke: PropTypes.string,
        leftLegStroke: PropTypes.string,
        leftFootStroke: PropTypes.string,
        rightLegStroke: PropTypes.string,
        rightFootStroke: PropTypes.string,
    }


    static defaultProps = {
        bodyFill: colors.primary.inverse,
        eyeFill: colors.background.inverse,
        noseFill: colors.primary.inverse,
        wingFill: colors.primary.inverse,
        bodyStroke: colors.background.inverse,
        eyeStroke: colors.background.inverse,
        noseStroke: colors.background.inverse,
        wingStroke: colors.background.inverse,
        leftLegStroke: colors.background.inverse,
        leftFootStroke: colors.background.inverse,
        rightLegStroke: colors.background.inverse,
        rightFootStroke: colors.background.inverse,
    }


    render() {
        const {
            bodyFill,
            eyeFill,
            noseFill,
            wingFill,
            bodyStroke,
            eyeStroke,
            noseStroke,
            wingStroke,
            leftLegStroke,
            leftFootStroke,
            rightLegStroke,
            rightFootStroke,
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
                        d='M 674.49023,3.5039062 C 556.68307,4.3874577 487.81252,73.647256 397.17383,202.08008 c -2.13829,3.0299 -4.31233,6.07927 -6.48242,9.125 15.73655,-3.61138 33.11576,-5.56136 52.95117,-5.51758 105.62547,0.2331 150.03851,113.63399 121.07031,213.17969 -28.9682,99.5457 -195.15379,196.41871 -318.83984,190.15625 -20.20709,-1.02313 -38.71412,-3.90919 -55.79688,-8.47461 46.86358,57.37547 97.1925,105.76571 174.44531,127.82422 135.31608,38.63769 312.74031,-6.94587 411.03321,-121.00782 C 873.84758,493.30326 916.06953,393.03193 917.6875,259.70508 919.30546,126.37824 831.68238,13.068191 698.72656,4.2421875 690.41682,3.6905623 682.34405,3.4450028 674.49023,3.5039062 Z'
                        transform='translate(4.2108383,43.196452)'
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
            </svg>
        )
    }
}


export default BaseLogo
