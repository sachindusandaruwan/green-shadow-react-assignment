import "../style/FieldForm.css";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/Store.ts";
import {deleteField, setField, updateField} from "../slice/FieldSlice.ts";
import {Field} from "../model/Field.ts";
import { Button } from "../component/Button";

export const FieldForm = () => {
    const [showForm, setShowForm] = useState(false);
    const [lastFieldNumber, setLastFieldNumber] = useState(0);

    //generate code
    const generateFieldCode = () => {
        const nextNumber = lastFieldNumber + 1;
        const formattedNumber = String(nextNumber).padStart(3, "0");
        setLastFieldNumber(nextNumber);
        return `FED -${formattedNumber}`;
    };

    const toggleForm = () => {
        if (!showForm){
            setFieldCode(generateFieldCode());
        }
        setShowForm(!showForm);
    };

   // image preview
    const [fieldImagePreview1, setFieldImagePreview1] = useState("");
    const [fieldImagePreview2, setFieldImagePreview2] = useState("");
    const handleImageChange1 = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setFieldImagePreview1(event.target.result); // Update the preview state for image 1
            };
            reader.readAsDataURL(file);
            setFieldImage1(file); // Save the file itself to be stored in the state
        } else {
            setFieldImagePreview1(""); // Clear the preview if no file selected
        }
    };

    const handleImageChange2 = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setFieldImagePreview2(event.target.result);
            };
            reader.readAsDataURL(file);
            setFieldImage2(file);
        } else {
            setFieldImagePreview2("");
        }
    };

    const dispatch = useDispatch();
    const [fieldCode, setFieldCode] = useState("");
    const [fieldName, setFieldName] = useState("");
    const [fieldLocation, setFieldLocation] = useState("");
    const [extentSize, setExtentSize] = useState<number>(0);
    const [fieldImage1, setFieldImage1] = useState("");
    const [fieldImage2, setFieldImage2] = useState("");
    const field= useSelector((state:RootState) =>state.field.fields);

    //add field
    function AddField(e){
        e.preventDefault();
        const newField ={
            fieldCode:fieldCode,fieldName:fieldName,
            fieldLocation:fieldLocation,extentSize:extentSize,
            fieldImage1:fieldImage1,fieldImage2:fieldImage2,
        };
        dispatch(setField(newField));
        alert("Field member added successfully!!");
        clear();
        setShowForm(false);
    }
    //update field
    function handleRowClick(field:Field){
        setFieldCode(field.fieldCode);
        setFieldName(field.fieldName);
        setFieldLocation(field.fieldLocation);
        setExtentSize(Number(field.extentSize));
        setFieldImage1(field.fieldImage1);
        setFieldImage2(field.fieldImage2);
        setShowForm(true);
    }

    function UpdateField(){
        const updatedFields = {
            fieldCode:fieldCode,fieldName:fieldName,
            fieldLocation:fieldLocation,extentSize:extentSize,
            fieldImage1:fieldImage1,fieldImage2:fieldImage2,
        };
        dispatch(updateField(updatedFields));
        alert("Updated Field successfully!!");
        clear();
        setShowForm(false);
    }

    //delete field
    function DeleteField(fieldCode:string){
        alert("Field Deleted Successfully!!");
        dispatch(deleteField(fieldCode));
        setShowForm(false);
    }
    function clear(){
        setFieldCode("");
        setFieldName("");
        setFieldLocation("");
        setExtentSize("")
        setFieldImage1("");
        setFieldImage2("");

    }
    return (
        <div className="main">
            {/* Navigation bar with "Add Field " button */}
            <nav className="flex justify-between items-center  text-white p-4 rounded-md md-7">
                <h1 className="text-xl font-bold text-green-500">Field Management</h1>
                <Button label={showForm ? "Close Form" : "Add Field"} onClick={toggleForm} className="bg-green-500 rounded-full text-white hover:bg-green-600"/>
            </nav>
            {/* Field Form */}
            {showForm && (
                <div className="bg-transparent p-4 rounded-md shadow-md mb-8 m-4">
                    <h2 className="text-2xl font-bold text-white mb-4">Field Form</h2>
                    <form className="space-y-4">
                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <label className="block mb-1 text-black">Field Code</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded-full"
                                       readOnly value={fieldCode} onChange={(e) => setFieldCode(e.target.value)}/>
                            </div>
                            <div>
                                <label className="block mb-1 text-black">Field Name</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded-full"
                                       placeholder="field Name" value={fieldName} onChange={(e) => setFieldName(e.target.value)}/>
                            </div>
                            <div>
                                <label className="block mb-1 text-black">Location</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded-full"
                                       placeholder='Location' value={fieldLocation} onChange={(e) => setFieldLocation(e.target.value)}/>
                            </div>
                            <div>
                                <label className="block mb-1 text-black">Extent Size</label>
                                <select className="w-full p-2 border border-gray-300 rounded-full" value={extentSize} onChange={(e) => setExtentSize(e.target.value)}>
                                    <option value={0}>Select Size</option>
                                    <option value={1000}>1000</option>
                                    <option value={2000}>2000</option>
                                    <option value={3000}>3000</option>
                                </select>
                            </div>
                            <div>
                                <label className="block mb-1 text-black">Field Image</label>
                                <input type="file" className="w-full p-2 border border-gray-300 rounded-full" onChange={handleImageChange1}/>
                                {/* Image Preview */}
                                {fieldImagePreview1 && (
                                    <div className="mt-4">
                                        <img src={fieldImagePreview1} alt="Preview" className="h-32 w-32 object-cover rounded-full"/>
                                    </div>
                                )}
                            </div>
                            <div>
                                <label className="block mb-1 text-black">Field Image</label>
                                <input type="file" className="w-full p-2 border border-gray-300 rounded-full" onChange={handleImageChange2}/>
                                {/* Image Preview */}
                                {fieldImagePreview2 && (
                                    <div className="mt-4">
                                        <img src={fieldImagePreview2} alt="Preview" className="h-32 w-32 object-cover rounded-md"/>
                                    </div>
                                )}
                            </div>

                        </div>
                        <Button label="Save" onClick={AddField}   className="px-4 py-2 m-4 bg-amber-300 text-white rounded-full hover:bg-amber-400"/>
                        <Button label="Update" onClick={UpdateField} className="px-4 py-2 m-4 bg-emerald-400 text-white rounded-full hover:bg-emerald-500"/>
                    </form>
                </div>
            )}
            {/* Filed Table */}
            <div>

                <table className="table m-2">
                    <thead>
                    <tr className="bg-gray-900">
                        <th className="border border-gray-300 px-4 py-2">Field_Code</th>
                        <th className="border border-gray-300 px-4 py-2">Field_Name</th>
                        <th className="border border-gray-300 px-4 py-2">Location</th>
                        <th className="border border-gray-300 px-4 py-2">Extend_Size</th>
                        <th className="border border-gray-300 px-4 py-2">Field_Image</th>
                        <th className="border border-gray-300 px-4 py-2">Field_Image</th>
                        <th className="border border-gray-300 px-4 py-2">Actions</th>
                    </tr>
                    </thead>
                    <tbody id="fieldTableBody">
                    {field.map((field) => (
                        <tr key={field.fieldCode}>
                            <td className="border border-gray-300 px-4 py-2 border border-gray-300 rounded-md">{field.fieldCode}</td>
                            <td className="border border-gray-300 px-4 py-2 border border-gray-300 rounded-md">{field.fieldName}</td>
                            <td className="border border-gray-300 px-4 py-2 border border-gray-300 rounded-md">{field.fieldLocation}</td>
                            <td className="border border-gray-300 px-4 py-2 border border-gray-300 rounded-md">{field.extentSize}</td>
                            <td className="border border-gray-300 px-4 py-2 border border-gray-300 rounded-md">{field.fieldImage1 &&
                                <img src={fieldImagePreview1} alt="Field Image 1"
                                     className="h-16 w-16 object-cover rounded-md"/>}</td>
                            <td className="border border-gray-300 px-4 py-2 border border-gray-300 rounded-md">{field.fieldImage2 &&
                                <img src={fieldImagePreview2} alt="Field Image 2"
                                     className="h-16 w-16 object-cover rounded-md"/>}</td>
                            <td className="border border-gray-300 px-4 py-2">
                                <Button label="Update" onClick={() => handleRowClick(field)} className="px-4 py-2 m-4 rounded-full bg-emerald-400 text-white hover:bg-emerald-500"/>
                                <Button label="Delete" onClick={() => DeleteField(field.fieldCode)} className="px-4 py-2 rounded-full m-4 bg-rose-300 text-white hover:bg-rose-300"/>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};


