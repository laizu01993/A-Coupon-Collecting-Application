
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const MyProfile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="w-11/12 mx-auto mt-6 my-4">
            {/* Cover with welcome */}
            <div className="relative h-60 bg-blue-300 rounded-lg flex items-center justify-center shadow-md">
                <h1 className="text-4xl font-bold text-white">Welcome to Your Profile</h1>
            </div>

            {/* Profile Card */}
            <div className="max-w-md mx-auto mt-[-60px]">
                <div className="bg-white shadow-lg rounded-lg p-6 relative z-10">
                    <img
                        src={user?.photoURL || "https://via.placeholder.com/150"}
                        alt="Profile"
                        className="w-24 h-24 rounded-full mx-auto border-4 border-white -mt-12 object-cover"
                    />
                    <h2 className="text-center text-2xl font-bold mt-4">{user?.displayName || "No Name"}</h2>
                    <p className="text-center text-gray-600">{user?.email}</p>

                    {/* Update section */}
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold mb-2">Update Info (Coming Soon)</h3>
                        <button className="btn btn-sm btn-primary">Update Profile</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
