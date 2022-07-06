import './styles/Skillsphere.css'
import { Helmet } from 'react-helmet';
import TagCloud from 'TagCloud';
import { useEffect } from 'react';
// const container = '.tagcloud';

<Helmet>
    <script src="https://cdn.jsdelivr.net/npm/TagCloud@2.2.0/dist/TagCloud.min.js" async> </script>
</Helmet>

const Skillsphere = () => {

    useEffect(() => {

        const myTags = [
            'JavaScript', 'CSS', 'HTML',
            'C', 'C++', 'React',
            'Python', 'Nextjs', 'git',
            'GitHub', 'Node.js', 'OpenCV',
            'GCP', 'MySQL', 'jQuery',
        ];

        // eslint-disable-next-line no-unused-vars
        var tagCloud = TagCloud('.content', myTags, {

            // radius in px
            radius: 250,

            // animation speed
            // slow, normal, fast
            maxSpeed: 'fast',
            initSpeed: 'fast',

            // 0 = top
            // 90 = left
            // 135 = right-bottom
            direction: 135,

            // interact with cursor move on mouse out
            keep: true

        },[]);
    })

    return (
        <div>
            <span className="content"></span>
        </div>
    )
}


export default Skillsphere