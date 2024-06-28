import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';  
import PropTypes from 'prop-types';


const ProtectedRoute = ({ allowedRoles }) => {
    const { userInfo } = useSelector((state) => state.user);

    if (!userInfo) {
      return <Navigate to="/" />;
    }
  
    if (allowedRoles && !allowedRoles.includes(userInfo.role)) {
      return <Navigate to="/unauthorized" />;
    }
  
    return <Outlet />;
  };

ProtectedRoute.propTypes = {
    allowedRoles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

  export default ProtectedRoute