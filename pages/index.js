import Layout from '../components/Layout';
import { getDbData } from '../lib/problems';
import Link from 'next/link';

export default function Home({ db }) {
    return (
        <Layout>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Problem ID</th>
                        <th scope="col">Problem title</th>
                        <th scope="col">Difficulty</th>
                        <th scope="col">Problem Link</th>
                        <th scope="col">Editorial</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(db).map(key => (
                            <tr key={key}>
                                <td>{key}</td>
                                <td>{db[key].title}</td>
                                <td>{db[key].difficulty}</td>
                                <a href={db[key].problem_url} target="_blank"><td>View Problem</td></a>
                                <Link href={`${process.env.ASSET_PREFIX}/problems/${key}`}>
                                    <td className="editorial-link">View editorial</td>
                                </Link> 
                            </tr>
                        ))
                    }
                </tbody>
            </table> 
        </Layout>
    );
}

export async function getStaticProps() {
    const db = getDbData();
    return {
        props: {
            db
        }
    }
}
  