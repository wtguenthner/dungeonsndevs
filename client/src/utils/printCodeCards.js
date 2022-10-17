import { QUERY_CARDS } from './queries';
import { useQuery } from '@apollo/client';
import CodeCard from '../components/Graphics/CodeCard';
import '../assets/css/Snippets.css';

export default function CodeCards() {
    const { loading, error, data } = useQuery(QUERY_CARDS);

    if (loading) return `Loading...`;
    if (error) return `Error! ${error.message}`;

    return (
        <>
            <div id="terminal">
                {data.me.savedCards.map((card) => (
                    <CodeCard title={card.name} description={card.description} snippet={card.codeSnippet} shopDescription={card.shopDescription} />
                ))}
                {console.log(data)}
            </div>
        </>
    )
};