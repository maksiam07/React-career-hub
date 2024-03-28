import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveStoredJobApplication } from "../../utility/localStorage";

const JobDetail = () => {
    const jobs = useLoaderData()
    const {id} = useParams()
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt);
    console.log(job)

    const handleApplyJob = () =>{
        saveStoredJobApplication(id)
        toast('You have applied successfully')
    }

    return (
        <div>
            <h2>jobs Details of id: {job.job_title}</h2>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3">
                    <p>{job.company_name}</p>
                    <p><span className="text-xl font-semi-bold">Job_description:</span> {job.job_description}</p>
                    <p><span className="text-xl font-semi-bold">Job_responsibility: </span>{job.job_responsibility}</p>
                    <p><span className="text-xl font-semi-bold">Educational_requirements: </span>{job.educational_requirements}</p>
                    <p><span className="text-xl font-semi-bold">Experiences: </span>{job.experiences}</p>
                </div>
                <div className="border md:col-span-1">
                    <div>
                        <h2>Job details</h2>
                        <hr className="w-3/4 mx-auto"/>
                        <p>Salary: {job.salary}</p>
                        <p>Job Title: {job.job_title}</p>
                    </div>
                    <div>
                        {
                            
                        }
                    </div>
                    <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetail;