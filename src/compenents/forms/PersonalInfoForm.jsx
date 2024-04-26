import  { useState } from 'react';
// import {useHistory} from 'react-router-dom';

const PersonalInfoForm = () => {
  // const history = useHistory(); 
 const [formData, setFormData] = useState({
    cin: '',
    nom: '',
    prenom: '',
    sexe: '',
    dateNaissance: '',
    lieuNaissance: '',
    ville: '',
    commune: '',
    quartier: '',
    rue: '',
    numero: '',
    codePostal: '',
    tel: '',
    email: '',
 });

//  const handleNext = () => {
//   // Rediriger vers la page FamillyForm lorsqu'on clique sur le bouton
//   history.push('/familyInfoForm');
//  }

 const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
 };

 const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
 };

 return (
  <>
    <div className="flex items-center justify-center  text-2xl font-bold"><h1>Les données personnels :</h1></div>
    <div className="flex items-center justify-center min-h-screen">     
      <form onSubmit={handleSubmit} className="space-y-4 mt-1 block w-1/2 p-2 border border-gray-300 rounded-md">
        <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 ">
          <label htmlFor="cin" className="block text-sm font-medium text-gray-700">CIN</label>
          <input type="text" name="cin" id="cin" value={formData.cin} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div className="bg-white shadow-md rounded-lg p-6  m-6 focus:border-blue-500 focus:ring-blue-500 ">
          <label htmlFor="nom" className="block text-sm font-medium text-gray-700">Nom</label>
          <input type="text" name="nom" id="nom" value={formData.nom} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 focus:ring-blue-500 ">
          <label htmlFor="prenom" className="block text-sm font-medium text-gray-700">Prénom</label>
          <input type="text" name="prenom" id="prenom" value={formData.prenom} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div className="bg-white shadow-md rounded-lg m-6 p-6">
          <label className="block text-sm font-medium text-gray-700">Sexe</label>
          <div className="flex items-center space-x-8">
              <input type="radio" id="homme" name="sexe" value="homme" checked={formData.sexe === 'homme'} onChange={handleChange} className="form-radio text-blue-500" />
              <label htmlFor="homme" className="text-sm text-gray-700">Homme</label>
              <input type="radio" id="femme" name="sexe" value="femme" checked={formData.sexe === 'femme'} onChange={handleChange} className="form-radio text-blue-500" />
              <label htmlFor="femme" className="text-sm text-gray-700">Femme</label>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg m-6 p-6 focus:border-blue-500 focus:ring-blue-500 ">
          <label htmlFor="dateNaissance" className="block text-sm font-medium text-gray-700">Date de naissance</label>
          <input type="date" name="dateNaissance" id="dateNaissance" value={formData.dateNaissance} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div className="bg-white shadow-md rounded-lg m-6 p-6 focus:border-blue-500 focus:ring-blue-500 ">
          <label htmlFor="lieuNaissance" className="block text-sm font-medium text-gray-700">Lieu de naissance</label>
          <input type="text" name="lieuNaissance" id="lieuNaissance" value={formData.lieuNaissance} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div className="bg-white shadow-md rounded-lg m-6 p-6 focus:border-blue-500 focus:ring-blue-500 ">
          <label htmlFor="ville" className="block text-sm font-medium text-gray-700">Ville</label>
          <select name="ville" id="ville" value={formData.ville} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
            <option value="agadir" className="default">Agadir</option>
         
          </select>
        </div >
        <div  className="flex items-center space-x-20 ">
              <div className="bg-white shadow-md rounded-lg p-6  m-6 focus:border-blue-500 focus:ring-blue-500 ">
                <label htmlFor="quartier" className="block text-sm font-medium text-gray-700">Quartier</label>
                <input type="text" name="quartier" id="quartier" value={formData.quartier} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
              </div>
              <div className="bg-white shadow-md rounded-lg p-6 focus:border-blue-500 focus:ring-blue-500 ">
                <label htmlFor="rue" className="block text-sm font-medium text-gray-700">Rue / Avenue</label>
                <input type="text" name="rue" id="rue" value={formData.rue} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
              </div>
        </div>

        <div className="flex items-center space-x-20 ">
                    
                     <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 focus:ring-blue-500 ">
                        <label htmlFor="numero" className="block text-sm font-medium text-gray-700">Numéro</label>
                        <input type="text" name="numero" id="numero" value={formData.numero} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
                      </div>
                    <div className="bg-white shadow-md rounded-lg p-6 focus:border-blue-500 focus:ring-blue-500 ">
                      <label htmlFor="codePostal" className="block text-sm font-medium text-gray-700">Code Postal</label>
                      <input type="text" name="codePostal" id="codePostal" value={formData.codePostal} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
                    </div>
        </div>
        <div className="bg-white shadow-md rounded-lg m-6 p-6 focus:border-blue-500 focus:ring-blue-500 ">
          <label htmlFor="tel" className="block text-sm font-medium text-gray-700">Numéro de Téléphone</label>
          <input type="tel" name="tel" id="tel" value={formData.tel} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div className="bg-white shadow-md rounded-lg m-6 p-6 focus:border-blue-500 focus:ring-blue-500 ">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div className="bg-white shadow-md rounded-lg m-6 p-6 focus:border-blue-500 focus:ring-blue-500 ">
          <button type="submit" className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">Soumettre</button>
        </div>
      </form>
      </div>
    </>
 );
};

export default PersonalInfoForm;






