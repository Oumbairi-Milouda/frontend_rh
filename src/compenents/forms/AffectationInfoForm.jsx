import  {useState}from "react";

const AffectationInfoForm = () =>{
    const [formData, setFormData] = useState({
        Entité: '',
        DateAffectation: '',
        Poste: '',
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
      };
    
    return(
        <>
        <div className="flex items-center justify-center p-4 mt-4 text-2xl font-bold ">
          <h1>Les affectations  :</h1>
        </div>
        <div className="flex items-center justify-center min-h-screen">     
          <form onSubmit={handleSubmit} className="space-y-4 mb-40 block w-1/2 p-2 border border-gray-300 rounded-md">

          <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 ">
          <label htmlFor="Entité" className="block text-sm font-medium text-gray-700">Entité :</label>
          <input type="text" name="Entité" id="Entité" value={formData.Entité} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>

        <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 ">
          <label htmlFor="DateAffectation" className="block text-sm font-medium text-gray-700">Date Affectation :</label>
          <input type="date" name="DateAffectation" id="DateAffectation" value={formData.DateAffectation} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>

        <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 ">
          <label htmlFor="Poste" className="block text-sm font-medium text-gray-700">Poste :</label>
          <input type="text" name="Poste" id="Poste" value={formData.Poste} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>

        <div className="bg-white shadow-md rounded-lg m-6 p-6 focus:border-blue-500 focus:ring-blue-500 ">
          <button type="submit" className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">Soumettre</button>
        </div>
          </form>
    </div>
    </>      

    );
}
export default AffectationInfoForm