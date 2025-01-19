import  { useState } from "react";
import "../style/Staff.css"
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/Store.ts";
import {deleteStaff, setStaff, updateStaff} from "../slice/StaffSlice.ts";
import {Staff} from "../model/Staff.ts";
import {Button} from "../component/Button.tsx";

export const Staffs = () => {
    const [showForm, setShowForm] = useState(false);
    const [lastStaffId, setLastStaffId] = useState("");

    //generate id
    const generateStaffId =()=>{
        const nextNumber = lastStaffId + 1;
        const formattedNumber = String(nextNumber).padStart(3, "0");
        setLastStaffId(nextNumber);
        return `STF-${formattedNumber}`;
    };
    const toggleForm = () => {
        if (!showForm){
            setId(generateStaffId());
        }
        setShowForm(!showForm);
    };
    const dispatch = useDispatch();
    const [id, setId] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [ designation, setDesignation] = useState("");
    const [gender, setGender] = useState("");
    const [joinDate, setJoinDate] = useState("");
    const [dob, setDob] = useState("");
    const [addressLine1, setAddressLine1] = useState("");
    const [addressLine2, setAddressLine2] = useState("");
    const [addressLine3, setAddressLine3] = useState("");
    const [addressLine4, setAddressLine4] = useState("");
    const [addressLine5, setAddressLine5] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const  staff = useSelector((state:RootState) => state.staff.staffs);

    //add staff
    function addStaff(e) {
        e.preventDefault(); // Prevent form from submitting
        const newStaff = {
            id, firstName, lastName, designation, gender, joinDate, dob, addressLine1, addressLine2, addressLine3, addressLine4, addressLine5, contactNumber, email, role
        };
        dispatch(setStaff(newStaff));
        alert("Staff member added successfully!");
        clearData();
    }

    //update staff
    function handleRowClick(staff:Staff) {
        setId(staff.id);
        setFirstName(staff.firstName);
        setLastName(staff.lastName);
        setDesignation(staff.designation);
        setGender(staff.gender);
        setJoinDate(staff.joinDate);
        setDob(staff.dob);
        setAddressLine1(staff.addressLine1);
        setAddressLine2(staff.addressLine2);
        setAddressLine3(staff.addressLine3);
        setAddressLine4(staff.addressLine4);
        setAddressLine5(staff.addressLine5);
        setContactNumber(staff.contactNumber);
        setEmail(staff.email);
        setRole(staff.role);
        setShowForm(true);
    }
    function UpdateStaff() {
        const updateStaffs ={id, firstName, lastName, designation, gender, joinDate, dob, addressLine1, addressLine2, addressLine3, addressLine4, addressLine5, contactNumber, email, role};
        dispatch(updateStaff(updateStaffs));
        alert("Staff member updated successfully!");
        setShowForm(false);
    }

    //delete staff
    function handleDeleteStaff(email:string) {
        alert("Staff member delete successfully!!")
        dispatch(deleteStaff(email))
        setShowForm(false);
    }
    //clear data
    function clearData(){
        setId("");
        setFirstName("");
        setLastName("");
        setDesignation("");
        setGender("");
        setJoinDate("");
        setDob("");
        setAddressLine1("");
        setAddressLine2("");
        setAddressLine3("");
        setAddressLine4("");
        setAddressLine5("");
        setContactNumber("");
        setEmail("");
        setRole("");
        setShowForm(true);
    }
    return (
        <div className="main" >
            {/* Navigation bar with "Add Staff " button */}
            <nav className="flex justify-between items-center  text-black p-4 rounded-md md-7">
                <h1 className="text-xl font-bold text-green-500">Staff Management</h1>
                <Button label={showForm ? "Close Form" : "Add Staff"} onClick={toggleForm} className="bg-green-500 rounded-full text-white hover:bg-green-600"/>
            </nav>
            {/* Staff Form */}
            {showForm && (
                <div className="bg-transparent p-4 rounded-md shadow-md mb-8 m-4">
                    <h2 className="text-2xl font-bold text-white mb-4">Staff Form</h2>
                    <form className="space-y-4">
                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <label className="block mb-1 text-black">Staff ID</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded-full" readOnly value={id}
                                       onChange={(e) => setId(e.target.value)}/>
                            </div>
                            <div>
                                <label className="block mb-1 text-black">First Name</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded-full" placeholder="firstName" value={firstName}
                                       onChange={(e) => setFirstName(e.target.value)}/>
                            </div>
                            <div>
                                <label className="block mb-1 text-black">Last Name</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded-full" placeholder="lastName" value={lastName}
                                       onChange={(e) => setLastName(e.target.value)}/>
                            </div>
                            <div>
                                <label className="block mb-1 text-black">Designation</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded-full" placeholder='designation' value={designation}
                                       onChange={(e) => setDesignation(e.target.value)}/>
                            </div>
                            <div>
                                <label className="block mb-1 text-black">Gender</label>
                                <select className="w-full p-2 border border-gray-300 rounded-full" value={gender}
                                        onChange={(e) => setGender(e.target.value)}>
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label className="block mb-1 text-black">Joined Date</label>
                                <input type="date" className="w-full p-2 border border-gray-300 rounded-full" value={joinDate}
                                       onChange={(e) => setJoinDate(e.target.value)}/>
                            </div>
                            <div>
                                <label className="block mb-1 text-black">Date of Birth</label>
                                <input type="date" className="w-full p-2 border border-gray-300 rounded-full" value={dob}
                                       onChange={(e) => setDob(e.target.value)}/>
                            </div>
                            <div>
                                <label className="block mb-1 text-black">Address Line1</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded-full" value={addressLine1}
                                       onChange={(e) => setAddressLine1(e.target.value)}/>
                            </div>
                            <div>
                                <label className="block mb-1 text-black">Address Line2</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded-full" value={addressLine2}
                                       onChange={(e) => setAddressLine2(e.target.value)}/>
                            </div>
                            <div>
                                <label className="block mb-1 text-black">Address Line3</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded-full" value={addressLine3}
                                       onChange={(e) => setAddressLine3(e.target.value)}/>
                            </div>
                            <div>
                                <label className="block mb-1 text-black">Address Line4</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded-full" value={addressLine4}
                                       onChange={(e) => setAddressLine4(e.target.value)}/>
                            </div>
                            <div>
                                <label className="block mb-1 text-black">Address Line5</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded-full" value={addressLine5}
                                       onChange={(e) => setAddressLine5(e.target.value)}/>
                            </div>
                            <div>
                                <label className="block mb-1 text-black">Contact Number</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded-full" value={contactNumber}
                                       onChange={(e) => setContactNumber(e.target.value)}/>
                            </div>
                            <div>
                                <label className="block mb-1 text-black">Email</label>
                                <input type="email" className="w-full p-2 border border-gray-300 rounded-full" value={email}
                                       onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div>
                                <label className="block mb-1 text-black">Role</label>
                                <select className="w-full p-2 border border-gray-300 rounded-full" value={role}
                                        onChange={(e) => setRole(e.target.value)}>
                                    <option value="MANAGER">Manager</option>
                                    <option value="ADMINISTRATIVE">Administrative</option>
                                    <option value="SCIENTIST">Scientist</option>
                                </select>
                            </div>
                        </div>
                        <Button label="Save" onClick={addStaff}   className="px-4 py-2 rounded-full m-4 bg-amber-300 text-white  hover:bg-amber-400"/>
                        <Button label="Update" onClick={UpdateStaff} className="px-4 py-2 rounded-full m-4 bg-emerald-400 text-white hover:bg-emerald-500"/>
                    </form>
                </div>
            )}

            {/* Staff Table */}
            <div>


                <table className="table m-2">
                    <thead >
                    <tr className="border-l-black">
                        <th className="border border-l-black px-4 py-2">Staff _</th>
                        <th className="border border-gray-300 px-4 py-2">First_Name</th>
                        <th className="border border-gray-300 px-4 py-2">Gender</th>
                        <th className="border border-gray-300 px-4 py-2">Contact_No</th>
                        <th className="border border-gray-300 px-4 py-2">Email</th>
                        <th className="border border-gray-300 px-4 py-2">Role</th>
                        <th className="border border-gray-300 px-4 py-2">Actions</th>
                    </tr>
                    </thead>
                    <tbody id="staffTableBody">
                    {staff.map((staff) => (
                        <tr key={staff.id}>
                            <td className="border border-gray-300 px-4 py-2 border border-gray-300 rounded-md">{staff.id}</td>
                            <td className="border border-gray-300 px-4 py-2 border border-gray-300 rounded-md">{staff.firstName}</td>
                            <td className="border border-gray-300 px-4 py-2 border border-gray-300 rounded-md">{staff.gender}</td>
                            <td className="border border-gray-300 px-4 py-2 border border-gray-300 rounded-md">{staff.contactNumber}</td>
                            <td className="border border-gray-300 px-4 py-2 border border-gray-300 rounded-md">{staff.email}</td>
                            <td className="border border-gray-300 px-4 py-2 border border-gray-300 rounded-md">{staff.role}</td>
                            <td className="border border-gray-300 px-4 py-2">
                                <Button label="Update" onClick={() => handleRowClick(staff)} className="px-4 py-2 rounded-full m-4 bg-emerald-400 text-white hover:bg-emerald-500"/>
                                <Button label="Delete" onClick={() => handleDeleteStaff(staff.email)} className="px-4 py-2 rounded-full m-4 bg-rose-300 text-white hover:bg-rose-400"/>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
