
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteInfo, fetchInfo} from '../redux/slices/InformationsSlice';
import { RiSearchLine } from 'react-icons/ri';

const AffichageFonctionnaires = () => {
  const dispatch = useDispatch();
  const { informations, loading, error } = useSelector((state) => state.InformationsReducer);

  useEffect(() => {
    dispatch(fetchInfo());
 } , [dispatch]
);

  const [filterDate, setFilterDate] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleDelete = (id) => {
    dispatch(deleteInfo(id));
  };
 
  

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const filteredInformations = informations.filter((information) => {
    const isDateMatch = filterDate === '' || (information.created_at && information.created_at.includes(filterDate));
    const isSearchMatch =
      searchQuery === '' ||
      (information.stagiaire && information.stagiaire.user && information.stagiaire.user.nom && information.stagiaire.user.nom.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (information.stagiaire && information.stagiaire.cin && information.stagiaire.cin.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (information.stagiaire && information.stagiaire.user && information.stagiaire.user.prenom && information.stagiaire.user.prenom.toLowerCase().includes(searchQuery.toLowerCase()));
    return isDateMatch && isSearchMatch;
  });

  return (
    <div className="p-4 ">
      <div className="flex flex-col sm:flex-row justify-between items-center mt-20 mb-8">
        
        <div className="mb-4 sm:mb-0">
          <label htmlFor="filterDate" className=" mb-1 pr-4">Filter by Date : </label>
          <input
            id="filterDate"
            type="date"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
            className="border rounded-md px-2 py-1"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="searchQuery" className=" mb-1 pr-4">Search : </label>
          <div className="relative">
            <input
              id="searchQuery"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name"
              className="border rounded-md px-2 py-1 pl-8 pr-3"
            />
            <RiSearchLine className="absolute h-5 w-5 text-gray-500 top-1/2 transform -translate-y-1/2 left-3" />
          </div>
        </div>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md float-left"><Link to="/Stepper">Ajouter</Link></button>
      </div>
      <table className="w-full border-collapse border">
        <thead>
          <tr className="border px-4 py-2 w-60">
            <th >ID</th>
            <th >stagiaire</th>
            <th >CIN</th>
            <th >adresse</th>
            <th >Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredInformations.map((information) => (
            <tr key={information.id} >
              <td className="border px-4 py-2 w-60">{information.id}</td>
              <td className="border px-4 py-2 w-60">{information.stagiaire.user.nom} {information.stagiaire.user.prenom}</td>
              <td className="border px-4 py-2 w-60">{information.stagiaire.cin}</td>
              <td className="border px-4 py-2 w-60">{information.stagiaire.adresse}</td>
              <td className="border w-60 px-4 py-2">
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-1 " onClick={() => handleDelete(information.id)}>Delete</button>            
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" ><Link to={`/informations/${information.id}`}>Details</Link></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AffichageFonctionnaires;
