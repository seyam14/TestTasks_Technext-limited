
import  { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Swal from 'sweetalert2';


const AddUser = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const handleAddUser = e => {
    e.preventDefault();
const form = new FormData(e.currentTarget);
const newUser = {
    image: form.get("image"),
  firstName: form.get("firstName"),
  lastName: form.get("lastName"),
  email: form.get("email"),
  address: form.get("address"),
  city: form.get("city"),
  postalCode: form.get("postalCode"),
  companyName: form.get("companyName"),
};
console.log(newUser);
fetch(`https://dummyjson.com/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'User Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
                      })
                }
            })
setOpen(false)
}

        const modalStyle = {
            modal: {
            borderRadius:'10px',
            boxShadow:"2px"
            },
        };

  return (
    <div>
      <button className='text-blue-500 border rounded p-2 ' onClick={onOpenModal}>Add User</button>
      <Modal styles={modalStyle}  open={open} onClose={onCloseModal} center>
      <form onSubmit={handleAddUser}>
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-700 ">Image URL</label>
          <input type="text" id="image" name="image"  className="mt-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
            <input type="text" id="firstName" name="firstName"  className="mt-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
            <input type="text" id="lastName" name="lastName"  className="mt-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" name="email"  className="mt-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Street</label>
          <input type="text" id="address" name="address"  className="mt-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="City" className="block text-sm font-medium text-gray-700">City</label>
            <input type="text" id="City" name="address.City" className="mt-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
          </div>
          <div>
            <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">Suite</label>
            <input type="text" id="postalCode" name="postalCode"  className="mt-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name</label>
          <input type="text" id="companyName" name="companyName" className="mt-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
        </div>
        <button type="submit" className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
      </form>
      </Modal>
    </div>
  );
};

export default AddUser;

