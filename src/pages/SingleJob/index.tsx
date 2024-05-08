import JobDescription from "../../components/JobDescription"
import JobSidebar from "../../components/JobSidebar"

const SingleJob = () => {
    return (
        <div className="w-full mt-28 mb-16">
            <div className="w-full flex md:flex-row flex-col items-start relative md:px-16 px-9 gap-8">
                <JobSidebar />
                <div className="w-full">
                    <JobDescription />
                </div>
            </div>
        </div>
    )
}

export default SingleJob