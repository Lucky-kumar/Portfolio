import React from 'react'
import $ from "jquery";
import './styles/ProjectsBg.css'

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

const ProjectsBg = () => {
    return (
        <div className="p_body">
            <div className="panel" data-color="white">
     
            </div>
            <div className="panel" data-color="violet">
                <h2>Violet panel</h2>
            </div>
            <div className="panel" data-color="indigo">
                <h2>Indigo panel</h2>
            </div>
            <div className="panel" data-color="blue">
                <h2>Blue panel</h2>
            </div>
            <div className="panel" data-color="green">
                <h2>Green panel</h2>
            </div>
            <div className="panel" data-color="yellow">
                <h2>Yellow panel</h2>
            </div>
            <div className="panel" data-color="orange">
                <h2>Orange panel</h2>
            </div>
            <div className="panel" data-color="red">
                <h2>Red panel</h2>
            </div>
        </div>
    )
}

export default ProjectsBg