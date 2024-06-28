

const Unauthorized = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">Unauthorized</h2>
        <p className="text-center text-gray-600">You do not have access to this page.</p>
      </div>
    </div>
  );
};

export default Unauthorized;