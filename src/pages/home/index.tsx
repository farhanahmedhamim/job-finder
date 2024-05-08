import { useState } from "react";
import Filters from "../../components/filters";
import Hero from "../../components/hero"
import Services from "../../components/services"
import WelcomeText from "../../components/welcomeText";
import { jobs } from "../../data/jobs";
import Searchbar from "../../components/searchbar";
import ListedJobs from "../../components/ListedJobs";
import PopularSearches from "../../components/PopularSearches";

const Home = () => {

    const [filterJobs, setFilterJobs] = useState(jobs);

    const [savedJobs, setSevedJobs] = useState<number[]>([]);

    const handleFilterChange = (filters: { contractStatus: string[], workStatus: string[] }) => {
        let filtred = [...jobs];
        if (filters.contractStatus.length > 0) {
            filtred = filtred.filter((job) => filters.contractStatus.includes(job.contractStatus));
        }

        if (filters.workStatus.length > 0) {
            filtred = filtred.filter((job) => filters.workStatus.includes(job.workStatus));
        }

        setFilterJobs(filtred);
    };



    const handleSearch = (query: string) => {
        const filtered = jobs.filter((job) => job.title.toLowerCase().includes(query.toLowerCase()));
        setFilterJobs(filtered);
    };

    return (
        <div className="w-full">
            <Hero />
            <Services />
            <div className="w-full mt-12 mb-16">
                <WelcomeText />
                <div className="w-full flex md:flex-row flex-col items-start relative md:px-16 px-5 gap-9">
                    <Filters savedJobs={savedJobs} onFilterChange={handleFilterChange} />
                    <div className="w-full">
                        <Searchbar onSearch={handleSearch} />
                        <PopularSearches onSearch={handleSearch} />
                        <ListedJobs jobs={filterJobs} savedJobs={savedJobs} setSevedJobs={setSevedJobs} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;