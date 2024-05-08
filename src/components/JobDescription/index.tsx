import { useNavigate, useParams } from "react-router";
import { jobs } from "../../data/jobs";
import { BusinessOutline, LocationOutline, NewspaperOutline } from "react-ionicons";

const JobDescription = () => {
    const params = useParams();
    const job = jobs[Number(params.jobId)] ? jobs[Number(params.jobId)] : jobs[0];
    const navigate = useNavigate();

    return (
        <div className="w-full flex flex-col gap-16 items-center">
            <div className="w-full bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h1 className="text-xl font-semibold text-indigo-500 mb-4">Job Description</h1>
                <p className="text-gray-600 leading-7" dangerouslySetInnerHTML={{ __html: job.description || "" }}></p>
                <h2 className="text-lg font-semibold text-indigo-500 mt-6 mb-2">Job Requirements</h2>
                <p className="text-gray-600 leading-7" dangerouslySetInnerHTML={{ __html: job.requirements || "" }}></p>
                <h2 className="text-lg font-semibold text-indigo-500 mt-6 mb-2">About Us</h2>
                <p className="text-gray-600 leading-7" dangerouslySetInnerHTML={{ __html: job.about || "" }}></p>
            </div>
            <div className="w-full">
                <h2 className="text-xl font-semibold text-indigo-500 mb-4">Similar Jobs</h2>
                <div className="w-full flex lg:flex-row flex-col gap-5">
                    {jobs.slice(0, 3).map((job) => (
                        <div key={job.id} className="w-full bg-white rounded-lg p-6 shadow-sm border border-gray-200 flex flex-col gap-4">
                            <img src={job.logo} alt={job.title} className="w-20 h-20 object-cover rounded-full" />
                            <div className="flex flex-col gap-2">
                                <span className="text-lg font-semibold text-indigo-500">{job.title}</span>
                                <div className="flex items-center gap-2">
                                    <BusinessOutline width={"18px"} height={"18px"} color="#555" />
                                    <span className="text-[14px] font-medium text-gray-600">{job.company}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <LocationOutline width={"18px"} height={"18px"} color="#555" />
                                    <span className="text-[14px] font-medium text-gray-600">{job.workStatus}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <NewspaperOutline width={"18px"} height={"18px"} color="#555" />
                                    <span className="text-[14px] font-medium text-gray-600">{job.contractStatus}</span>
                                </div>
                            </div>
                            <button onClick={() => navigate(`/jobs/${job.id}`)} className="text-white font-bold text-lg rounded-md bg-indigo-500 py-2 px-4">Apply</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default JobDescription;
