import React from 'react'
import $ from "jquery";
import './styles/Projects.css'
import Project from './Project';
import { name, description,url,limage, mimage } from './../../../utils/ProjectsInfo';
import { useMediaQuery } from 'react-responsive'



$(window).scroll(function () {

    // selectors
    var $window = $(window),
        $body = $('.p_body'),
        $panel = $('.panel');

    // Change 33% earlier than scroll position so colour is there when you arrive.
    var scroll = $window.scrollTop() + ($window.height() / 3);

    $panel.each(function () {
        var $this = $(this);

        // if position is within range of this panel.
        // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
        // Remember we set the scroll to 33% earlier in scroll var.
        if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {

            // Remove all classes on body with color-
            $body.removeClass(function (index, css) {
                return (css.match(/(^|\s)color-\S+/g) || []).join(' ');
            });

            // Add class of currently active div
            $body.addClass('color-' + $(this).data('color'));
        }
    });

}).scroll();

const Projects = () => {

    const isMobile = useMediaQuery({ query: '(max-width: 420px)' })

    return (
        <div className="p_body">
            <div className="panel">
                <Project
                    card_direction="right"
                    name={name[0]}
                    description={description[0]}
                    url={url[0]}
                    image={isMobile ? mimage[0]: limage[0]}
                />
            </div>
            <div className="panel" data-color="violet">
                <Project
                    card_direction="left"
                    name={name[1]}
                    description={description[1]}
                    url={url[1]}
                    image={isMobile ? mimage[1]: limage[1]}

                />
            </div>
            <div className="panel" data-color="blue">
                <Project
                    card_direction="right"
                    name={name[2]}
                    description={description[2]}
                    url={url[2]}
                    image={isMobile ? mimage[2]: limage[2]}
                />
            </div>
            <div className="panel" data-color="green">
                <Project
                    card_direction="left"
                    name={name[3]}
                    description={description[3]}
                    url={url[3]}
                    image={isMobile ? mimage[3]: limage[3]}
                />
            </div>
            <div className="panel" data-color="orange">
                <Project
                    card_direction="right"
                    name={name[4]}
                    description={description[4]}
                    url={url[4]}
                    image={isMobile ? mimage[4]: limage[4]}
                />
            </div>
        </div>
    )
}

export default Projects