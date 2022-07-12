import './styles/Skillsphere.css'
import { Helmet } from 'react-helmet';
import TagCloud from 'TagCloud';
import { useEffect } from 'react';
// const container = '.tagcloud';


<Helmet>
    <script src="https://cdn.jsdelivr.net/npm/TagCloud@2.2.0/dist/TagCloud.min.js" async> </script>
</Helmet>

const Skillsphere = ({rad}) => {

    useEffect(() => {

        const myTags = [
            'JavaScript', 'CSS', 'HTML',
            'Python', 'Nextjs', 'Git',
            'GitHub', 'Node.js', 'Next.js',
            'TypeScript', 'MySQL', 'jQuery',
            'MongoDB', 'Material UI', 'Redux',
            'C', 'C++', 'React.js',
            'Tailwind CSS', 'MySQL', 'jQuery',
            'Ant Design', 'Babel', 'Bootstrap',
            'Express', 'Firebase', 'Insomnia',
            'JSON', 'Linux', 'Lodash',
            'Chakra UI', 'Postman', 'Vercel',
            'Canva', 'Netlify', 'Chart.js',
        ];

        // eslint-disable-next-line no-unused-vars
        var tagCloud = TagCloud('.content', myTags, {

            // radius in px
            radius: rad,

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

        }, []);
    })

    return (
        <div className='spherecontainer'>
            <div className="content"></div>
        </div>
    )
}


export default Skillsphere