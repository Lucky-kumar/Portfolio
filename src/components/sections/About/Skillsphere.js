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
            'C', 'C++', 'React.js',
            'Python', 'Nextjs', 'Git',
            'GitHub', 'Node.js', 'Next.js',
            'TypeScript', 'MySQL', 'jQuery',
            'MongoDB', 'Material UI', 'Redux',
            'Tailwind CSS', 'MySQL', 'jQuery',
            'Ant Design', 'Babel', 'Bootstrap',
            'Canva', 'Chakra UI', 'Chart.js',
            'Express', 'Firebase', 'Insomnia',
            'JSON', 'Linux', 'Lodash',
            'Nodemon', 'Postman', 'Vercel',
            'Vercel', 'Netlify', 'Sass',
        ];

        // eslint-disable-next-line no-unused-vars
        var tagCloud = TagCloud('.content', myTags, {

            // radius in px
            radius: 300,

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
        <div className='spherecontainer'>
            <div className="content"></div>
        </div>
    )
}


export default Skillsphere