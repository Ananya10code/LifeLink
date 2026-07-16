import { useState } from "react";
import DonorCard from "../../components/dashboard/DonorCard";

function Donors() {

  const [donors] = useState([
    {
      id:1,
      name:"Ananya Kushwah",
      city:"Bhopal",
      blood:"O+",
      available:true
    },
    {
      id:2,
      name:"Rahul Sharma",
      city:"Delhi",
      blood:"A+",
      available:true
    },
    {
      id:3,
      name:"Priya Singh",
      city:"Indore",
      blood:"B-",
      available:false
    },
    {
      id:4,
      name:"Amit Verma",
      city:"Jaipur",
      blood:"AB+",
      available:true
    }
  ]);

  return (

    <div>

      <h1 className="text-3xl font-bold mb-8">
        Find Donors
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {donors.map((donor)=>(
          <DonorCard
            key={donor.id}
            donor={donor}
          />
        ))}

      </div>

    </div>

  );
}

export default Donors;