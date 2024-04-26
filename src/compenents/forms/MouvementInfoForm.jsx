import  {useState}from "react";

const MouvementInfoForm = () =>{
    const [formData, setFormData] = useState({
        Administration: '',
        DateDebut: '',
        DateFin: '',
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
          <h1>Les mouvements  :</h1>
        </div>
        <div className="flex items-center justify-center min-h-screen">     
          <form onSubmit={handleSubmit} className="space-y-4 mb-40 block w-1/2 p-2 border border-gray-300 rounded-md">

          <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 ">
          <label htmlFor="Administration" className="block text-sm font-medium text-gray-700">Administration :</label>
          <input type="text" name="Administration" id="Administration" value={formData.Administration} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>

        <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 ">
          <label htmlFor="DateDebut" className="block text-sm font-medium text-gray-700">Date Debut :</label>
          <input type="date" name="DateDebut" id="DateDebut" value={formData.DateDebut} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>

        <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 ">
          <label htmlFor="DateFin" className="block text-sm font-medium text-gray-700">Date Fin :</label>
          <input type="date" name="DateFin" id="DateFin" value={formData.DateFin} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>

        <div className="bg-white shadow-md rounded-lg m-6 p-6 focus:border-blue-500 focus:ring-blue-500 ">
          <button type="submit" className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">Soumettre</button>
        </div>
          </form>
    </div>
    </>      

    );
}
export default MouvementInfoForm