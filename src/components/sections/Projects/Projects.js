import React from 'react'
import $ from "jquery";
import './styles/Projects.css'
import Project from './Project';
import { name, description,url } from './../../../utils/ProjectsInfo';


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
    return (
        <div className="p_body">
            <div className="panel">
                <Project
                    card_direction="right"
                    name={name[0]}
                    description={description[0]}
                    url={url[0]}
                />
            </div>
            <div className="panel" data-color="violet">
                <Project
                    card_direction="left"
                    name={name[1]}
                    description={description[1]}
                    url={url[1]}
                />
            </div>
            <div className="panel" data-color="blue">
                <Project
                    card_direction="right"
                    name={name[2]}
                    description={description[2]}
                    url={url[2]}

                />
            </div>
            <div className="panel" data-color="green">
                <Project
                    card_direction="left"
                    name={name[3]}
                    description={description[3]}
                    url={url[3]}

                />
            </div>
            <div className="panel" data-color="orange">
                <Project
                    card_direction="right"
                    name={name[4]}
                    description={description[4]}
                    url={url[4]}

                />
            </div>
        </div>
    )
}

export default Projects