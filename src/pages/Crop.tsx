import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {deleteCrop, setCrop, updateCrop} from "../slice/CropSlice.ts";
import {RootState} from "../store/Store.ts";
import {Button} from "../component/Button.tsx";
import {Crop} from "../model/Crop.ts";

export const CropForm = () => {
    const [showForm, setShowForm] = useState(false);
    const [lastCropNumber, setLastCropNumber] = useState(0);

    //generate code
    const generateCropCode = () => {
        const nextNumber = lastCropNumber + 1;
        const formattedNumber = String(nextNumber).padStart(3, "0"); // Formats number to 3 digits
        setLastCropNumber(nextNumber);
        return `CRP-${formattedNumber}`;
    };
    const toggleForm = () => {
        if (!showForm) {
            setCropCode(generateCropCode());
        }
        setShowForm(!showForm);
    };
    // image preview
    const [cropImagePreview, setCropImagePreview] = useState("");
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setCropImagePreview(event.target.result);
            };
            reader.readAsDataURL(file);
            setCropImage(file);
        } else {
           setCropImagePreview("");
        }
    };

    const dispatch = useDispatch();
    const [cropCode, setCropCode] = useState("");
    const [cropCommonName, setCropCommonName] = useState("");
    const [cropScientificName, setCropScientificName] = useState("");
    const [category, setCategory] = useState("");
    const [cropSeason, setCropSeason] = useState("");
    const [fieldCode, setFieldCode] = useState("");
    const [cropImage, setCropImage] = useState("");
    const crops = useSelector((state:RootState) => state.crop.crops);

    //add crop
    function AddCrop(e) {
        e.preventDefault();
        const newCrop = {cropCode, cropCommonName, cropScientificName, cropImage, category, cropSeason, fieldCode};
        dispatch(setCrop(newCrop));
        console.log(newCrop);
        alert("Crop was added Successfully!!.");
        clear();
        setShowForm(false);
    }
    //update crop
    function handleRowClick(crop:Crop){
        setCropCode(crop.cropCode);
        setCropCommonName(crop.cropCommonName);
        setCropScientificName(crop.cropScientificName);
        setCropImage(crop.cropImage);
        setCategory(crop.category);
        setCropSeason(crop.cropSeason);
        setFieldCode(crop.fieldCode);
        setShowForm(true);
    }

    function UpdateCrop(){
        const updatedCrops = {cropCode, cropCommonName,cropScientificName,cropImage,category,cropSeason,fieldCode};
        dispatch(updateCrop(updatedCrops));
        console.log(updatedCrops);
        alert("Update crop successfully!");
        clear();
        setShowForm(false);
    }

    //delete crop
    function DeleteCrop(cropCode:string){
        alert("Crop was deleted Successfully!");
        dispatch(deleteCrop(cropCode));
        setShowForm(false);
    }

    function clear(){
        setCropCode("");
        setCropCommonName("");
        setCropScientificName("");
        setCategory("");
        setCropImage("");
        setCropSeason("");
        setFieldCode("");
    }
    return (
        <div className="main">
            <nav className="flex justify-between items-center text-white p-4 rounded-md md-7">
                <h1 className="text-xl font-bold text-green-500">Crop Management</h1>
                <Button label={showForm ? "Close Form" : "Add Crop"} onClick={toggleForm} className="bg-green-500 py-2 px-2 rounded-full text-white hover:bg-green-600"/>
            </nav>
            {/* Crop Form */}
            {showForm && (
                <div className="bg-transparent p-4 rounded-md shadow-md mb-8 m-4">
                    <h2 className="text-2xl font-bold text-white mb-4">Crop Form</h2>
                    <form className="space-y-4" onSubmit={AddCrop}>
                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <label className="block mb-1 text-black">Crop Code</label>
                                <input type="text" readOnly className="w-full p-2 border border-gray-300 rounded-full"
                                        value={cropCode}
                                       onChange={(e) => setCropCode(e.target.value)}/>
                            </div>
                            <div>
                                <label className="block mb-1 text-black">Crop Common Name</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded-full"
                                       placeholder="Common Name" value={cropCommonName}
                                       onChange={(e) => setCropCommonName(e.target.value)}/>
                            </div>
                            <div>
                                <label className="block mb-1 text-black">Crop Scientific Name</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded-full"
                                       placeholder="Scientific Name" value={cropScientificName}
                                       onChange={(e) => setCropScientificName(e.target.value)}/>
                            </div>
                            <div>
                                <label className="block mb-1 text-black">Category</label>
                                <select className="w-full p-2 border border-gray-300 rounded-full" value={category}
                                        onChange={(e) => setCategory(e.target.value)}>
                                    <option>Select Category</option>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="C">C</option>
                                </select>
                            </div>
                            <div>
                                <label className="block mb-1 text-black">Crop Section</label>
                                <select className="w-full p-2 border border-gray-300 rounded-full" value={cropSeason}
                                        onChange={(e) => setCropSeason(e.target.value)}>
                                    <option>Select Section</option>
                                    <option value="Section A">Section A</option>
                                    <option value="Section B">Section B</option>
                                    <option value="Section C">Section C</option>
                                </select>
                            </div>
                            <div>
                                <label className="block mb-1 text-black">Field Code</label>
                                <select className="w-full p-2 border border-gray-300 rounded-full"
                                       value={fieldCode} onChange={(e) => setFieldCode(e.target.value)}>
                                    <option>Select File</option>
                                    <option value="FED-001">FED-001</option>
                                    <option value="FED-002">FED-002</option>
                                    <option value="FED-003">FED-003</option>
                                </select>
                            </div>
                            <div>
                                <label className="block mb-1 text-black">Field Image</label>
                                <input type="file" className="w-full p-2 border border-gray-300 rounded-full"
                                       onChange={handleImageChange}/>
                                {cropImagePreview && (
                                    <div className="mt-4">
                                        <img src={cropImagePreview} alt="Preview"
                                             className="h-32 w-32 object-cover rounded-md"/>
                                    </div>
                                )}
                            </div>
                        </div>
                        <Button label="Save" onClick={AddCrop}
                                className="px-4 py-2 rounded-full m-4 bg-amber-300 text-white  hover:bg-amber-400"/>
                        <Button label="Update" onClick={UpdateCrop}
                                className="px-4 py-2 rounded-full m-4 bg-emerald-400 text-white  hover:bg-emerald-500"/>
                    </form>
                </div>
            )}
            {/* Crop Table */}
            <div>


                <table className="table m-2">
                    <thead>
                    <tr className="bg-gray-900">
                        <th className="border border-gray-300 px-4 py-2">Crop_Code</th>
                        <th className="border border-gray-300 px-4 py-2">Common Name</th>
                        <th className="border border-gray-300 px-4 py-2">Crop_Section</th>
                        <th className="border border-gray-300 px-4 py-2">Crop_Category</th>
                        <th className="border border-gray-300 px-4 py-2">Field_code</th>
                        <th className="border border-gray-300 px-4 py-2">Crop_Image</th>
                        <th className="border border-gray-300 px-4 py-2">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {crops.map((crop) => (
                        <tr key={crop.cropCode}>
                            <td className="border border-gray-300 px-4 py-2">{crop.cropCode}</td>
                            <td className="border border-gray-300 px-4 py-2">{crop.cropCommonName}</td>
                            <td className="border border-gray-300 px-4 py-2">{crop.cropSeason}</td>
                            <td className="border border-gray-300 px-4 py-2">{crop.category}</td>
                            <td className="border border-gray-300 px-4 py-2">{crop.fieldCode}</td>
                            <td className="border border-gray-300 px-4 py-2">{crop.cropImage &&
                                <img src={cropImagePreview} alt="Field Image 1"
                                     className="h-16 w-16 object-cover rounded-md"/>}</td>
                            <td className="border border-gray-300 px-4 py-2">
                                <Button label="Update" className="px-4 py-2 m-4 rounded-full bg-emerald-400 text-white hover:bg-emerald-500" onClick={() => handleRowClick(crop)}/>
                                <Button label="Delete" onClick = {() => DeleteCrop(crop.cropCode)} className=" px-4 py-2 rounded-full m-4 bg-rose-300 text-white hover:bg-rose-500"/>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
