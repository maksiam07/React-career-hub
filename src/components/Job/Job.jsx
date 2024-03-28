import { CiLocationOn } from "react-icons/ci";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { Link } from "react-router-dom";


const Job = ({job}) => {
    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary, job_description} = job 
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">{job_title}</h2>
              <p>{company_name}</p>
              <div className="space-x-2">
                <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE]">{remote_or_onsite}</button>
                <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE]">{job_type}</button>
              </div>
              <div className="flex gap-6">
              <div className="flex gap-2">
                <CiLocationOn className="text-2xl"></CiLocationOn>
                <h2>{location}</h2>
              </div>
              <div className="flex gap-2">
                <HiOutlineCurrencyDollar className="text-2xl"></HiOutlineCurrencyDollar>
                <h2>{salary}</h2>
              </div>
              </div>
              <div className="card-actions">
                <Link to={`/job/${id}`}>
                <button className="btn btn-primary">View Details</button>
                </Link>
              </div>
            </div>
        </div>
    );
};

export default Job;