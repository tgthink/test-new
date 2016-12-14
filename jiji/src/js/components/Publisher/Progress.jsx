import React from 'react';
import style from './Progress.less';
//import CircleProgress
//import $ from 'jquery';
// window.$ = $;
// window.jQuery = $;
// import jQuery from 'jquery';
import circleProgress from 'circleProgress';
//jvectormap: plugins_dir + '/jvectormap/jquery-jvectormap-1.2.2.min.js',

class Progress extends React.Component {
    constructor(...args) {
        super(...args);
        // 定义 state
        this.state = {
            content: ''
        }
    }

    componentDidMount() {
    	//$(".aaa").html("aaaaaaaaaaaaaaaaaaa");
        console.log(Math.PI);
		$('#progress').circleProgress({
            startAngle: -Math.PI*1.25,
		    value: 0.75,
            thickness: 10,
            size: 200,
		    //animation: false,
            lineCap: 'round',
            fill: {
                gradient: ["#e3625a", "#f0b687"]
            },
            // fill: {
            //     color: 'rgba(0, 0, 0, .1)', // fallback color when image is not loaded
            //     image: 'http://i.imgur.com/pT0i89v.png'
            // },
            //fill: { color: '#ffa500' }
		    //fill: { gradient: ['#ff1e41', '#ff5f43'] }
            //emptyFill: "rgba(0, 0, 0, .5)"
            emptyFill: "transparent"//"#323c46"
		}).on('circle-animation-progress', function(event, progress) {
            //console.log(progress);
            $(this).find('strong').html("asdfasf");
        });
    }
    render() {
        return (
		    <div id="progress" className="circle">
                <strong></strong>
		    </div>
        );
    }
}

export default Progress;
























